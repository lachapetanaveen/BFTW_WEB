import React from 'react';

const FilterBox = ({ onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value); // Pass the filter value to the parent component
  };

  return (
    <input type="text" placeholder="Filter" onChange={handleChange} />
  );
};

export default FilterBox;
