import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 

const getDistinctMakes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/database/get_distinct_make.php`);

    console.log('Distinct makes fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching distinct makes:', error);
    throw error;
  }
}

const getAllModelsAndTypes = async (make) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/database/get_models_types.php?make=${encodeURIComponent(make)}`);

    console.log('Models and Types fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching distinct makes:', error);
    throw error;
  }
}


const getPartNumber = async (make, model, partType) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/database/get_requested_part.php?`,{
      make: make,
      model: model,
      part_type: partType
    })
    console.log('Part number fetched successfully:', response.data);
    return response.data;
  }
  catch (error) {
    console.error('Error fetching part number:', error);
    throw error;  
  }
}

export { getDistinctMakes, getAllModelsAndTypes, getPartNumber };


