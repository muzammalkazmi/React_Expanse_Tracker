import React,{createContext} from 'react'
 export const initialState={
    transactions:[
        {id:1,Description:'paid salary to employes',Amount:3000},
        {id:2,Description:'paid salary to employes',Amount:2000},
        {id:3,Description:'paid salary to employes',Amount:4000},
        {id:4,Description:'paid salary to employes',Amount:5000}
    ]
}
export const GlobalContext=createContext(initialState)

