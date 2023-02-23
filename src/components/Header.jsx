import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import {BsBag} from 'react-icons/bs'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import {IoIosCompass} from 'react-icons/io'


function Header() {
  const [isActive, setIsActive] = useState(false)
    const {isOpen,setIsOpen} = useContext(SidebarContext)
    const {itemAmount } = useContext(cartContext)

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
      })
    })
  return (
    <header className={`${isActive ? 'bg-white py-6  shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={'/'}>
          <div>
            <IoIosCompass/>
          </div>
         


        </Link>
        <div onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer flex relative" >
            <BsBag className="text-2xl" />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>
          {itemAmount}
        </div>
            
        </div>
       

      </div>
      
    </header>
  
  )
}

export default Header