import React, {createContext, useReducer} from "react";
import Reducer from './Reducers';


const initialState = {
    posts: [],
    subjectsList: [],
    topicsList: [],
    titleSubject: null,
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
