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
         type:DELETE_TRANSACTION,
         payload:id
     })
 }
 //add action to add new transaction//
 function addTransaction(transaction){
    dispatch({
        type:ADD_TRANSACTION,
        payload:transaction
    })
 }
 //GlobalProvider created here to use in App.js//                                                                                 
 export const GlobalProvider = ({ children }) => {
     const [state, dispatch] = useReducer(AppReducer, firstState)
     return ( 
     <GlobalContext.Provider value = {
             { transactions: state.transactions,
            deltransaction,
            addTransaction
            }
         } > { children } 
         </GlobalContext.Provider>
     )
 }