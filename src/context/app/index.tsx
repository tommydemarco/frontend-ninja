import React, { createContext, useReducer } from "react";

export interface AppContextValue {
    state: AppState;
    dispatch: React.Dispatch<Action>;
}

interface AppState {
    showBottomNavigation: boolean;
}

interface Action {
    type: string;
    payload: any;
}

export const APP_ACTION_TYPES = {
    SET_BOTTOM_NAVIGATION: "SET_BOTTOM_NAVIGATION"
}

const appContext = createContext({})

const appInitialState: AppState = {
    showBottomNavigation: true
}

const appReducer = (appState: AppState, action: Action): AppState => {
    switch(action.type) {
        case APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION:
            return { ...appState, showBottomNavigation: action.payload }
    default:
        return appState
    }
}

const AppContext: React.FC<React.ReactNode> = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, appInitialState)
    const appContextValue: AppContextValue = { state, dispatch } 

    return (
        <appContext.Provider value={appContextValue}>
            {children}
        </appContext.Provider>
    )
}

export { appContext }
export default AppContext;