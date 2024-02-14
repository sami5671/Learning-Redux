import { createContext, useState } from "react";

export const COUNTER_CONTEXT = createContext();

const CounterContext = ({ children }) => {
  const [count, setCount] = useState(0);
  // for counter 2
  const [count2, setCount2] = useState(0);

  const value = {
    count,
    setCount,
    count2,
    setCount2,
  };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      {children}
    </COUNTER_CONTEXT.Provider>
  );
};

export default CounterContext;
