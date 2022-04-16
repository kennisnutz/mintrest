import React from 'react'
import CardHeader from './CardHeader'
import icon from '../assets/icon.png'
import Image from 'next/image'

const style = {
    wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
    cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
    noMoreWrapper: `flex flex-col justify-center items-center absolute`,
    tinderLogo: `text-3xl text-red-500 mb-4`,
    noMoreText: `text-xl text-white`,
    swipesContainer: `w-full h-full overflow-hidden`,
  }
  

const Card = () => {
  return (
    <div className={style.wrapper}>
        <CardHeader/>
        <div className={style.cardMain}>
            <div className= {style.noMoreWrapper}>
                <Image className={style.tinderLogo} src={icon}/>
                <div className={style.noMoreText}>
                    No More Profiles to Swipe
                </div>
            </div>
            <div className={style.swipesContainer}>
                {/* {cardsData.map((card, index)=>(
                    <TinderCardItem key={index} card={card}/>
                ))} */}
            </div>
        </div>
        {/* card footer */}
    </div>
  )
}

export default Card