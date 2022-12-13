import { useState, useEffect, useContext } from 'react';

import OrderDetailsView from '../order-details-view/OrderDetailsView';

import useBurgerApi from '../../hooks/useBurgerApi';
import { CartContext } from '../../services/appContext';
import { renderContent } from '../../utils/burger-utils';
import { PROCESS_STATE } from '../../utils/constants';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addToCart, cartIngredientsSelectors } from '../../store/cart/slice';

import styles from './order-details.module.scss';

const OrderDetails = () => {    
    const { cart } = useContext(CartContext);
    const [number, setNumber] = useState(null);
	const { process, setProcess, createOrder } = useBurgerApi();

    
	const bun = useSelector(store => store.cart.bun);
	const ingredients = useSelector(cartIngredientsSelectors.selectAll);

    const ingredientsID = [bun._id, ...ingredients.map(el => el._id)];

    useEffect(() => {		
        createOrder(ingredientsID)
			.then(res => {
				if (res.success === true) {
					setNumber(res.order.number);       	
				} else {					
  					throw new Error();
				}
			})
			.then(() => setProcess(PROCESS_STATE.CONFIRMED))
			.catch(); //Обработка ошибок в хуке useHttp			
	}, []);

    const content = renderContent(process, OrderDetailsView, { number });

    return (
        <div className={styles.wrap}>
            {content}
        </div>
    );
};


export default OrderDetails;
