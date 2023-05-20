import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Link } from 'react-router-dom';
const MyToys = () => {
    var finalProducts = [];
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:5000/addAToys')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [])
    if (user) {
        finalProducts = products?.filter(product => product.userEmail == user.email);
    }


    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/addAToys/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setProducts(products.filter(product=>product._id!==_id));
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('delete successful');
                }
            })

    }

    return (
        <div>
            <h1 className='text-center text-2xl'>My toys page</h1>
            <div className='grid grid-cols-3 mx-16'>
                {
                    finalProducts?.map(product => <div key={product._id} className='my-10'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product?.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h1>{product?.name}</h1>
                                <div className='flex gap-20'>
                                    <div>
                                        <p>price : {product?.price}</p>
                                    </div>
                                    <p>Rating : {product?.rating}</p>
                                </div>
                                <div className='flex items-center justify-between gap-10'>
                                    <div className="card-actions">
                                       <Link to={`/my_toys/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn btn-primary" onClick={()=>handleDelete(product._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyToys;