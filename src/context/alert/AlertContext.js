import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

// Je crée une variable de contexte
const AlertContext = createContext()



// J'exporte un provider pour acceder au variables

export const AlertProvider = ({children}) => {
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState);


    //Set Alert 

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT', 
            payload: {msg, type}    
        })
        setTimeout (()=>dispatch ({type: 'REMOVE_ALERT'}), 3000)
    }

    return <AlertContext.Provider value = {{alert: state, setAlert}}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext