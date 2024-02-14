import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
import CounterContext from "./Components/CounterContext";

function App() {
  return (
    <>
      <CounterContext>
        <Counter1></Counter1>
        <Counter2></Counter2>
      </CounterContext>
    </>
  );
}

export default App;
