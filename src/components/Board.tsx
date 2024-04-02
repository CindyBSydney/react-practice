import '../App.css';
import { useState } from 'react';

/*

The Board keeps track of all squares on the board. 
It holds an array called squares that starts off with all positions set to null, meaning all squares are initially empty.

The Square is a button on the UI. 
It doesn't manage its state (whether it's marked 'X' or 'O' or is empty); 
instead, it receives two pieces of information from the Board: 
what it should display (value), and what should happen when it's clicked (onSquareClick).


Functioning
User clicks the square
The click triggers the onSquareClick function provided by the Board to the Square. 
The handleClick function inside the Board takes an index (position of the square on the board, starting from 0 for the top left) as its parameter. 
It creates a copy of the current squares array -new copy instead of directly changing the state hence immutability. 
It updates the copied array at the index of the clicked square to 'X', marking that square as played.
It then updates the Board's state with this new array using setSquares, replacing the old squares array with the new one.
Once the state (squares) of the Board is updated and it triggers a re-render of the Board and any child components affected by the change—in this case, the Square components.
Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later. 
*/

type SquareProps = {
    //value: string;
    value: string|null;
    onSquareClick: () => void;   
}

function Square({value, onSquareClick}: SquareProps){
    //const [value, setValue] = useState(null);
    
    /*function handleClick(){
        setValue('X');
    }
    */

    return (
        <button 
        className="square"
        onClick={onSquareClick}
        >
            {value}
        </button>
    );

}

function Board({ xIsNext, squares, onPlay }: { xIsNext: boolean, squares: string[], onPlay: (squares: string[]) => void }) {
    
    //const [xIsNext, setXIsNext] = useState(true);
    //const [squares, setSquares] = useState<string[]>(Array(9).fill(null));


    //handleclick creates a copy of the squares array(nextSquares) using the slice() array method, changes the value of the first element to 'X' and then sets the state of the squares array to the new array
    function handleClick(i: number){
        if (squares[i]||calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
        //nextSquares[i] = 'X';

        //setSquares(nextSquares);
        //setXIsNext(!xIsNext);

        onPlay(nextSquares);
    }
    
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }

    
    return (
        <>
            <div className="status">{status}</div>
            <div className ="board-row">
                <Square value={squares[0]} onSquareClick = {() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick = {() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick = {() => handleClick(2)}/>
            </div>
            <div className ="board-row">
                <Square value={squares[3]} onSquareClick = {() => handleClick(3)}/>     
                <Square value={squares[4]} onSquareClick = {() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick = {() => handleClick(5)}/>
            </div>
            <div className ="board-row">
                <Square value={squares[6]} onSquareClick = {() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick = {() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick = {() => handleClick(8)}/>
            </div>
        </>
    );
}
export default function Game() {
    //const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);   
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    //render squares for the current move
    //const currentSquares = history[history.length - 1];

    const currentSquares = history[currentMove];

    //handleplay component will be used by the Board to update the game state
    function handlePlay(nextSquares: string[]) {
        //setHistory([...history, {squares: nextSquares}]);

        //const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        const nextHistory = history.slice(0, currentMove + 1).concat([{ squares: nextSquares }]);
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);

        //setXIsNext(!xIsNext);
 
      }
      function jumpTo(nextMove: number) { 
        setCurrentMove(nextMove);
        //setXIsNext(nextMove % 2 === 0);
      }
    
      const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });

    return (
      <div className="game">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares.squares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <ol>{
             <ol>{moves}</ol>
          }</ol>
        </div>
      </div>
    );
  }
function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }