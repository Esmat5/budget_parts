import { useState } from "react";
import { FormValidation } from "./FormValidation"; // Import the validation function
import { getPartNumber } from "../../data/APICalls";


function UseSearchFormHook() {
    const [formValues, setFormValues] = useState({
        make: "",
        model: "",
        partType: "",
    });
    const [errors, setErrors] = useState({});

    async function handleSubmit(event) {
        event.preventDefault(); 

        // Validate form values
        const validationErrors = FormValidation(formValues);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If no errors, proceed with form submission logic
        try {

            const foundPart = await getPartNumber(formValues.make, formValues.model, formValues.partType);

            if ( foundPart != null){
                console.log("Part found:", foundPart);
                // Reset form values if needed
                setFormValues({
                    make: "",
                    model: "",
                    partType: "",
                });
                setErrors({});
            }
            else {
                setErrors({ partType: "Part not found" });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };


    return {
        formValues,
        errors,
        handleChange,
        handleSubmit,
    };
}

export default UseSearchFormHook;