import { useState } from 'react';

/*
useState is used to create a state variable named position with an initial value of { x: 0, y: 0 }. 
This state will keep track of the dot's current position on the screen.

The component renders a div element that takes up the entire viewport (width: '100vw', height: '100vh'). 
This div is essentially the playground for the moving dot.

Eventhandling is achieved by using the onPointerMove event listener on the div element.
It listens for mouse movement events and updates the position state with the current mouse coordinates (e.clientX, e.clientY).

Dynamic styling is applied to the dot using inline styles.
The dot is represented by a red circle with a width and height of 20px and a border-radius of 50% to make it round.
*/

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}
