import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    //#1 create context obj
    const Context = React.createContext();

    //#2 create provider function
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        //actions === {addBlogPost: (dispatch) => {return () => {}}}

        const boundActions = {};
        for (key in actions) {
            //key ==== addBlogPost
            //boundActions at key = actions at key
            //boundActions.addBlogPost = (dispatch) => {return () => {}}
            //call that function with dispatch
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};
