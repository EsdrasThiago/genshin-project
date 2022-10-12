import { SAVE_VALUES } from "../actions";

const INITIAL_STATE = {
  destiny: 0,
  gems: 0,
};

function values(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
  case SAVE_VALUES:
      return {
        destiny: payload.destinyConvert, 
        gems: payload.gems
    };
  default:
    return state;
  }
}

export default values;
