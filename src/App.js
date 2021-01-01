
import React,{useContext} from 'react'
import {Header,Balance,History,Summary,AddTransactions}from './Components'
import {GlobalContext} from './context/GlobalContext'
import './App.css'

function App() {
  return (
    <GlobalContext.Provider>
    <div className="container">
    <Header/><hr/>
    <Balance/><hr/>
    <Summary/><hr/>
    <History/><hr/>
    <AddTransactions/><hr/>
    </div>
    </GlobalContext.Provider>
  );

}

export default App;