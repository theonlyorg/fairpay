import React, { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { UserContext } from './contexts/userContext.js';
import BarChart from './BarChart.jsx';
import PieChart from './PieChart';
import UserHeader from './layout/UserHeader.jsx';
// import ComparisonTabs from './layout/ComparisonTabs.jsx';
// import CompanyComparison from './CompanyComparison.jsx';
// import IndividualComparison from './IndividualComparison.jsx';

const Home = () => {
  const { fetchUserData, genderList, raceList, ageList } = useContext(
    UserContext
  );
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedFocus, setSelectedFocus] = useState("race");
  const [colorList, setColorList] = useState([
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#af7aa1',
    '#ff9da7',
    '#9c755f',
    '#bab0ab',
  ]);

  // Watch focus switching
  const handleFocusSwitch = (e, view) => {
    setSelectedFocus(view);
  };

  // Fetch user data on mount
  useEffect(() => {
    fetchUserData();
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <UserHeader />
      {loading ? (
        <h2 className="current_user_header">Loading Data...</h2>
      ) : (
        <div id="tables_div">
          <Container>
            <svg viewBox="-2 0 500 330" preserveAspectRatio="xMidYMid meet">
              <BarChart 
                positionX={30} 
                positionY={300} 
                totalWidth={300} 
                totalHeight={300}    
                index={0} 
                selectedFocus={selectedFocus}
                colorList={colorList}
              />
            <PieChart
              positionX={330} 
              positionY={0} 
              list={genderList}
              title="Gender"
              colorList={colorList}
              // handleTabSwitch={handleFocusSwitch}
              index={0}
            />
            <PieChart
              positionX={330} 
              positionY={100} 
              list={raceList}
              title="Race"
              colorList={colorList}
              // handleTabSwitch={handleFocusSwitch}
              index={1}
            />
            <PieChart
              positionX={330} 
              positionY={150} 
              list={ageList}
              title="Age"
              colorList={colorList}
              // handleTabSwitch={handleFocusSwitch}
              index={2}
            />
            </svg>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
