import { useHistory } from "react-router-dom";

const Component1 = () => {
  const history = useHistory();
  return (
    <div>
      <div>Component1</div>
      <button
        onClick={() => {
          alert("You are redirected");
          history.push("/component3");
        }}
      >
        click
      </button>
    </div>
  );
};

export default Component1;
