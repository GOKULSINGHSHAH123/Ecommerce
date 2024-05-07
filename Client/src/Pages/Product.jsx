// Product.js
import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/Breadcrum/Breadcrum'
import {ProductDisplay} from '../Components/ProductDisplay/ProductDisplay' // Import as ProductDisplay
import { RelatedProduct } from '../Components/RelatedProducts/RelatedProduct'

export const Product = () => {
  const { all_product } = useContext(ShopContext)
  const {addToCart } = useContext(ShopContext)

  const { productId } = useParams();

  const product = productId
    ? all_product.find((e) => e.id === Number(productId))
    : null;

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className='product'>
      <div className='breadcrum-display'>
      <Breadcrum product={product} />
      </div>

      <div className='productDisplay'>
        <ProductDisplay product={product} /> {/* Render ProductDisplay */}
      </div>

      <RelatedProduct/>
  
    </div>
  )
}

export default Product
