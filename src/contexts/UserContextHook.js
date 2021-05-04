import { createContext, useContext, useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
    avatar: ''
};

const stateLocal = JSON.parse(localStorage.getItem('user'));

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setName':
            return {...state, name: action.payload.name};
        break;
        case 'setEmail':
            return {...state, email: action.payload.email};    
        break;
        case 'setAll': 
            return  {
                ...state, 
                name: action.payload.name,
                email: action.payload.email,
                avatar: action.payload.avatar
            }
        break;
    }
    return state;
};

export const UserContext = createContext();

export const UserContextProvider = ({children}) => (
    <UserContext.Provider value={useReducer(reducer, stateLocal || initialState)}>
        {children}
    </UserContext.Provider>
);

export const useUserContext = () => useContext(UserContext);
