import React from "react";

function Addlist(props) {
  let addVal;
  function ChangeVal(e) {
    addVal = e.target.value;
  }
  function addList() {
    props.addList({ say: addVal });
  }
  return (
    <div>
      <input type="text" placeholder="彪哥！请输入" onChange={ChangeVal} />
      <button onClick={addList}>新增</button>
    </div>
  );
}

export default Addlist;
