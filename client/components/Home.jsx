import React, { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { UserContext } from './contexts/userContext.js';
import BarChart from './BarChart.jsx';
import PieChart from './PieChart';
import UserHeader from './layout/UserHeader.jsx';

const Home = () => {
  const { fetchUserData, agePercent, racePercent, genderPercent } = useContext(
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

  // Temporarily hardcoded data
  const ageData = [
    { category: '18 - 35', percentage: 54.54545454545454 },
    { category: '36 - 50', percentage: 18.181818181818183 },
    { category: '51+', percentage: 27.27272727272727 },
  ];

  const genderData = [
    { category: '18 - 35', percentage: 54.54545454545454 },
    { category: '36 - 50', percentage: 18.181818181818183 },
    { category: '51+', percentage: 27.27272727272727 },
  ];

  const raceData = [
    { category: 'Asian', percentage: 27.27272727272727 },
    { category: 'Latino', percentage: 18.181818181818183 },
    {
      category: 'Native Hawaiian or Other Pacific Islander',
      percentage: 18.181818181818183,
    },
    { category: 'White', percentage: 36.36363636363637 },
  ];

  // =========================== //
  // ========== D3 BUG========== //
  // =========================== //

  // Comment in the lines below to see the weird bug

  // const test = [
  //   { category: '18 - 35', percentage: 54.54545454545454 },
  //   { category: '36 - 50', percentage: 18.181818181818183 },
  //   { category: '51+', percentage: 27.27272727272727 },
  // ];
  // let thing = JSON.parse(JSON.stringify(agePercent));

  // They are exactly the same here, but only the hard coded data is being rendered
  // console.log(JSON.stringify(test) === JSON.stringify(agePercent)); // <<<< evals to TRUE
  // console.log('types', Array.isArray(test), Array.isArray(agePercent));
  // console.log('the test', test); //        << SAME THING
  // console.log('the percent', agePercent);  << SAME THING
  // const ageData = agePercent;

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
            <svg viewBox="-2 0 500 350" preserveAspectRatio="xMidYMid meet">
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
                x={400}
                y={60}
                data={genderData}
                title="Gender"
                colorList={colorList}
                setSelectedFocus={setSelectedFocus}
                index="gender"
                active={selectedFocus === 'gender'}
              />

              <PieChart
                x={400}
                y={150}
                data={raceData}
                title="Race"
                colorList={colorList}
                setSelectedFocus={setSelectedFocus}
                index="race"
                active={selectedFocus === 'race'}
              />
              <PieChart
                x={400}
                y={240}
                data={ageData}
                title="Age"
                colorList={colorList}
                setSelectedFocus={setSelectedFocus}
                index="age"
                active={selectedFocus === 'age'}
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
