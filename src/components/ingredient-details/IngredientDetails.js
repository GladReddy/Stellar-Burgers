import { useSelector } from 'react-redux';

import styles from './ingredient-details.module.scss';


const IngredientDetails = () => {
    const { image_large, name, fat, carbohydrates, calories, proteins } = useSelector(store => store.modal.data);

    return (
        <div className={styles.wrap}>
            <div className={styles.image}>
                <img src={image_large} alt={name}/>
            </div>
            <div className={styles.name}>
                {name}
            </div>
            <ul className={styles.details}>
                <li className="text text_type_main-default text_color_inactive">
                    Калории,ккал 
                    <span className="text_type_digits-default mt-2">{calories ?? '-'}</span>
                </li>
                <li className="text text_type_main-default text_color_inactive">
                    Белки, г 
                    <span className="text text_type_digits-default mt-2">{proteins ?? '-'}</span>
                </li> 
                <li className="text text_type_main-default text_color_inactive">
                    Жиры, г 
                    <span className="text text_type_digits-default mt-2">{fat ?? '-'}</span>
                </li>
                <li className="text text_type_main-default text_color_inactive">
                    Углеводы, г 
                    <span className="text text_type_digits-default mt-2">{carbohydrates ?? '-'}</span>
                </li>
            </ul>
        </div>
    );
};

export default IngredientDetails;
