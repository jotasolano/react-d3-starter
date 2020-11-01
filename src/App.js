import { inspect } from '@xstate/inspect';
import { interpret } from "xstate";
import React from 'react';
import RectHooks from './components/Chart.js';
import MousePosMachine from './State.js';


const mousePosService = interpret(MousePosMachine).onTransition(state =>
  console.log('state value', state.value)
);

mousePosService.start();

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
