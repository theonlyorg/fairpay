import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
// import { schemeGreys } from 'd3';

const PieChart = ({ data, colorScale, title, localFocus, 
                    selectedFocus, setSelectedFocus, 
                    selectedHover, setSelectedHover,
                    index, x, y, width, active }) => {


  const ref = useRef(null);
  console.log("PieChart")
                      
  const bwScale = d3.scaleOrdinal(d3.schemeGreys[5]);
  // const [localFocus, setLocalFocus] = useState();

  let curColorScale;
  // console.log("active", active)
  // if(! active) curColorScale = bwScale;
  // else curColorScale = colorScale;


  if (selectedFocus === localFocus) {
    curColorScale = colorScale;
  }
  else {
    curColorScale = bwScale;
  }

  const radius = width / 2;

  // Set svg dimensions
  const svg = d3
    .select(ref.current)
    .attr('width', width)
    .attr('x', x)
    .attr('y', y);

  // Center the g element appended to the svg canvas
  const g = svg
    .append('g')
    .attr('transform', `translate(${radius}, ${radius})`);

  // Create pie chart and target percentages for values
  const pie = d3.pie().value(d => d.percentage);

  // Build arcs
  const path = d3.arc().outerRadius(radius).innerRadius(0);

  // Enter data
  const arc = g.selectAll('arc').data(pie(data)).enter().append('g');

  arc
    .append('path')
    .attr('d', path)
    .attr('fill', (data, i) => curColorScale(i));

  const handleClick = e => {
    setSelectedFocus(index);
  };
  
  const handleHover = e => {
    setSelectedHover(index);
  }

  return (
    <svg className='pieChart' onMouseOver={handleHover} onClick={handleClick} ref={ref}></svg>
  )
};

export default PieChart;
