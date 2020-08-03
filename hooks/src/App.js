import React, { useState } from "react";

// 在无状态组件中去声明一个useState;

function App() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button onClick={addNum.bind(this)}>add</button>
      <h1>点击了{num}次</h1>;
    </div>
  );
  function addNum() {
    return setNum(num + 1);
  }
}

export default App;
