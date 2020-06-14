import React, { useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({
  data,
  colorScale,
  grayScale,
  title,
  setSelectedFocus,
  // selectedHover,
  // setSelectedHover,
  index,
  x,
  y,
  width,
  active,
}) => {
  const ref = useRef(null);

  const radius = width / 2;

  // Set svg canvas dimensions
  const svg = d3
    .select(ref.current)
    .attr('width', width)
    .attr('x', x)
    .attr('y', y);

  // Create each slice based on the d.percentage value
  const pie = d3.pie().value(d => d.percentage);

  // Define slice radius
  const path = d3
    .arc()
    .outerRadius(radius - 1)
    .innerRadius(0);

  // g element (contains the actual slice) will be centered
  const g = svg
    .append('g')
    .attr('transform', `translate(${radius}, ${radius})`);

  // Define data for each arc
  const arc = g.selectAll('arc').data(pie(data)).enter().append('g');

  // Draw the slices
  arc
    .append('path')
    // The 'd' attr defines the path to be drawn
    .attr('d', path)
    .attr('stroke', 'black')
    .attr('stroke-width', '1px')
    .attr('stroke-opacity', '0.25')
    .attr('fill', (data, i) => (active ? colorScale(i) : grayScale(i)));

  // Add percentages as the labels
  arc
    .append('text')
    .attr('font-size', '40%')
    .attr('text-anchor', 'middle')
    .attr('transform', d => `translate(${path.centroid(d)})`)
    .text(d => Math.round(d.data.percentage) + '%');

  // Change active pie/bar chart combination on click/hover
  const handleClick = e => {
    setSelectedFocus(index);
  };

  const handleHover = e => {
    setSelectedFocus(index);
  };

  return (
    <svg
      opacity={active ? '1' : '0.6'}
      className="pieChart"
      // *********************************** //
      // ** on the click or on the hover?? ** //
      onMouseOver={handleHover}
      // onClick={handleClick}
      // *********************************** //
      ref={ref}
    ></svg>
  );
};

export default PieChart;
