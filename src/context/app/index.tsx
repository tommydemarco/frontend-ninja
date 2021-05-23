import React, { createContext, useReducer } from "react";

interface AppState {
    loggedIn: boolean;
    showTabNavigation: boolean;
}

interface Action {
    type: string;
    payload: any;
}

export interface AppContextValue {
    state: AppState;
    dispatch: React.Dispatch<Action>;
}

export const APP_ACTION_TYPES = {
    SET_BOTTOM_NAVIGATION: "SET_BOTTOM_NAVIGATION"
}

const appInitialState: AppState = {
    loggedIn: false,
    showTabNavigation: true
}

const appContext = createContext<AppContextValue | null>(null)

const appReducer = (appState: AppState, action: Action): AppState => {
    switch(action.type) {
        case APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION:
            return { ...appState, showTabNavigation: action.payload }
    default:
        return appState
    }
}

const AppContext: React.FC<React.ReactNode> = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, appInitialState)
    const appContextValue = { state, dispatch } 

    return (
        <appContext.Provider value={appContextValue}>
            {children}
        </appContext.Provider>
    )
}

export { appContext }
export default AppContext;