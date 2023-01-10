import {createSlice} from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        userId: null,
        email: null,
        name: null,
        image: null,
        isAuth: true,
        
        error: null,

    },
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.email = action.payload.email;

            state.name = action.payload.name;
            state.isAuth = true;
 
            state.error = null;
        },
        logout(state) {
            state.isAuth = false;
        },
         
    }
});

export const authActions = authSlice.actions;
export default authSlice