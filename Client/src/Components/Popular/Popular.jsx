import React, { useEffect, useState } from 'react'
import './Popular.css'
import { Item } from '../Items/Item'

export const Popular = () => {

    const [popularProducts,setPopularproducts] =useState([]);


    useEffect(()=>{
      fetch('http://localhost:4000/popularinwomen',{
        method:"POST"
      }).then((res)=>res.json())
      .then((data)=>setPopularproducts(data))
    },[])

  return (
    <div className='popular-container'>

      <div className="popular">
      <div>
      <h1>Popular in Woman</h1>
      <hr className='line'/>
      </div>
 

    <div className="popular-item">
    {popularProducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item. old_price} />
      })}
</div>
      </div>

     

    </div>
  )
}
