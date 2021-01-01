import React from 'react'

export const Battery = ({transaction}) => {
    return (
        <ul>
           <li> {transaction.Description}</li>
            <span>{transaction.Amount}</span>
            <button className='dlt'>X</button>
            </ul>


            
    )
}
