import Counter1 from "./Components/Counter1";
import CounterContext from "./Components/CounterContext";

function App() {
  return (
    <>
      <CounterContext>
        <Counter1></Counter1>
      </CounterContext>
    </>
  );
}

export default App;
