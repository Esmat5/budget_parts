import React from "react";
import "./partSearchForm.css"; // Import the CSS file for styling
import {getDistinctMakes, getAllModelsAndTypes} from "../../data/APICalls"; 
import UseSearchFormHook from "./SearchFormHook";


export default function PartSearchForm() {
    const [models, setModels] = React.useState([]);
    const [types, setTypes] = React.useState([]);
    const [makes, setMakes] = React.useState([]);
    const [selectedMake, setSelectedMake] = React.useState("");

    const {formValues,
        errors,
        handleChange,
        handleSubmit,} = UseSearchFormHook();


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
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="part-search-header">
                        <h1>Search For Parts</h1>
                    </div>
                    <div className="form-errors">
                        {errors.make || errors.model || errors.type && <p className="error">Please Select Fields</p>}
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <select id="make" name="make"
                            onChange={(e) => {
                                handleChange(e);
                                const choosenMake = e.target.value;
                                setSelectedMake(choosenMake);
                                fetchModelsAndTypes(choosenMake);}}
                                value={formValues.make}>
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
                            <select id="model" name="model" value={formValues.model} onChange={handleChange}>
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
                            <select id="type" name="partType" value={formValues.partType} onChange={handleChange}>
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