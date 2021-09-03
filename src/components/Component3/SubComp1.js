import React from "react";
import { useParams } from "react-router-dom";
const SubComp1 = () => {
  const { name } = useParams();
  return <div>The name is : {name}</div>;
};

export default SubComp1;
