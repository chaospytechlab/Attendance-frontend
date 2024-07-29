import React, { useState } from 'react';
import Progress from './Progress';

const ParentComponent = () => {
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div>
      <label htmlFor="year">Select Year: </label>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        {/* Add more options as needed */}
      </select>
      <Progress year={selectedYear} />
    </div>
  );
};

export default ParentComponent;
