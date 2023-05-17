import React from 'react';

const Admin = () => {
    const handleVolunteerData=(event)=>{
        event.preventDefault();
        const form=event.target;
        const img=form.img.value;
        const description=form.description.value;
        const volunteerData={img,description};
        form.reset();
       fetch('http://localhost:5000/volunteer',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(volunteerData)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
       .catch(error=>console.log(error.message));
    }
    return (
        <div className='text-center'>
            <div>
                <h1 className='font-bold text-3xl'>Set Home Address Data</h1>
                <form className='my-5' onSubmit={handleVolunteerData}>
                <input type="text" name="img" id="img" placeholder="Enter Image" className="input input-bordered w-full max-w-xs " /><br/>
                <input type="text" name="description" id="description"  placeholder="Enter Description" className="input input-bordered w-full max-w-xs my-2" /><br/>
                {/* <button className="btn btn-wide btn-success">Submit Data</button> */}
                <input className="btn btn-wide btn-success" type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;