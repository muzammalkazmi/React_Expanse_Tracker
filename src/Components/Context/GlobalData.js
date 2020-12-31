 import React, { createContext, useReducer } from 'react'
 import AppReducer from './AppReducer'

 const firstState = {
         transactions: [
             { id: 1, Description: 'Paid Salaries', Amount: 2000 },
             { id: 1, Description: 'Paid Salaries', Amount: 2000 },
             { id: 1, Description: 'Paid Salaries', Amount: 2000 },
             { id: 1, Description: 'Paid Salaries', Amount: 2000 }
         ]
     }
     //store above firstState in variable to further use//
 const GlobalContext = createContext(firstState);
 //GlobalProvider created here to use in App.js//                                                                                 
 export const GlobalProvider = ({ children }) => {
     const [state, Dispatch] = useReducer(AppReducer, firstState)
     return ( <
         GlobalContext.Provider value = {
             { firstState: state.firstState }
         } > { children } <
         /GlobalContext.Provider>
     )
 }