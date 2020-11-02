import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as d3 from 'd3';

const configSelector = (state) => state.chartConfig;

const mapStateToProps = (state, ownProps) => ({
  chart: configSelector(state),
});

const t = d3.transition().duration(1000);

function Coordinates(props) {
  const [data, setData] = useState();
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current); // select svg ref

    console.log('state changed?');

    svg
      .selectAll('text')
      .data([props.chart.x, props.chart.y])
      .join(
        (enter) => enterDOM(enter, t),
        (update) => updateDOM(update, t),
        (exit) => exitDOM(exit, t),
      );

    function enterDOM(enter, t) {
      enter
        .append('text')
        .attr('class', 'new-text')
        .attr('x', 20)
        .attr('y', (d, i) => {
          return i === 0 ? 20 : 40;
        })
        .text(`No mouse action yet...`);
    }

    function updateDOM(update, t) {
      return update.attr('class', 'updated-text').text((d, i) => {
        return i === 0
          ? `x Coord ${props.chart.x}`
          : `y Coord ${props.chart.y}`;
      });
    }

    function exitDOM(exit, t) {
      return exit.remove();
    }
  }, [props.chart]);

  const update = () => {
    const newData = data.map((value) => value + 5);
    setData(newData);
  };

  const removeLast = () => {
    const newData = [...data];
    newData.pop();
    setData(newData);
  };

  return (
    <div>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={update}>Update</button>
      <br />
      <button onClick={removeLast}>Remove</button>
      <p>{`${props.chart.x}, ${props.chart.y}`}</p>
    </div>
  );
}

export default connect(mapStateToProps)(Coordinates);
