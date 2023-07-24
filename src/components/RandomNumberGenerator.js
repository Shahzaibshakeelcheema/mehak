import React, { useState, useMemo } from "react";
import ItemList from "./ItemList";

const RandomNumberGenerator = () => {
  const [count, setCount] = useState(0);

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Kiwi",
    "Strawberry",
  ];
  // Generate a random number when the count changes, otherwise return the memoized result
  const randomNumber = useMemo(() => {
    console.log("Generating random number...");
    return Math.random();
    //  eslint-disable-next-line
  }, [count]); // Added 'count' back to the dependency array

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
      <button onClick={() => setCount(count + 1)}>
        Generate New Random Number
      </button>
      <ItemList items={items} />
    </div>
  );
};

export default RandomNumberGenerator;
