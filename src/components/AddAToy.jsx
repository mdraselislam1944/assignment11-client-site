import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
const AddAToy = () => {
    const { user } = useContext(AuthContext);

    const userName = user?.displayName;
    const userEmail = user?.email;
    const handleVolunteerData = (event) => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        if (user) {
            const volunteerData = { img, name, category, price, rating, quantity, description, userName, userEmail };
            console.log(volunteerData);
            form.reset();
            fetch('http://localhost:5000/addAToys',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(volunteerData)
               })
               .then(res=>res.json())
               .then(data=>{
                console.log(data);
                alert('added successfully');
               })
               .catch(error=>console.log(error.message));
        }
    }
    return (
        <div className='text-center'>
            <div>
                <h1 className='font-bold text-3xl'>Add toys Data</h1>
                <form className='my-5' onSubmit={handleVolunteerData}>
                    <input type="text" name="img" id="img" placeholder="Enter Image" className="input input-bordered w-full max-w-xs " required /><br />
                    <input type="text" name="name" id="name" placeholder="Enter product name" className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input type="text" name="category" id="category" placeholder="Enter product category" className="input input-bordered w-full max-w-xs my-2" required /><br />
                    {/* <button className="btn btn-wide btn-success">Submit Data</button> */}
                    <input type="text" name="price" id="price" placeholder='Enter Price amount' className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input type="text" name="rating" id="rating" placeholder='Enter product rating' className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input type="text" name="quantity" id="quantity" placeholder="Enter product quantity" className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input type="text" name="description" id="description" placeholder="Enter product description" className="input input-bordered w-full max-w-xs my-2" required /><br />
                    <input className="btn btn-wide btn-success" type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAToy;