import React, { useEffect, useState } from 'react'
import { Item } from '../Items/Item'
import './NewCollections.css'

export const NewColletions = () => {

  const [new_collection,setNew_collection] =useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection',{
      method:"POST"
    }).then((res)=>res.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='NewCollection'>
        <h1>New Collection</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item. old_price} />
            })}</div></div>

  )
}
