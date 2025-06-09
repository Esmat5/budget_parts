import React from "react";
import "./parts_list.css"; 


export default function PartsList({ parts }) {

    return (
        <div className="parts-list-container">
            <div className="parts-list-header">
                <h2>Available Parts</h2>
            </div>
            <ul className="parts-list">
                {Array.isArray(parts) && parts.length > 0 ? (
                    parts.map((part, index) => (
                        <div key={index} className="part-card">
                            <li className="part-item">
                                <div className="part-row"><strong className="label">Make:</strong> {part.make}</div>
                                <div className="part-row"><strong className="label">Model:</strong> {part.model}</div>
                                <div className="part-row"><strong className="label">Type:</strong> {part.part_type}</div>
                                <div className="part-row"><strong className="label">Part Number:</strong> {part.part_number}</div>
                            </li>
                        </div>
                    ))
                ) : (
                    <div className="no-parts-container">
                        <h2>No Part Number Found To Display</h2>
                    </div>
                )}
            </ul>
        </div>
    );
}
