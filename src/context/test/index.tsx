import React, { createContext, useReducer } from "react";

interface TestState {
    rightAnswers: number;
    timeRemaining: number;
    senior: boolean;
}

interface Action {
    type: string;
    payload: any;
}

export interface AppContextValue {
    state: TestState;
    dispatch: React.Dispatch<Action>;
}

export const TEST_ACTION_TYPES = {
    ADD_RIGHT_ANSWER: "ADD_RIGHT_ANSWER",
    ADD_TIME_REMAINING: "ADD_TIME_REMAINING",
    IS_JUNIOR: "IS_JUNIOR"
}

const appInitialState: TestState = {
  rightAnswers: 0,
  timeRemaining: 0,
  senior: false
}

const testContext = createContext<AppContextValue | null>(null)

const appReducer = (testState: TestState, action: Action): TestState => {
    switch(action.type) {
      case TEST_ACTION_TYPES.ADD_RIGHT_ANSWER:
          return { ...testState,  rightAnswers: testState.rightAnswers + 1 }
      case TEST_ACTION_TYPES.ADD_TIME_REMAINING:
        return { ...testState,  timeRemaining: testState.timeRemaining + action.payload }
      case TEST_ACTION_TYPES.IS_JUNIOR:
        return { ...testState,  senior: false }
      default:
          return testState
      }
}

const TestContext: React.FC<React.ReactNode> = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, appInitialState)
    const appContextValue = { state, dispatch } 

    return (
        <testContext.Provider value={appContextValue}>
            {children}
        </testContext.Provider>
    )
}

export { testContext }
export default TestContext;