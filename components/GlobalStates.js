import React, {useState} from 'react';

const initialState = {
    isLoading: true,
    isError: false,
    screenSection: 1,
};

export const Context = React.createContext();

const GlobalStates = ({ children }) => {
    const [state, setState] = useState(initialState);
    return(
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
};

export default GlobalStates;

