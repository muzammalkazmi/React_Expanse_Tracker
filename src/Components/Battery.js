import React,{useContext} from 'react'
import {GlobalContext}from './Context/GlobalData'

export const Battery = ({transaction}) => {
    const {deltransaction}=useContext(GlobalContext)
    const sign=transaction.Amount>0?'?':'-';
    const transactiontype=transaction.amount>0?'Plus':'Minus'
    return (
        
           <li className={transactiontype}> 
           {transaction.Description}
            <span>{sign}${Math.abs(transaction.Amount)}</span>
            <button className='dlt'onClick={()=>deltransaction(transaction.id)}>X</button>
            </li>
        


            
    )
}
