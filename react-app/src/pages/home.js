import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PartSearchForm from "../components/PartSearchForm/PartSearchForm";


export default function Home() {
  return (
    <div className="home-page-container">
      {/* Navbar component */}
      <div className="navbar">
        <Navbar />
      </div>
      
      <div className="search-form-container">
        <PartSearchForm />
      </div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your React application.</p>
    </div>
  );
}
