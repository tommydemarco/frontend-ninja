import React, { createContext, useReducer } from "react";

interface AppState {
    userId: null | string;
    showTabNavigation: boolean;
}

interface Action {
    type: string;
    payload: any;
}

export interface AppContextValue {
    appState: AppState;
    appDispatch: React.Dispatch<Action>;
}

export const APP_ACTION_TYPES = {
    SET_BOTTOM_NAVIGATION: "SET_BOTTOM_NAVIGATION",
    SET_USER_ID: "SET_USER_ID"
}

const appInitialState: AppState = {
    userId: null,
    showTabNavigation: true
}

const appContext = createContext<AppContextValue | null>(null)

const appReducer = (appState: AppState, action: Action): AppState => {
    switch(action.type) {
    case APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION:
        return { ...appState, showTabNavigation: action.payload }
    case APP_ACTION_TYPES.SET_USER_ID: 
        return { ...appState, userId: action.payload }
    default:
        return appState
    }
}

const AppContext: React.FC<React.ReactNode> = ({ children }) => {

    const [appState, appDispatch] = useReducer(appReducer, appInitialState)
    const appContextValue = { appState, appDispatch } 

    return (
        <appContext.Provider value={appContextValue}>
            {children}
        </appContext.Provider>
    )
}

export { appContext }
export default AppContext;