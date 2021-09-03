const incrementCounter = {
  type: "INCREMENT_COUNTER",
  payload: {
    amount: 1,
  },
};

const decrementCounter = {
  type: "DECREMENT_COUNTER",
  payload: {
    amount: 1,
  },
};

export default {
  incrementCounter,
  decrementCounter,
};
