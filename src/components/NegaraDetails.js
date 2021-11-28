import React from 'react';
import { Link } from 'react-router-dom';

const NegaraDetails = (props) => {
  

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src={props.response} alt={props.response.country} />
                </div>
                <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">{props.results.country}</h1>
                    <div className="small mb-1">Jumlah Kasus: {props.response.cases.new}</div>
                    
                    <div className="fs-5 mb-5">
                        <span>Status sembuh: {props.response.population}</span>
                    </div>
                    <p className="lead">Status Mati{props.response.deaths.total}</p>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default NegaraDetails;
