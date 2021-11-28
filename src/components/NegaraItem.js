import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
    

    return(
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src={props.response} alt={props.response.country} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.response.country}</h5>
                    {props.response.day}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.response.country}`}>View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MovieItem;
