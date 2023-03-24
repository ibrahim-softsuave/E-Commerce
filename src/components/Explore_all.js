import React from 'react'
import './Explore_all.css'
import * as MDIcons from 'react-icons/md'
import { useState, useEffect } from 'react'
import axios from './axios'
const PRODUCTS = '/products'
const Explore_all = () => {
    const [products, SetProducts] = useState([]);
    const [filterProducts, SetFilterProducts] = useState([]);
    const [filterBar, SetFilterBar] = useState(false);
    const [isFilter, SetIsFilter] = useState(false);
    useEffect(
        () => {
            axios.get(PRODUCTS).then(response => {

                SetProducts(response.data)
            })
        }, []);

    const handleFilterSide = () => {
        SetFilterBar(!filterBar)
    }
    const handleRadio = (e) => {
        SetIsFilter(true);
        const values = e.target.value.split(',')
        if (values[0] === 'any') {
            SetFilterProducts(products)
        }
        else if (values[0] !== values[1]) {
            SetFilterProducts(products.filter((items) => {
                return (items.productVariant[0].price >= parseInt(values[0]) && items.productVariant[0].price <= parseInt(values[1]))
            }))
        }
        else if (values[0] === values[1]) {
            SetFilterProducts(products.filter((items) => {
                return (items.productVariant[0].price >= values[0])
            }))
        }
    }
    return (
        <>
            <div className='explore-grid-container'>
                <div className='explore-container-header'>
                    <p><strong>  Explore something Unique </strong> </p>
                    <div className='explore_item2'>
                        <button onClick={handleFilterSide}><MDIcons.MdTune />Filters</button>
                        <button>Surprise Me</button>
                        <div>
                            <label>Sort by:</label>
                            <select>
                                <option>Most Loved</option>
                                <option>What's New</option>
                                <option>Price - Low to High</option>
                                <option>Price - High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={filterBar ? 'try' : ''}>
                    {filterBar ? <aside>
                        <div className='filter-sidebar'>
                            <span onClick={handleFilterSide}>x</span>
                            <div className='category'>
                                <p>Filter by category</p>
                                <div className='curve-button'>
                                    <select>
                                        <option>All Catagory</option>
                                        <option>Wellness</option>
                                        <option>Food</option>
                                        <option>Home</option>
                                        <option>Art & Craft</option>
                                        <option>Hobies & Experiments</option>
                                        <option>Fashion</option>
                                        <option>Accessories & Jewellary</option>
                                        <option>Electronics</option>
                                        <option>Tools $ Supplies</option>
                                    </select>
                                </div>
                            </div>
                            <div className='category2'>
                                <p>price</p>
                                <div>
                                    <div className='category2-items'>
                                        <input type='radio' name='filter-price' onChange={handleRadio} value='any' defaultChecked={true} ></input> <label>Any price</label><br /></div>
                                    <div className='category2-items'> <input type='radio' name='filter-price' value={[1000, 2000]} onChange={handleRadio}></input><label>1000 to 2000</label><br /></div>
                                    <div className='category2-items'><input type='radio' name='filter-price' value={[2000, 4000]} onChange={handleRadio}></input><label>2000 to 4000</label><br /></div>
                                    <div className='category2-items'><input type='radio' name='filter-price' value={[4000, 4000]} onChange={handleRadio}></input><label>Above 4000</label></div>
                                </div>
                            </div>

                        </div>
                    </aside> : ''}
                    <div className='grid-pro'>
                        {isFilter ? filterProducts.map((items, index) => {
                            return (
                                <div key={index}>
                                    <span className='prodImage'> <img className='pro-img' src={'https://unipick-ui.s3.ap-south-1.amazonaws.com/' + items.productImages[0]} alt='product'></img>
                                    </span>
                                    <p>Name : {items.productName}</p>
                                    <p>Price : {items.productVariant[0].price}</p>
                                </div>
                            )
                        }) : products.map((items, index) => {
                            return (
                                <div key={index}>
                                    <span className='prodImage'> <img className='pro-img' src={'https://unipick-ui.s3.ap-south-1.amazonaws.com/' + items.productImages[0]} alt='product'></img>
                                    </span>
                                    <p>Name : {items.productName}</p>
                                    <p>Price : {items.productVariant[0].price}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Explore_all