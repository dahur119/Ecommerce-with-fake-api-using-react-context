import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/productContext'
import ProductItem from './ProductItem'
import Hero from '../components/Hero'

function Home() {
    const {product} = useContext(ProductContext)

    const filteredProduct = product.filter((items)=>{   
       return  items.category === "men's clothing" || items.category === "women's clothing"
    })
    console.log(filteredProduct)
  return (
    <div>
         <Hero/>
        <section className='py-16'>
           
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 
                gap-[30px] max-w-sm mx-auto md:max-w-none md:max-0 '>
                    {filteredProduct.map((product)=>(
                        <ProductItem key={product.id} product={product}/>
                    ))}
                </div>

            </div>
        </section>
    </div>
  
   
  )
}

export default Home