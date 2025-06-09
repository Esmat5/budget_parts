import React from "react";
import "./parts_list.css"; 


export default function PartsList({ parts }) {

    if (!Array.isArray(parts)) {
        return <p>No valid parts to display.</p>;
    }
    
    return (

        <div className="parts-list-container">
            <h2>Available Parts</h2>
            {parts === null ? (
                <p>No parts available.</p>
            ) : (
                <ul className="parts-list">
                    {parts.map((part, index) => (
                        <li key={index} className="part-item">
                            <div><strong>Make:</strong> {part.make}</div>
                            <div><strong>Model:</strong> {part.model}</div>
                            <div><strong>Type:</strong> {part.part_type}</div>
                            <div><strong>Part Number:</strong> {part.part_number}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
