import React,{useContext} from 'react'
import {GlobalContext} from './Context/GlobalData'
import { Battery } from './Battery'
// import {GlobalProvider}from './Context/GlobalData'



export const History =()=>{
    const {transactions}=useContext(GlobalContext)
    console.log(transactions)
    return(
        <div>
            <h3>Transactions History</h3>
            <ul>
               {transactions.map(transaction => (
                    <Battery key={transaction.id} transaction={transaction}/> 

               ))}
            </ul>
            
        </div>
    )
}