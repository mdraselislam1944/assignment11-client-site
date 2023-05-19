import React from 'react';

const Admin = () => {
    
    const handleVolunteerData=(event)=>{
        event.preventDefault();
        const form=event.target;
        const img=form.img.value;
        const name=form.name.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const volunteerData={img,name,price,rating};
        form.reset();
       fetch('https://assignment-11-server-tau-amber.vercel.app/volunteer',{
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
    return (
        <div className='text-center'>
            <div>
                <h1 className='font-bold text-3xl'>Set Home Address Data</h1>
                <form className='my-5' onSubmit={handleVolunteerData}>
                <input type="text" name="img" id="img" placeholder="Enter Image" className="input input-bordered w-full max-w-xs " required/><br/>
                <input type="text" name="name" id="name"  placeholder="Enter product name" className="input input-bordered w-full max-w-xs my-2" required/><br/>
                {/* <button className="btn btn-wide btn-success">Submit Data</button> */}
                <input type="number" name="price" id="price" placeholder='Enter Price amount'  className="input input-bordered w-full max-w-xs my-2" required/><br />
                <input type="number" name="rating" id="rating" placeholder='Enter product rating'  className="input input-bordered w-full max-w-xs my-2" required/><br />
                <input className="btn btn-wide btn-success" type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;