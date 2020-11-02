import React from 'react';
import RectHooks from './components/Chart.js';
import Coordinates from './components/Coordinates';

// TODO: toggle data
const data = [5, 3, 6, 1, 2];

const App = () => (
  <div>
    <RectHooks datum={data} />
    <Coordinates />
  </div>
);

export default App;
