
import React from 'react'
import {Header,Balance,History,Summary,AddTransactions}from './Components'
import {GlobalProvider} from './Components/Context/GlobalData'
import './App.css'

function App() {
  return (
    <GlobalProvider >
    <div className="App">
    <Header/><hr/>
    <Balance/><hr/>
    <Summary/><hr/>
    <History/><hr/>
    <AddTransactions/><hr/>
    </div>
    </GlobalProvider>
  );

}

export default App;