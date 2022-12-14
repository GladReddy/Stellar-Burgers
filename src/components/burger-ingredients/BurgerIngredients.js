import { useState, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import store from "../../store";
import { ingredientsSelectors } from '../../store/ingredients/slice';
import { INGREDIENTS_TYPES } from '../../utils/constants';
import { ingredientPropTypes } from '../../utils/prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCategory from '../ingredient-category/IngredientCategory';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import Modal from "../modals/Modal";

import styles from './b-ingredients.module.scss';


const BurgerIngredients = ({ ingredients }) => {	
	const dispatch = useDispatch();	
	const [ingredientModal, setIngredientModal] = useState(null);
	const [activeTab, setActiveTab] = useState(0);
	const typeRefs = useRef([]);
	const ingredientCats = Object.values(INGREDIENTS_TYPES);
	
	const handleIngredientOpen = (id) => {		
		const ingredient = {...ingredientsSelectors.selectById(store.getState(), id)};
		setIngredientModal(ingredient);	
	};

	const onTabClick = (value) => {
		typeRefs.current[value].scrollIntoView({ behavior: 'smooth' });
		setActiveTab(Object.keys(typeRefs.current).findIndex(el => el === value));
	}	

	const data = useMemo(() => {
		const arr = {};
		ingredientCats.forEach(el => {
			arr[el.key] = ingredients.filter(item => item.type === el.key)
		});

		return arr;
	}, [ingredients, ingredientCats]);
	
	return (
		<section className={styles.wrap}>
			<h1 className="pb-5 text text_type_main-large">Соберите бургер</h1>
			<div className={styles.tabs}>
				{ingredientCats.map((type, index) => (
					<Tab
						value={type.key}
						key={index}
						active={index === activeTab}
						onClick={onTabClick}
					>
						{type.name}
					</Tab>
				))}
			</div>
			<div className={styles.components}>
				{ingredientCats.map((type, index) => {
					return (
						<IngredientCategory
							innerRef={el => typeRefs.current[type.key] = el}
							category={type}
							ingredients={data[type.key]}
							key={index}
							onIngredientClick={handleIngredientOpen}
						/>
					);
				})}
			</div>			
			{ingredientModal && (
				<Modal title="Детали ингредиента" onClose={() => setIngredientModal(null)}> 
					<IngredientDetails ingredient={ingredientModal} />
				</Modal>
			)}			
		</section>
	);
};

BurgerIngredients.propTypes = {
	ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired)
};

export default BurgerIngredients;
