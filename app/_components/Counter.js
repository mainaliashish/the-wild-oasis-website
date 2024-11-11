"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <p>There are {users?.length} users</p>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
