import { PayloadAction, createSlice, isRejected } from "@reduxjs/toolkit";
import { ToastOptions } from 'react-native-toast-message';
import { ApiError } from "../../common/models/api-error";

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {},
    reducers: {
        // addSuccessNotification(_, action: PayloadAction<string>) {
        //     toast.success(action.payload);
        // },
        // addErrorNotification(_, action: PayloadAction<string>) {
        //     toast.error(action.payload);
        // },
        // addWarningNotification(_, action: PayloadAction<string>) {
        //     toast.warn(action.payload);
        // }
    addSuccessNotification: (_: any, action: PayloadAction<string>) => {},
    addErrorNotification: (_: any, action: PayloadAction<string>) => {},
    addWarningNotification: (_: any, action: PayloadAction<string>) => {},
    },
    extraReducers: (builder) => {
        builder.addMatcher(isRejected, (_, action) => {
            if(action.meta.rejectedWithValue) {
                const apiError  = action.payload as ApiError;

                if(apiError.status === 400 || apiError.status === 404) {
                    if(apiError.error)  addErrorNotification(apiError.error);

                    if(apiError.validationErrors) {
                        apiError.validationErrors.map((error) => {
                            addErrorNotification(error);
                        })
                    }
                }
            }
        })
    }
});

export const {addSuccessNotification, addErrorNotification, addWarningNotification} = notificationSlice.actions;
export default notificationSlice.reducer;