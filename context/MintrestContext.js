import { useState, useEffect, createContext } from "react";
import {faker} from '@faker-js/faker'




export const mintrestContext= createContext()


export const MintrestProvider= ({children})=> {

    const [appStatus, setAppStatus] = useState('')
    const [cardsData, setCardsData]= useState([])
    const [currentAccount, setCurrentAccount]= useState('')
    const [currentUser, setCurrentUser]= useState()
    
    useEffect(()=>{
        checkIfWalletIsConnected()
       
    }, [currentAccount])
    useEffect(()=>{
      if (!currentAccount) return
      requestCurrentUserData(currentAccount)
      requestUsersData(currentAccount)
    },[currentAccount])


    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          const addressArray = await window.ethereum.request({
            method: 'eth_accounts',
          })
          if (addressArray.length > 0) {
           setAppStatus('connected')               
            setCurrentAccount(addressArray[0])
           requestToCreateUserProfile(addressArray[0], faker.name.findName())

          } else {           
           setAppStatus('notConnected')
            setCurrentAccount('')
          }
        } catch (err) {
          console.log(err)
        }
      }


      const connectToWallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          setAppStatus('loading')    
          const addressArray = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
    
          if (addressArray.length > 0) {
            setAppStatus('connected')
            setCurrentAccount(addressArray[0])
            requestToCreateUserProfile(addressArray[0], faker.name.findName())
          } else {
            return setAppStatus('notConnected')
          }
        } catch (err) {
          console.log(error)
          setAppStatus('error')
        }
      }

      const disconnect = async ()=>{
          // log user out
          //setAppStatus('notConnected')
          //setCurrentAccount('')
      }

      const requestToCreateUserProfile= async (walletAddress, name)=>{
        try {
          await fetch('api/createUser', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({             
              userWalletAddress: walletAddress,
              userName: name              
            })
          })
        } catch (error) {
          console.log(error)
        }

      }

    const requestCurrentUserData= async (walletAddress)=> {
      try {
        const response= await fetch(`api/fetchCurrentUserData?activeAccount=${walletAddress}`)
        const data = await response.json()
        setCurrentUser(data.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    const requestUsersData= async(activeAccount)=>{
      try {
        const response= await fetch(`api/fetchUsers?activeAccount=${activeAccount}`)
        const data= await response.json()
        console.log(data.data)
        setCardsData(data.data)
        } catch (error) {
        console.log(error)
        
      }
    }

    return(
        <mintrestContext.Provider
             value={{
                 appStatus,
                 setAppStatus,
                 currentAccount,
                 setCurrentAccount,
                 currentUser,
                 setCurrentUser,
                 connectToWallet,
                 cardsData,
                 setCardsData

             }}
        >
            {children}
        </mintrestContext.Provider>
    )
}


