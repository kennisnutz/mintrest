import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.jpeg'
import { mintrestContext } from '../context/MintrestContext'
import { useContext } from 'react'
import SignIn from './SignIn'


const style = {
    wrapper: `h-24 py-11 text-white flex w-screen items-center px-16 justify-between`,
    main: `flex items-center gap-4`,
    tinderText: `text-5xl font-semibold mr-8 cursor-pointer`,
    leftMenu: `flex gap-8 text-lg`,
    menuItem: `cursor-pointer hover:text-red-400 duration-300 hover:scale-110`,
    rightMenu: `flex gap-3 items-center`,
    currentAccount: `px-2 py-1 border border-gray-500 rounded-full flex items-center`,
    accountAddress: `ml-2`,
    authButton: `bg-white font-bold text-red-500 px-6 py-3 items-center ml-4 rounded-lg hover:bg-red-500 duration-300 hover:text-white`,
  }

const Header = () => {
    
    

  return (
    <div className={style.wrapper}>
        <div className={style.main}>
            <Image src={logo} alt= "logo" height={65} width={65}/>
            <h1 className={style.tinderText}>Mintrest</h1>
            <div className={style.leftMenu}>
                <div className= {style.menuItem}>Products</div>
                <div className= {style.menuItem}>Docs</div>
                <div className= {style.menuItem}>Security</div>
                <div className= {style.menuItem}>Support</div>
                <div className= {style.menuItem}>Download</div>
            </div>
            <div className={style.rightMenu}>
                <div>English</div>
                <SignIn/>
                
            </div>
        </div>

    </div>
  )
}

export default Header