import React, { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { UserContext } from './contexts/userContext.js';
import BarChart from './BarChart.jsx';
import PieChart from './PieChart';
import UserHeader from './layout/UserHeader.jsx';

const Home = () => {
  const { fetchUserData, genderList, raceList, ageList } = useContext(
    UserContext
  );
  const [loading, setLoading] = useState(true);
  const [selectedFocus, setSelectedFocus] = useState('race');
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
            <svg viewBox="-2 0 700 350" preserveAspectRatio="xMidYMid meet">
              <BarChart
                positionX={50}
                positionY={300}
                width={500}
                height={300}
                index={0}
                selectedFocus={selectedFocus}
                colorList={colorList}
              />
              <PieChart
                x={500}
                y={0}
                list={genderList}
                title="Gender"
                colorList={colorList}
                setSelectedFocus={setSelectedFocus}
                index="gender"
              />

              <PieChart
                x={500}
                y={100}
                list={raceList}
                title="Race"
                colorList={colorList}
                setSelectedFocus={setSelectedFocus}
                index="race"
              />
              <PieChart
                x={500}
                y={200}
                list={ageList}
                title="Age"
                colorList={colorList}
                setSelectedFocus={setSelectedFocus}
                index="age"
              />
            </svg>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

const chartStyle = {
  display: 'flex',
};

export default Home;
