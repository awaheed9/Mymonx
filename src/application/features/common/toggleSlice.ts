import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../common/enums/api-status";
import { BaseState } from "../../common/models/base-state";

export interface ToggleState extends BaseState {
    isToggle: boolean;
}

const initialState: ToggleState = {
    status: ApiStatus.IDLE,
    isToggle: false
};

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.isToggle = !state.isToggle;
        }
    },
    extraReducers: (builder) => {

    }
});

export const {toggleMenu} = toggleSlice.actions;
export default toggleSlice.reducer;