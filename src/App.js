import { Header, Balance, History, Summary, AddTransactions } from './Components'
import './App.css'
import { GlobalProvider } from './Context/GlobalData'


function App() {
    return ( <
        GlobalProvider.Provider >

        <
        div className = "App" >
        <
        Header / > < hr / >
        <
        Balance / > < hr / >
        <
        Summary / > < hr / >
        <
        History / > < hr / >
        <
        AddTransactions / >
        <
        /div> < /
        GlobalProvider.Provider >
    );
}

export default App;