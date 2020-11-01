import { SET_HOVER_POS } from './reducers/types';

export const setHoverPos = (x, y) => {
  return {
    type: SET_HOVER_POS,
    payload: { x, y },
  };
};

// export const someOtherActions
