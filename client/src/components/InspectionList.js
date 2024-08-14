// src/components/InspectionList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InspectionList = () => {
  const [inspections, setInspections] = useState([]);

  useEffect(() => {
    fetch('/api/inspections')
      .then(res => res.json())
      .then(data => setInspections(data));
  }, []);

  return (
    <div>
      <h2>Inspection List</h2>
      <ul>
        {inspections.map(inspection => (
          <li key={inspection._id}>
            <Link to={`/inspections/${inspection._id}`}>{inspection.truckSerialNumber}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InspectionList;
