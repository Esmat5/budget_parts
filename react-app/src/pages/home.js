import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PartSearchForm from "../components/PartSearchForm/PartSearchForm";
import Footer from "../components/Footer/Footer";
import "./home.css";
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

      <div>
        <Footer />
      </div>
    </div>
  );
}
