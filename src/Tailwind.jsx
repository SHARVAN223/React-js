
import './tailwind.css'
import React from "react";

function FruitList() {
  let fruit = ["apple", "mango", "banana", "grapes"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruit.map((item, index) => (
          <li key={index}>
            {index +1} + {item}
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;