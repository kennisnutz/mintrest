import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { mintrestContext } from '../context/MintrestContext'
import avatar from '../assets/avatar.jpeg'
import Image from 'next/image'
import { useEthers } from '@usedapp/core'

const style = {     
    leftMenu: `flex gap-8 text-lg`,
    menuItem: `cursor-pointer hover:text-red-400 duration-300 hover:scale-110`,
    rightMenu: `flex gap-3 items-center`,
    currentaccount: `px-2 py-1 border border-gray-500 rounded-full flex items-center`,
    accountAddress: `ml-2`,
    authButton: `bg-white font-bold text-red-500 px-6 py-3 items-center ml-4 rounded-lg hover:bg-red-500 duration-300 hover:text-white`,
  }

const SignIn = () => {
    
    const {appStatus,currentAccount, connectToWallet }= useContext(mintrestContext)
 
   

   


     

    const app = (status = appStatus) => {
        switch (status) {
          case 'connected':
            return userLoggedIn
    
          case 'notConnected':
            return noUserFound
    
          case 'noMetamask':
            return noMetamaskFound
    
          case 'error':
            return error
    
          default:
            return loading
        }
      }

      const userLoggedIn= (
        <>
            <div className={style.currentaccount}>
                <Image src={avatar} alt= "userImage" height={20} width={20}/>
                <span className={style.accountAddress}>
                    {currentAccount.slice(0,4)}...{currentAccount.slice(-3)}}
                </span>
            </div>
            <button className={style.authButton} onClick= {()=> console.log('disconnect')}>
                Disconnect
            </button>                            
        </>
    )

    const noMetamaskFound=(
        <button className={style.authButton}>
        <a
          target="_blank"
          rel="noreferrer"
          href={'https://metamask.io/download.html'}
        >
           Download Metamask
        </a>
        </button>
    )

    const noUserFound =(
        <button className={style.authButton} onClick={()=> connectToWallet()}>
            Connect Wallet
        </button>
    )
    const loading =(
        <button className={style.authButton} onClick={()=> console.log('connect')}>
            loading ...
        </button>
    )
  return (
    <>{app(appStatus)}</>
  )
}

export default SignIn