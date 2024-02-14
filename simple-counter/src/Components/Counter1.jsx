import { useContext } from "react";
import { COUNTER_CONTEXT } from "./CounterContext";

const Counter1 = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <h1>counter1 </h1>

      <div className="flex gap-2">
        <div>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-green-500 px-4 py-1 rounded-lg"
          >
            Increment
          </button>
        </div>
        <p>{count}</p>
        <div>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-red-500 px-4 py-1 rounded-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
