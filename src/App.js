// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.

const App = () => {
  const counterStore = useSelector((state) => state);
  console.log(counterStore);

  return <div></div>;
};

export default App;
