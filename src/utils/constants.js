import PropTypes from 'prop-types';

export const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
});
  
export const INGREDIENTS_TYPES = [
    {
        key: "bun",
        name: "Булки"
    },
    {
        key: "sauce",
        name: "Соусы"
    },
    {
        key: "main",
        name: "Начинки"
    }
];

export const API_URL = 'https://norma.nomoreparties.space/api';

export const PROCESS_STATE = Object.freeze({
    WAITING: 'waiting',
    LOADING: 'loading',
    CONFIRMED: 'confirmed',
    ERROR: 'error',
})

export const ESC_KEYCODE = 27

export const MODAL_PLACEMENT = document.getElementById('react-modals');
