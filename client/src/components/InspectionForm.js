import React, { useState } from 'react';
import axios from 'axios';

const InspectionForm = () => {
    const [inspection, setInspection] = useState({});

    const handleChange = (e) => {
        setInspection({
            ...inspection,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/inspections', inspection);
        // Handle success or errors here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="tirePressure" onChange={handleChange} placeholder="Tire Pressure" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default InspectionForm;
