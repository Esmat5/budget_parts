import React from "react";
import "./partSearchForm.css"; // Import the CSS file for styling


export default function PartSearchForm() {
    return (
        <div className="container">
            <div className="part-search-header">
                <h1>Search for Parts</h1>
            </div>
            <div id="part-search-form">
                <form className="form-container">
                    <div className="row">
                        <div className="form-group">
                            <select id="make" name="make">
                                <option value="">Select Make</option>
                                <option value="ford">AIRMAN</option>
                                <option value="chevrolet">ASV</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select id="model" name="model">
                                <option value="">Select Model</option>
                                <option value="f150">F150</option>
                                <option value="f250">F250</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select id="type" name="type">
                                <option value="">Select Type</option>
                                <option value="engine">Engine</option>
                                <option value="engine">Engine</option>
                                <option value="engine">Engine</option>
                                <option value="engine">Engine</option>
                            </select>
                        </div>

                    </div>
                    <div className="button-row">
                        <input type="submit" value="Search Now"/>
                    </div>
                </form>
            </div>
        </ div>
    );
}