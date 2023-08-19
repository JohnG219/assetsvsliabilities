import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [assetss, setassetss] = useState([])
    const [liabilitiess, setliabilitiess] = useState([])
    const [error, setError] = useState(null)

    //calculate assetss
    const addassets = async (assets) => {
        const response = await axios.post(`${BASE_URL}add-assets`, assets)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getassetss()
    }

    const getassetss = async () => {
        const response = await axios.get(`${BASE_URL}get-assetss`)
        setassetss(response.data)
        console.log(response.data)
    }

    const deleteassets = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-assets/${id}`)
        getassetss()
    }

    const totalassets = () => {
        let totalassets = 0;
        assetss.forEach((assets) =>{
            totalassets = totalassets + assets.amount
        })

        return totalassets;
    }


    //calculate assetss
    const addliabilities = async (assets) => {
        const response = await axios.post(`${BASE_URL}add-liabilities`, assets)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getliabilitiess()
    }

    const getliabilitiess = async () => {
        const response = await axios.get(`${BASE_URL}get-liabilitiess`)
        setliabilitiess(response.data)
        console.log(response.data)
    }

    const deleteliabilities = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-liabilities/${id}`)
        getliabilitiess()
    }

    const totalliabilitiess = () => {
        let totalassets = 0;
        liabilitiess.forEach((assets) =>{
            totalassets = totalassets + assets.amount
        })

        return totalassets;
    }


    const totalBalance = () => {
        return totalassets() - totalliabilitiess()
    }

    const transactionHistory = () => {
        const history = [...assetss, ...liabilitiess]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addassets,
            getassetss,
            assetss,
            deleteassets,
            liabilitiess,
            totalassets,
            addliabilities,
            getliabilitiess,
            deleteliabilities,
            totalliabilitiess,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}