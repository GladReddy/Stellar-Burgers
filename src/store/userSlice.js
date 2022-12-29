import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: false,
    name: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {    
        setUser: (state, { payload }) => {
            state.auth = true;                
            state.name = payload.name;                
            state.email = payload.email;
        }    
    }
});

const { actions, reducer } = userSlice;

export const {
    setUser
} = actions;

export default reducer;
