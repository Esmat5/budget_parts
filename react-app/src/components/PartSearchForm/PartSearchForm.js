import React from "react";
import "./partSearchForm.css"; // Import the CSS file for styling
import {getDistinctMakes, getAllModelsAndTypes} from "../../data/APICalls"; 

export default function PartSearchForm() {
    const [models, setModels] = React.useState([]);
    const [types, setTypes] = React.useState([]);
    const [makes, setMakes] = React.useState([]);

    const [selectedMake, setSelectedMake] = React.useState("");
    
    const fetchMakes = async () => {
      try {
        const distinctMakes = await getDistinctMakes();
        setMakes(distinctMakes);
      } catch (error) {
        console.error("Error fetching makes:", error);
      }
    }; 
    
    const fetchModelsAndTypes = async (make) => {
      try {
        const modelsAndTypes = await getAllModelsAndTypes(make);

        // Remove duplicates using Set
        const uniqueModels = [...new Set(modelsAndTypes.map(item => item.model))];
        const uniqueTypes = [...new Set(modelsAndTypes.map(item => item.part_type))];

        setModels(uniqueModels);
        setTypes(uniqueTypes);
        // Process models and types as needed
      } catch (error) {
        console.error("Error fetching models and types:", error);
      }
    };  

    
    React.useEffect(() => {
      fetchMakes();
      fetchModelsAndTypes();
    }, []); 


    return (
            <div id="part-search-form">
                <form className="form-container">
                    <div className="part-search-header">
                        <h1>Search For Parts</h1>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <select id="make" name="make"
                            onChange={(e) => {
                                const choosenMake = e.target.value;
                                setSelectedMake(choosenMake);
                                fetchModelsAndTypes(choosenMake);}}>
                                <option value="">Select Make</option>
                                {
                                    makes.length === 0 ? (
                                        <option value="all">No Makes Available</option>
                                    ): (
                                        makes.map((make, index) => (
                                            <option key={index} value={make}>{make}</option>
                                        ))
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <select id="model" name="model">
                                <option value="">Select Model</option>
                                {
                                    models.length === 0 ? (
                                        <option value="all">No Models Available</option>
                                    ): (
                                        models.map((model, index) => (
                                            <option key={index} value={model}>{model}</option>
                                        ))
                                    )
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <select id="type" name="type">
                                <option value="">Select Type</option>
                                {
                                    types.length === 0 ? (
                                        <option value="all">No Types Available</option>
                                    ): (
                                        types.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))
                                    )
                                }
                            </select>
                        </div>

                    </div>
                    <div className="button-row">
                        <input type="submit" value="Search Now" />
                    </div>
                </form>
            </div>
    );
}