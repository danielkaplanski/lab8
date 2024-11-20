"use client";
import React from 'react';

function IncorrectComponent() {
  let count = 0;

  const increment = () => {
    count += 1; 
    console.log('Count:', count);
  };

  return (
    <div>
      <h1>Count: {count}</h1> {/* Nieaktualny stan */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default IncorrectComponent;
