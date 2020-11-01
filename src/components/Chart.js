import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setHoverPos } from '../actions';
import '../App.css';
import * as d3 from 'd3';

const configSelector = (state) => state.chartConfig;

const mapStateToProps = (state, ownProps) => ({
  chart: configSelector(state),
});

const t = d3.transition().duration(1000);

function RectHooks(props) {
  const [data, setData] = useState([5, 3, 6, 1, 2]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current); // select svg ref

    svg
      .selectAll('rect')
      .data(data)
      .join(
        (enter) => enterDOM(enter, t),
        (update) => updateDOM(update, t),
        (exit) => exitDOM(exit, t),
      );

    function enterDOM(enter, t) {
      enter
        .append('rect')
        .attr('class', 'new-element')
        .on('mousemove', (event) => {
          let coords = d3.pointer(event);
          let x = coords[0];
          let y = coords[1];

          //Dispatch to state here
          props.dispatch(setHoverPos(x, y));
        })
        .transition(t)
        .attr('width', (value) => value * 10)
        .attr('height', 50)
        .attr('x', (value) => value + 10)
        .attr('y', (value) => (value * value) / 2)
        .attr('stroke', 'red')
        .attr('stroke-width', '3')
        .attr('fill', 'blue');
    }

    function updateDOM(update, t) {
      return update
        .attr('class', 'updated-element')
        .transition()
        .duration(1000)
        .attr('width', (value) => value * 10)
        .attr('height', 50)
        .attr('x', (value) => value + 10)
        .attr('y', (value) => (value * value) / 2)
        .attr('stroke', 'red')
        .attr('stroke-width', '3')
        .attr('fill', 'transparent');
    }

    function exitDOM(exit, t) {
      return exit
        .transition()
        .duration(1000)
        .attr('width', 0)
        .attr('height', 0)
        .remove();
    }
  }, [data]);

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

export default connect(mapStateToProps)(RectHooks);
