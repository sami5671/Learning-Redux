import { createContext, useState } from "react";

export const COUNTER_CONTEXT = createContext();

const CounterContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      {children}
    </COUNTER_CONTEXT.Provider>
  );
};

export default CounterContext;
