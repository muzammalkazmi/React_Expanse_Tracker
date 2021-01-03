import React,{useContext} from 'react'
import{GlobalContext} from './Context/GlobalData'
export const Balance=()=>{
    const {transactions}=useContext(GlobalContext)
    const Amount=transactions.map(transaction=>transaction.Amount)
    const balance=Amount.reduce((acc,transaction)=>(acc+=transaction)).toFixed(2)
return(
    <div>
        <h3>Available Balance</h3>
        <h2>PKR{balance}</h2>
    </div>
)
}
    