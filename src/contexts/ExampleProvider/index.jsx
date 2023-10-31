import P from "prop-types";
import { useReducer } from "react";
import { CounterContext } from "./context";
import { dataCounter } from "./data";
import { reducerCounter } from "./reducer";

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducerCounter, dataCounter);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
