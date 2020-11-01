import { SET_HOVER_POS } from './types';

const initialState = {
  x: null,
  y: null
};

function chartConfig(state = initialState, action) {
  switch (action.type) {
    case SET_HOVER_POS:
      return {...action.payload}
    default:
      return state;
  }  
}

export default chartConfig;