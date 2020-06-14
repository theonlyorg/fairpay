import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const PieChart = ({
  data,
  colorList,
  title,
  setSelectedFocus,
  index,
  x,
  y,
  active,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    // Create svg element
    const svgWidth = 50;
    const svgHeight = 50;
    const radius = Math.min(svgWidth, svgHeight) / 2;

    // Set colors
    const color = d3.scaleOrdinal(colorList);

    // Set svg dimensions
    const svg = d3
      .select(ref.current)
      .attr('width', svgWidth)
      .attr('height', svgHeight)
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
      .attr('fill', d => color(d.data.percentage));
  }, []);

  const handleClick = e => {
    setSelectedFocus(index);
  };

  return active ? (
    <svg
      style={{ opacity: 1.0 }}
      className="pieChart"
      onClick={handleClick}
      ref={ref}
    ></svg>
  ) : (
    <svg
      style={{ opacity: 0.6 }}
      className="pieChart"
      onClick={handleClick}
      ref={ref}
    ></svg>
  );
};

export default PieChart;
