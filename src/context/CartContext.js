 import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export  const cartContext = createContext();

const  CartProvider = ({children}) => {
    const [cart, setCart] =  useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(()=>{
        const total = cart.reduce((acc, current)=>{
            return acc + current.price * current.amount
        }, 0)
        setTotal(total)
    }, [cart])
    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((acc, current)=>{
                return acc + current.amount
            }, 0)
            setItemAmount(amount)
        }
        
    },[cart])

    const addToCart = (product, id) =>{
        const newItem = {...product, amount:1}
        const cartItem = cart.find((item)=>{
            return item.id === id
        })

        if(cartItem){
            // eslint-disable-next-line array-callback-return
            const newCart = [...cart].map((item)=>{
                if(item.id === id){
                    return {...item, amount:cartItem.amount + 1}
                }else{
                    return item
                }
            })
            setCart(newCart)
        }else{
            setCart([...cart, newItem])
        }
         
      
    }

    const removeFromCart = (id) =>{
        const newCart = cart.filter((item)=>{
            return item.id !== id
        })

        setCart(newCart)

    }
    const clearCart =() =>{
        setCart([])
    }

    const increaseAmount = (id)=>{
        const cartItem = cart.find((item)=>item.id === id)
        addToCart(cartItem   , id)
        
    }
    const decreaseAmount =(id) =>{
        const cartItem = cart.find((item)=>{
            return item.id === id
        })
        if(cartItem){
            // eslint-disable-next-line array-callback-return
            const newCart = cart.map((item)=>{
                if(item.id === id){
                    return {...item, amount:cartItem.amount-1}
                }else{
                    return item
                }
            })
            setCart(newCart)
        }
        if(cartItem.amount < 2){
            removeFromCart(id)
        }
    }
  return ( 
    <cartContext.Provider value={{cart, setCart, addToCart, removeFromCart,
     clearCart, 
     increaseAmount, 
     decreaseAmount,
     itemAmount,
     setItemAmount,
     total
     
     }}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider