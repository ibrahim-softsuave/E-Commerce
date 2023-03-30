import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import * as BSIcons from 'react-icons/bs';

const ProductDetails = () => {
  const ProductsList = localStorage.getItem('products')
  const Products = JSON.parse(ProductsList)
  const { id } = useParams()
  const item = Products.filter(items => items.productUrlId === id)
  console.log(item)
  const productImages = item[0].productImages
  const [fullsSizeImage, SetFullSizeImage] = useState('')
  const [productCount, SetproductCount] = useState(0)
  const [showContent, SetShowContent] = useState('');

  const handleShowContent = (e) => {
    if (showContent === e.target.id) {
      return SetShowContent('')
    }
    SetShowContent(e.target.id)
  }
  const handleProductCount = (e) => {
    if (e.target.value === 'increase') {
      SetproductCount(previouscount => previouscount + 1)
      console.log(productCount)
    }
    else if (e.target.value === 'decrease' && productCount !== 0) {
      SetproductCount(previouscount => previouscount - 1)
    }
  }

  const handleImage = (e) => {
    SetFullSizeImage(e.target.src);
  }
  if (item.length === 0) {
    return (
      <div>No data found</div>
    )
  }
  return (
    <>
    <div className='products'>
      <div className='product-details-container'>
        <div className='pdi-items pdi-item1'>
          {productImages.map((item, index) => {
            return (
              <img
                className='pdi-images'
                src={'https://unipick-ui.s3.ap-south-1.amazonaws.com/' + item}
                alt='product multiple images'
                onClick={handleImage}
              ></img>
            )
          })
          }
        </div>
        <div className='pdi-items pdi-item2'>
          <img className='pdi-full-image' src={fullsSizeImage || 'https://unipick-ui.s3.ap-south-1.amazonaws.com/' + productImages[0]} alt='Full SizeImage'></img>
        </div>
        <div className='pdi-items pdi-item3'><div className='prod-image-share'><BSIcons.BsFillShareFill /></div></div>
      </div>
      <div className='product-details'>
        {item.map(things => {
          return (
            <>
              <p>{things.brandName}</p>
              <h4>{things.productName}</h4>
                <div>
                  <div className='counter'>
                    <button value='decrease' onClick={handleProductCount}>-</button>
                    <p>{productCount}</p>
                    <button value='increase' onClick={handleProductCount}>+</button>
                </div>
                  <p>{things.productVariant[0].price}</p>
                  <p>Local tax included (where applicable)</p>
                  <p>In stock</p>
                  <div>
                    <span>image</span>
                    <p>Order within next 23 hours 9 min to get it by April 1</p>
                    <p>shipping charges will be calculated on checkout</p>
                  </div>
              </div>
              <div>
                <button>Add to card</button>
              </div>
              <div>
                <button>Add to collection</button>
              </div>
              <p>only{things.totalQuantity}left and over 15 people have it in their carts.</p>
              <div className='Additional-content'>
                <div className='seller' id='seller' onClick={handleShowContent}>
                  <p>Meet & interact with your Seller</p>
                  <p>+</p>
                </div>
                <div className={showContent === 'seller' ? 'seller-content show-additional-content' : 'seller-content'}>
                  <div></div>
                  <div className='sub-seller-content'>
                    <p>
                      Following
                    </p>
                    <p>
                      Followers
                    </p>
                  </div>
                </div>
              </div>
              <div className='Additional-content'>
                <div className='description' id='description' onClick={handleShowContent}>
                  <p>Description</p>  <p>+</p>
                </div>
                <div className={showContent === 'description' ? 'description-content show-additional-content' : 'description-content'}>
                  {things.description}
                </div>
              </div >
              <div className='Additional-content'>
                <div className='attributes' id='attributes' onClick={handleShowContent}>
                  <p> Attributes</p> <p>+</p>
                </div>
                <div className={showContent === 'attribute' ? 'attribute-content show-additional-content' : 'attribute-content'}></div>
              </div>
              <div className='Additional-content'>
                <div className='return-policies' id='return-policies' onClick={handleShowContent}>
                  <p>Return Policies</p><p>+</p>
                </div>
                <div className={showContent === 'return-policies' ? 'return-policies-content show-additional-content' : 'return-policies-content'}>
                  <p>Cancel before shipping, Return within 7 days of delivery for exchange or refund.</p>
                  <div className='sub-return-policies-content'>
                    <div>
                      <p>Returns & Exchanges</p>
                      <p>Accepted</p>
                      <p>Exception may apply</p>
                    </div>
                    <p>
                      Return ,Refund and Replacement Policy
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        })}

      </div>
    </div>
    </>
  )
}

export default ProductDetails