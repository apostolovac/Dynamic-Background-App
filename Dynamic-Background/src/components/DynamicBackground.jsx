import React, { useState } from 'react';
import './DynamicBackground.css'

const DynamicBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState('gray');

  const colors = ['white', 'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray'];

  const changeBackgroundColor = () => {
    const nextColor = colors[(colors.indexOf(backgroundColor) //This part finds the current index of backgroundColor in the colors array.
       + 1)//This increments the current index by 1 to get the index of the next color in the array.
       % colors.length]; //The modulus operator % is used to wrap around if the incremented index exceeds the length of the colors array.
    setBackgroundColor(nextColor);
    document.body.style.backgroundColor = nextColor;
  };

  return (
    <button
      onClick={changeBackgroundColor}>
      Change color!
    </button>
  );
};

export default DynamicBackground;