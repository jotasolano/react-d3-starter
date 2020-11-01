import { Machine, assign, interpret } from "xstate";
import { inspect } from '@xstate/inspect';

// inspect({
//   url: "https://statecharts.io/inspect",
//   iframe: false
// });


const MousePosMachine = Machine({
  id: "mousePosition",
  initial: "inactive",
  context: {
    x: 0,
    y: 0,
  },
  states: {
    inactive: {
      on: { MOUSE_OUT: "active" }
    },
    active: {
    entry: assign({
      x: ctx => ctx.x,
      y: ctx => ctx.y
    }),
    on: { MOUSE_OVER: "active" }
    },
  }
});

// const service = interpret(MousePosMachine, { devTools: true });

export default MousePosMachine;