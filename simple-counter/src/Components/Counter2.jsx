import { useContext } from "react";
import { COUNTER_CONTEXT } from "./CounterContext";

const Counter2 = () => {
  const { count2, setCount2 } = useContext(COUNTER_CONTEXT);

  if (count2 < 0) {
    setCount2(0);
  }

  return (
    <div>
      <h1>counter2 </h1>

      <div className="flex gap-2">
        <div>
          <button
            onClick={() => setCount2((prev) => prev + 1)}
            className="bg-cyan-500 px-4 py-1 rounded-lg"
          >
            Increment
          </button>
        </div>
        <p>{count2}</p>
        <div>
          <button
            onClick={() => setCount2((prev) => prev - 1)}
            className="bg-orange-300 px-4 py-1 rounded-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter2;
