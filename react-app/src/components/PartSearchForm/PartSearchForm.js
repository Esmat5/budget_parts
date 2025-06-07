import React from "react";



export default function PartSearchForm() {
    return (
        <div className="part-search-form">
            <h2>Search for Parts</h2>
            <form>
                <input type="text" placeholder="Enter part name or number" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}