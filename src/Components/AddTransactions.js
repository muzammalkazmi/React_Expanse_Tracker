import React, { useState } from 'react'

export const AddTransactions = () => {
    const [Description, setDescription] = useState('')
    const [Amount, setAmount] = useState(0)
    return ( <
        div >
        <
        h3 > Add Transaction < /h3> <
        form >
        <
        input type = 'text'
        id = 'Description'
        value = { Description }
        onChange = {
            (e) => setDescription(e.target.value)
        }
        label = 'Enter your Amount Here' / > < br / >
        <
        input type = 'text'
        id = 'Amount'
        value = { Amount }
        onChange = {
            (e) => setAmount(e.target.value)
        }
        label = 'Enter your Details' / > < br / >

        <

        button type = 'Submit' > Enter < /button>

        <
        /form>   < /
        div >
    )
}