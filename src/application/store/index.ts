import { Action, AnyAction, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";

import securityServiceReducer from '../features/security-service/securityServiceSlice';
import  staticDataServiceReducer  from "../features/staticData-service/sataticDataServiceSlice";
import  clientServiceReducer  from "../features/client-service/clientServiceSlice";
import  userProfileServiceReducer from "../features/user-profile-service/userProfileServiceSlice";

import  healthServiceReducer from "../features/health-service/healthServiceSlice";
import  usersServiceReducer from "../features/users-service/usersServiceSlice";

import orgServiceReducer  from "../features/org-service/orgServiceSlice";

import roleServiceReducer  from "../features/role-service/roleServiceSlice";


import  loadingReducer  from "../features/common/loadingSlice";
import  notificationReducer  from "../features/common/notificationSlice";
import  toggleReducer  from "../features/common/toggleSlice";

const combinedReducers = combineReducers({
    securityService: securityServiceReducer,
    staticDataService : staticDataServiceReducer,
    clientService: clientServiceReducer,
    userProfileService: userProfileServiceReducer,
    healthService: healthServiceReducer,
    usersService: usersServiceReducer,
    orgService: orgServiceReducer,
    roleService: roleServiceReducer,
    loading: loadingReducer,
    notification: notificationReducer,
    toggle: toggleReducer
});


const rootReducer = (state: any, action: AnyAction) => {
    if (action.type === "auth/logout") {
        return combinedReducers(undefined, action);
    }

    return combinedReducers(state, action);
}

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
