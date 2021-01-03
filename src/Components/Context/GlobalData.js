 import React, { createContext, useReducer } from 'react'
 import AppReducer from './AppReducer'

 const firstState = {
         transactions:[
             { id: 1, Description: 'Paid Salaries', Amount: 2000 },
             { id: 2, Description: 'Paid Salarwer', Amount: 2000 },
             { id: 3, Description: 'Paid wages', Amount: 2000 },
             { id: 4, Description: 'Paid bonus', Amount: 2000 }
         ]
     }
     //store above firstState in variable to further use//
 export const GlobalContext = createContext(firstState);
 //add function to delete transactions//
 function deltransaction(id){
     dispatch({
         type:delete_transaction,
         payload:id
     })
 }
 //GlobalProvider created here to use in App.js//                                                                                 
 export const GlobalProvider = ({ children }) => {
     const [state, Dispatch] = useReducer(AppReducer, firstState)
     return ( 
     <GlobalContext.Provider value = {
             { transactions: state.transactions,
            deltransaction
            }
         } > { children } 
         </GlobalContext.Provider>
     )
 }