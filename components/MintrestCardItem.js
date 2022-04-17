import React from 'react'
import { useContext } from 'react'
import { FaUndoAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import TinderCard from 'react-tinder-card'
import { GiOutbackHat } from 'react-icons/gi'
import ReactTagInput from "@pathofdev/react-tag-input"
import { mintrestContext } from '../context/MintrestContext'

const style = {
    tinderCardWrapper: `w-full h-full absolute`,
    wrapper: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-8 py-4`,
    space: `flex flex-col justify-between h-3/4  items-start mt-16`,
    name: `flex text-white text-3xl font-extrabold items-center -mb-5 items-start mr-6`,
    tagContainer: `flex-col justify-between w-content  gap-5  mb-2`,
    tags: `flex items-center mt-6  h-9 w-content rounded-lg  border-2 bg-[#fcac3c] text-[#a4d7e3]`,
    age: `ml-4 font-semibold text-xl`,
    walletAddress: `font-bolder text-xl text-white mb-4`,
    reactionsContainer: `flex justify-between w-full px-2 gap-5`,
    buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer border-2`,
    buttonSymbol: `text-3xl`,
    backColors: `border-white text-white`,
    xColors: `border-red-500 text-red-500`,
    starColors: `border-blue-400 text-blue-400`,
    lightningColors: `border-purple-500 text-purple-500`,
  }

 

const MintrestCardItem = ({card}) => {
    const {  currentAccount, handleRightSwipe } = useContext(mintrestContext)

   
    const onSwipe= (dir)=>{
        if(dir=== 'right'){
         handleRightSwipe(card, currentAccount)
        }
    }
  return (
      <TinderCard
      className={style.tinderCardWrapper}
      preventSwipe= {['up', 'down']}
      onSwipe={onSwipe}
      >
           <div className={style.wrapper}
        style={{backgroundImage: `url(${card.imageUrl})`}}
           >
               
               <div className={style.space}>    
                <div className={style.tagContainer}>
                {card.stack.map((tag, index)=> <div className={style.tags} key={index} >
                    
                    {tag}
                    </div>)}
                    
                </div>      
                    
                   <div className={style.name}>
                       {card.name}                       
                   </div>
                   <div className={style.walletAddress}>
                {card.walletAddress.slice(0,3)}...{card.walletAddress.slice(-3)}
            </div>
               </div>
               
                <div className={style.reactionsContainer}>
                    <div className={`${style.backColors} ${style.buttonContainer}`}>
                        <FaUndoAlt
                        className={`${style.backColors} ${style.buttonSymbol}`}
                        onClick={() => goBack()}
                        />
                    </div>
                    <div className={`${style.xColors} ${style.buttonContainer}`}>
                        <AiOutlineClose
                        className={`${style.xColors} ${style.buttonSymbol}`}
                        />
                    </div>
                    <div className={`${style.starColors} ${style.buttonContainer}`}>
                        <AiFillStar
                        className={`${style.starColors} ${style.buttonSymbol}`}
                        />
                    </div>
                    <div className={`${style.lightningColors} ${style.buttonContainer}`}>
                        <BsFillLightningChargeFill
                        className={`${style.lightningColors} ${style.buttonSymbol}`}
                        />
                    </div>
                </div>
            </div>

      </TinderCard>
   
  )
}

export default MintrestCardItem