import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../Redux/Features/Counter/CounterSlice";

const Counter = () => {
  // ==========================Getting the value & action dispatch=======================================
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // console.log(count);

  // =================================================================================================
  return (
    <div>
      <h1>Counter App</h1>

      <div className="flex gap-2">
        <div>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 px-4 py-2 hover:bg-slate-400"
          >
            Increment
          </button>
        </div>
        <p>{count}</p>
        <div>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-orange-500 px-4 py-2 hover:bg-slate-400"
          >
            decrement
          </button>
        </div>
      </div>

      <h1 className="mt-12">Counter 2 Value payload</h1>
      <div className="flex gap-2">
        <div>
          <button
            onClick={() => dispatch(incrementByValue(10))}
            className="bg-green-500 px-4 py-2 hover:bg-slate-400"
          >
            Increment 10
          </button>
        </div>
        <p>{count}</p>
        <div>
          <button
            onClick={() => dispatch(decrementByValue(10))}
            className="bg-orange-500 px-4 py-2 hover:bg-slate-400"
          >
            decrement 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
