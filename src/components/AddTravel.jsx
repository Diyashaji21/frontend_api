import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from './NavBar';

export const AddTravel = () => {
    const navigate = useNavigate();
    const [inputField, changeinputField] = useState(
        {
            "Destination": "",
            "Arrival Date": "",
            "Departure Date": "",
            "Transportation": "",
            "Budget": ""
        }
    );

    const inputHandler = (event) => {
        changeinputField({ ...inputField, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(inputField);
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>Add Trip Details</h1>
                            <div class="card text-center">
                                <div class="card-header">
                                    Please enter Trip details
                                </div>
                                <div class="card-body">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Destination</label>
                                        <input type="text" name="Destination" value={inputField.Destination} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Arrival Date</label>
                                        <input type="date" name="Arrival Date" value={inputField["Arrival Date"]} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Departure Date</label>
                                        <input type="date" name="Departure Date" value={inputField["Departure Date"]} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Transportation</label>
                                        <input type="text" name="Transportation" value={inputField.Transportation} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Budget</label>
                                        <input type="text" name="Budget" value={inputField.Budget} onChange={inputHandler} className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button onClick={readValue} className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};