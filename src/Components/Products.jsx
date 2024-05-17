import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DataAPI from '../assects/data/DataAPI';
import Navbar from "./Navbar";


const Products = () => {

    const [product, setProduct] =useState([]);
    const {id} = useParams();
    console.log(id);
    console.log(product);

    useEffect(() => {
        const selectedProduct = DataAPI.find(item => item.id === parseInt(id));
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [id]);
    
    

  return (
    <>
    <Navbar/>
      {
         Products ?(<div className='container'>
            <div className="row">
                <div className="col-md-8">
                <img src={product.photo} alt="" style={{width:"100%"}}/>
                </div>
                <div className="col-md-4 border" >
                    <p className='border'>{product.price}/Per Person <i class="fa-regular fa-star" style={{color:"#faa935"}}></i>{product.reviews}</p>
                    <h5>Information</h5>
                    <div className='border'>
                        <input type="text" placeholder='Full name' />
                        <input type="text" placeholder='Phone number'/>
                        <input type="date" name="" id="" />
                    </div>
                    <div className='border'>
                    <div className='Bookings '>
                    <p>{product.price} <i class="fa-solid fa-xmark" ></i> {product.id} person </p>
                    <p>{product.price}</p>
                    </div>
                    <div className='Bookings'>
                        <p>Service Charges</p>
                        <p>10</p>
                    </div>
                    <div className='Bookings'>
                        <p>Total</p>
                        <p>{product.price}* 10</p>
                    </div>
                    <button>Book Now</button>
                    </div>
                </div>
                <div className="BookingInfo">
                    <h5>{product.title},{product.city}</h5>
                    <p><i class="fa-regular fa-star" style={{color:"#faa935"}}></i>{product.reviews}</p>
                    
                </div>
            </div>
        </div>):(<p>Loading....!</p>)
      }
    </>
  )
}

export default Products
