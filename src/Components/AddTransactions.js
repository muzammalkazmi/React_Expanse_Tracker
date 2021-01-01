
import React,{useState} from 'react'
export const AddTransactions=()=>{
    const [Description,setDescription]=useState('')
    const [Amount,setAmount]=useState(0)
    return(
        

        <div>
            <h3>Add new Transaction</h3>
            <form>
                <label htmlFor='Description' placeholder='Details'>Enter your Details</label><br/>
                <input type='text' 
                label='Enter your Amount Here'
                value={Description}
                onChange={(e)=>setDescription(e.target.value)}/><br/>
                <label htmlFor='Amount' placeholder='Amount'>Enter Amount</label><br/>
                <input type='text' label='Enter your Details'
                value={Amount}
                onChange={(e)=>setAmount(e.target.value)}/><br/>
                <button type='button'>Add Transaction</button>

            </form>
        </div>

    )
}