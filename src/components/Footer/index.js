import React from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <div>
      <div>Footer page</div>
      <button
        onClick={() => {
          history.push("/job/8");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Footer;
