import { Machine, assign, interpret } from "xstate";
import { inspect } from '@xstate/inspect';

// inspect({
//   url: "https://statecharts.io/inspect",
//   iframe: false
// });


const MousePosMachine = Machine({
  id: "mousePosition",
  initial: "active",
  context: {
    COORDS: { x:undefined, y:undefined },
  },
  states: {
    active: {
      on: {
        MOUSE_OVER: {
          actions: assign({
            COORDS: (_, event) => {
              return {x: event.x, y:event.y}
            }
          })
        }
      }
    }
  }
});

export default MousePosMachine;