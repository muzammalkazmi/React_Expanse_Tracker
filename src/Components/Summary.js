import React,{useContext} from 'react'
import {GlobalContext}from './Context/GlobalData'

export const Summary=()=>{
    const{transactions}=useContext(GlobalContext)
    const Amount=transactions.map(transaction=>transaction.Amount)
    const income=Amount
    .filter(transaction=>transaction>0)
    .reduce((acc,transaction)=>(acc+=transaction),0)
    .toFixed(2)
    const expanse=Amount
    .filter(transaction=>transaction.Amount)
    .reduce((acc,transaction)=>(acc+=transaction),0)
    .toFixed(2)
    return(
    <div className='summary'>
        <h3>Income <br/> <span>$0.00</span></h3>
        
        <h3>Expanses <br/><span>$0.00</span></h3>
        

    </div>
    )
}