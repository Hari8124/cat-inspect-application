// src/components/InspectionDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InspectionDetail = () => {
    const [inspection, setInspection] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/inspections/${id}`)
            .then(res => res.json())
            .then(data => {
                setInspection(data);
            });
    }, [id]);

    return (
        <div>
            {inspection ? (
                <div>
                    <h2>Inspection Detail</h2>
                    <p>Truck Serial Number: {inspection.truckSerialNumber}</p>
                    <p>Truck Model: {inspection.truckModel}</p>
                    {/* Additional fields... */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default InspectionDetail;
