import { useState } from 'react';

type TheButtonProps = {
    count: number; // specifying that count should be of type number
    onClick: () => void; // specifying that onClick is a function that returns void
  };

export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <TheButton count={count} onClick={handleClick} />
      <TheButton count={count} onClick={handleClick} />
    </div>
  );
}

function TheButton({ count, onClick }: TheButtonProps) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

{/*
export default function MyButton({count, onClick}) {

    //the current state (count), and the function that lets you update it (setCount).
    // The first time the button is displayed, count will be 0 because you passed 0 to useState(). 
    //When you want to change state, call setCount() and pass the new value to it.
    //functions starting with use are called hooks
    //hooks can only be called ta the top of the component
    //useState() is a hook that lets you add state to your function components 
    /*
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    */

    //return (
        /*<button onClick={handleClick}>Clicked {count} times</button>*/
        {/*
        <button onClick = {onClick}>
        Clicked {count} times
        </button>

    );
*/}
    
}
