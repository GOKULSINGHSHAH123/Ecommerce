import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);

const getDefaultcart =  ()=>{
    let cart ={}
    for(let index=0; index<300+1; index++){
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props)=>{

    const[all_product,setAll_products]  = useState([]);  
    const [cartItems,setCartItems] = useState(getDefaultcart())

    useEffect(()=>{
            fetch('http://localhost:4000/allproduct',{method:"POST"}).then((res)=>res.json().then((data)=>setAll_products(data)))

            if(localStorage.getItem('auth-token')){
                fetch('http://localhost:4000/getcart',{
                    method:"POST",
                    headers:{
                        Accept: 'application/json',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json',
                    },
                    body:"",
                }).then((res)=>res.json())
                .then((data)=>setCartItems(data));
            }
            
    },[])

    console.log('all_product',  all_product)

    const addToCart = (itemId) =>{
        console.log("HII",cartItems)

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        

        if(localStorage.getItem('auth-token')){
            fetch("http://localhost:4000/addToCart",{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
        if(localStorage.getItem('auth-token')){
            fetch("http://localhost:4000/removefromcart",{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            })
        }
    }     

    const getTotalAmountCart = () => {   
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    

    const getTotalCartItems =()=>{
        let totalItem = 0
        for(const item in cartItems)
            {
                if(cartItems[item]>0){
                    totalItem+=cartItems[item];
                }
            }
            return totalItem
    }

    const contextValue ={getTotalAmountCart,getTotalCartItems,all_product,cartItems,addToCart,removeFromCart};
  
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider