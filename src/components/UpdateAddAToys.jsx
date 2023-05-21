import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateAddAToys = () => {
    const product = useLoaderData();
    const Navigate=useNavigate();
    const handleUpdateData = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateProduct = { price, quantity, description };

        fetch(`https://assignment-11-server-tau-amber.vercel.app/addAToys/${product[0]._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update successfully');
                    form.reset();
                }
                Navigate('/my_toys');
            });
    }
    return (
        <div className='text-center'>
            <div>
                <h1 className='font-bold text-3xl'>Update toy Data</h1>
                <form className='my-5' onSubmit={handleUpdateData}>
                    <input type="text" defaultValue={product[0]?.price} name="price" id="price" placeholder='Enter Price amount' className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input type="text" name="quantity" defaultValue={product[0]?.quantity} id="quantity" placeholder="Enter product quantity" className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input type="text" name="description" defaultValue={product[0]?.description} id="description" placeholder="Enter product description" className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input className="btn btn-wide btn-success" type="submit" value="update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateAddAToys;