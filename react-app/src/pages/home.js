import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PartSearchForm from "../components/PartSearchForm/PartSearchForm";
import { getPartNumber } from "../data/APICalls";
import Footer from "../components/Footer/Footer";
import "./home.css";
export default function Home() {
  const [partNumber, setPartNumber] = React.useState("");

  const make = "AIRMAN";
  const model = "AX08";
  const partType = "Rubber Track";
  const fetchPartNumber = async (make, model, partType) => {
    try {
      const partData = await getPartNumber(make, model, partType);
      setPartNumber(partData.part_number);
    } catch (error) {
      console.error("Error fetching part number:", error);
    }
  }

  React.useEffect(() => {
    fetchPartNumber(make, model, partType);
  }, [make, model, partType]);  

  
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
