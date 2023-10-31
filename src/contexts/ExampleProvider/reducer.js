import * as types from "./types";

export const reducerCounter = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      console.log("aaabbb");
      return { ...state, counter: state.counter + 1 };
    }

    case types.DECREMENT_COUNTER: {
      console.log("aaa");
      return { ...state, counter: state.counter - 1 };
    }
  }

  return { ...state };
};
