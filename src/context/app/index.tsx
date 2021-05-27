import React, { createContext, useReducer } from "react";

interface AppState {
    userId: null | string;
    showTabNavigation: boolean;
    health: number;
    helathModalOpen: boolean;
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
    SET_USER_ID: "SET_USER_ID",
    SET_HEALTH_MODAL: "SET_HEALTH_MODAL",
}

const appInitialState: AppState = {
    userId: null,
    showTabNavigation: true,
    health: 5,
    helathModalOpen: false,
}

const appContext = createContext<AppContextValue | null>(null)

const appReducer = (appState: AppState, action: Action): AppState => {
    switch(action.type) {
    case APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION:
        return { ...appState, showTabNavigation: action.payload }
    case APP_ACTION_TYPES.SET_USER_ID: 
        return { ...appState, userId: action.payload }
    case APP_ACTION_TYPES.SET_HEALTH_MODAL: 
        return { ...appState, helathModalOpen: action.payload }
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