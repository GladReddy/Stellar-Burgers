import { configureStore } from "@reduxjs/toolkit";
import ingredients from './ingredients/slice';
import cart from './cart/slice';
import modal from './modal/slice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    
    return next(action);
};

const store = configureStore({
    reducer: { ingredients, cart, modal },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
