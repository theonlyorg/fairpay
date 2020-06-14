import React, { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { UserContext } from './contexts/userContext.js';
import BarChart from './BarChart.jsx';
import PieChart from './PieChart';
import UserHeader from './layout/UserHeader.jsx';

// choose chart color scheme here
import { schemeSet1 as colorScheme, schemeGreys } from 'd3';
// import { schemePaired as colorScheme } from "d3";

import { scaleOrdinal } from 'd3-scale';

const Home = () => {
  const { fetchUserData, agePercent, racePercent, genderPercent } = useContext(
    UserContext
  );
  const [loading, setLoading] = useState(true);
  const [selectedFocus, setSelectedFocus] = useState('race');
  // const [selectedHover, setSelectedHover] = useState('race');
  const colorScale = scaleOrdinal(colorScheme);
  const grayScale = scaleOrdinal(schemeGreys[5]);

  // console.log("Home -> genderPercent", genderPercent)
  // console.log("Home -> racePercent", racePercent)
  // console.log("Home -> agePercent", agePercent)

  // Temporarily hardcoded data
  const ageData = [
    { category: '18 - 35', percentage: 54.54545454545454 },
    { category: '36 - 50', percentage: 18.181818181818183 },
    { category: '51+', percentage: 27.27272727272727 },
  ];

  const genderData = [
    { category: 'Female', percentage: 45.45454545454545 },
    { category: 'Male', percentage: 54.54545454545454 },
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
                colorScale={colorScale}
              />
              <text x={410} y={10} fontSize="70%">
                Race
              </text>
              <PieChart
                x={390}
                y={20}
                width={70}
                data={raceData}
                title="Race"
                colorScale={colorScale}
                grayScale={grayScale}
                // selectedHover={selectedHover}
                // setSelectedHover={setSelectedHover}
                selectedFocus={selectedFocus}
                setSelectedFocus={setSelectedFocus}
                index="race"
                active={selectedFocus === 'race'}
              />
              <text x={405} y={112} fontSize="70%">
                Gender
              </text>
              <PieChart
                x={390}
                y={125}
                width={70}
                data={genderData}
                title="Gender"
                colorScale={colorScale}
                grayScale={grayScale}
                // selectedHover={selectedHover}
                // setSelectedHover={setSelectedHover}
                selectedFocus={selectedFocus}
                setSelectedFocus={setSelectedFocus}
                index="gender"
                active={selectedFocus === 'gender'}
              />
              <text x={412} y={220} fontSize="70%">
                Age
              </text>
              <PieChart
                x={390}
                y={230}
                width={70}
                data={ageData}
                title="Age"
                colorScale={colorScale}
                grayScale={grayScale}
                // selectedHover={selectedHover}
                // setSelectedHover={setSelectedHover}
                selectedFocus={selectedFocus}
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
