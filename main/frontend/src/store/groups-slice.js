import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
    name: "groups",
    initialState: {
        groups: [],
        error: null,
    },
    reducers: {
        setGroups(state, action) {
            state.groups = action.payload;
        },
       
    },
   
});

export const setGroups = groupsSlice.actions;

export default groupsSlice