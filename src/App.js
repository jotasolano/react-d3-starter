import { inspect } from '@xstate/inspect';
import React from 'react';
import RectHooks from './components/Chart.js';
import MousePosMachine from './State.js';

inspect({
  url: "https://statecharts.io/inspect",
  iframe: false
});


// import MousePosMachine from './State';

const App = () => (
  <div>
    <RectHooks></RectHooks>
  </div>
)

export default App;
