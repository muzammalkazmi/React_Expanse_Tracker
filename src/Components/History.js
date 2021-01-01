import React,{useContext} from 'react'
import {GlobalContext}from '../context/GlobalContext'


export const History =()=>{
    const transactions=useContext(GlobalContext)
    console.log(transactions)
    return(
        <div>
            <h3>Transactions History</h3>
            <ul>
                <li>Paid Electricity Bill<span>$0.00</span></li>
            </ul>
        </div>
    )
}