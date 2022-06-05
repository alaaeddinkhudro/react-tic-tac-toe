import React,{ useEffect, useState } from 'react'
import Square from './Square';

const Board = () => {
    const [nextPlayer , setReound] = useState('X');
    const [squaresStatus , setSquaresStatus] = useState(Array(9).fill(null));
    const [winner, setWinner] =useState(null);
    
    let status = `Next player: ${nextPlayer}`;
    if(winner){
        status = `The Winner is player: ${winner}`;
    }

    const renderSquare = (i) => {
        return <Square onClick={handelSquareClick} index={i} value={squaresStatus[i]}/> ;
    }
  
    const handelSquareClick = (index) => {
        if(!winner && !squaresStatus[index]){
            setReound(nextPlayer === 'X'? 'O':'X')

            let newSquaresStatus = {...squaresStatus}
            newSquaresStatus[index] = nextPlayer
            setSquaresStatus({...newSquaresStatus})
            setWinner(calculateWinner(newSquaresStatus))
        }
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }


    return ( <div>
        <div className = "status" > 
            { status }
        </div> 
        <div className = "board-row" > 
            { renderSquare(0)} 
            { renderSquare(1)} 
            { renderSquare(2)} 
        </div> 
        <div className = "board-row" > 
            {renderSquare(3)} 
            {renderSquare(4)} 
            {renderSquare(5)} 
        </div> 
        <div className = "board-row" > 
            {renderSquare(6)} 
            {renderSquare(7)} 
            {renderSquare(8)} 
        </div>
    </div>
    )
}

export default Board