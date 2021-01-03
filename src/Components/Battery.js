import React from 'react'

export const Battery = ({transaction}) => {
    const sign=transaction.Amount>0?'?':'-';
    const transactiontype=transaction.amount>0?'Plus':'Minus'
    return (
        
           <li className={transactiontype}> 
           {transaction.Description}
            <span>{sign}${Math.abs(transaction.Amount)}</span>
            <button className='dlt'>X</button>
            </li>
        


            
    )
}
