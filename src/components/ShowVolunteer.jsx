import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
const ShowVolunteer = ({volunteer}) => {
    return (
        <div className="my-2 card w-96 bg-base-100 shadow-xl">
            <figure><img src={volunteer?.img} alt="Shoes" /></figure>
            <div className="card-body">
                <button className="btn btn-block btn-primary">{volunteer?.description}</button>
            </div>
        </div>
    );
};

export default ShowVolunteer;