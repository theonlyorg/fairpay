import React, { useState, createContext } from 'react';

export const DataContext = createContext();

const DataContextProvider = props => {
  const [data, setData] = useState({
    race: [
      { category: 'White', percentage: 35 },
      { category: 'Black', percentage: 30 },
      { category: 'Hispanic', percentage: 20 },
      { category: 'Asian', percentage: 15 },
    ],
    gender: [
      { category: 'Male', percentage: 55 },
      { category: 'Female', percentage: 45 },
    ],
    age: [{}],
  });

  // We would make a fetch request to the backend to retrieve the actual numbers
  const fetchData = () => {
    // some fetch request
    // setData
  };

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
