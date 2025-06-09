import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Budget Parts. All rights reserved.</p>                
            </div>
        </footer>
    );
}