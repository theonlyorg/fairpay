// import React, { useEffect, useContext, useRef } from 'react';
// import * as d3 from 'd3';
// import { DataContext } from './contexts/dataContext';

// const PieChart = props => {
//   const { data, fetchData } = useContext(DataContext);

//   // Get assigned data
//   const category = data[props.category];

//   // Rerender pie chart when data udpates
//   useEffect(() => {
//     const ref = useRef(null).current;

//     // Create svg element
//     const svgWidth = 200;
//     const svgHeight = 200;
//     const radius = Math.min(svgWidth, svgHeight) / 2;

//     // Set svg dimensions
//     const svg = d3
//       .select('svg')
//       .attr('width', svgWidth)
//       .attr('height', svgHeight);

//     // Create group element for svg elements
//     const g = svg
//       .append('g')
//       .attr('transform', `translate(${radius}, ${radius})`);

//     // Set color scale
//     const color = d3.scaleOrdinal(d3.schemePastel1);

//     // Create function to target percentage value only
//     const pie = d3.pie().value(d => d.percentage);

//     // Set radius?
//     const path = d3.arc().outerRadius(radius).innerRadius(0);

//     // Enter data
//     const arc = g.selectAll('arc').data(pie(category)).enter().append('g');

//     arc
//       .append('path')
//       .attr('d', path)
//       .attr('fill', d => color(d.data.percentage));
//   }, [data]);

//   return (
//     <div>
//       <svg ref={ref}></svg>
//     </div>
//   );
// };

// export default PieChart;
