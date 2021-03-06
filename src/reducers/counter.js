const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + action.payload.amount };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - action.payload.amount };
    default:
      return state;
  }
};

export default counterReducer;
