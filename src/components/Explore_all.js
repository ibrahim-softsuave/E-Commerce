import React from 'react'
import './Explore_all.css'
import * as MDIcons from 'react-icons/md'
import { useState,useEffect} from 'react'
import axios from './axios'
const PRODUCTS='/products'
const Explore_all = () => {
    const [products,SetProducts]=useState();
    useEffect(
        ()=>{
            axios.get(PRODUCTS).then(response=>{SetProducts(response.data)})
        },[]);
    return (
        <>
        <div className='explore-grid-container'>
            <div className='explore-container-header'>
                <p><strong>  Explore something Unique </strong> </p>
                <div className='explore_item2'>
                    <button ><MDIcons.MdTune/>Filters</button>
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
            <div className='explore-grid-container'>
                <div> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Explore_all