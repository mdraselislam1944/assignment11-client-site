import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProviders';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
const ShowVolunteer = ({volunteer}) => {
    const {img,name,price,rating,_id}=volunteer;
    var star=[];
    for(var i=0;i<rating;i++){
       star[i]=i;
    }
    return (
        <div className="my-2 card w-96 bg-base-100 shadow-xl -mx-4">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className='text-center text-3xl'>{name}</h1>
                <div className='flex items-center justify-between'>
                  <div>
                  <p>${price}</p>
                  </div>
                   <div className='flex justify-between'>
                    {
                       star.map(star=><AiFillStar key={star}></AiFillStar>) 
                    }
                   </div>
                </div>
                <Link to={`/product_detail/${_id}`}> <button className="btn btn-block btn-primary">View Details</button></Link>
            </div>
        </div>
    );
};

export default ShowVolunteer;
