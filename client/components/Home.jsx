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
  const [selectedFocus, setSelectedFocus] = useState(0);
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

  // Watch tab switching
  const handleTabSwitch = (e, view) => {
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
            <svg viewBox="-2 0 500 500" preserveAspectRatio="xMidYMid meet">
              <BarChart
                positionX={30}
                positionY={300}
                width={500}
                height={300}
                index={0}
                selectedFocus={selectedFocus}
                colorLisst={colorList}
              />
            </svg>
            <PieChart
              list={genderList}
              title="Gender"
              colorList={colorList}
              handleTabSwitch={handleTabSwitch}
              index={0}
            />
            <PieChart
              list={raceList}
              title="Race"
              colorList={colorList}
              handleTabSwitch={handleTabSwitch}
              index={1}
            />
            <PieChart
              list={ageList}
              title="Age"
              colorList={colorList}
              handleTabSwitch={handleTabSwitch}
              index={2}
            />
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
