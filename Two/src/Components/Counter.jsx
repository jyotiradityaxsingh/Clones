import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Fixed typo in Minus import

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="text-white">
      <p className="flex justify-center items-center mt-10 text-9xl text-blue-500 ">
        {count}
      </p>
      <hr className="mx-20 border-0 h-2 rounded my-5 bg-blue-500" />{" "}
      <div className="flex justify-center items-center space-x-20 mt-20">
        {" "}
        <button onClick={increment}>
          <Plus className="h-24 w-24 bg-blue-500 rounded-3xl px-2 py-3" />
        </button>
        <button onClick={decrement}>
          <Minus className="h-24 w-24 bg-blue-500 rounded-3xl px-2 py-3" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
