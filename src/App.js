import { useSelector, useDispatch } from "react-redux";
import actions from "./actions/counter";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(actions.incrementCounter);
        }}
      >
        +
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          dispatch(actions.decrementCounter);
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
