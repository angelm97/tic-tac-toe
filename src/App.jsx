import { useState, useEffect } from 'react'


import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
import BotGamer from './components/BotGamer.jsx'
import { useLocation } from 'react-router-dom'



function App() {

  console.log(location.pathname);
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.O
  })

  useEffect(() => {
    BotGamer(turn, TURNS, board, setBoard, checkWinnerFrom, checkEndGame, setTurn, saveGameToStorage, setWinner)
  }, [turn])


  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.O)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = async (index) => {

    if (board[index] || winner) return
   

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

     const newTurn =  await turn === TURNS.X ? TURNS.O : TURNS.X
     await setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {

      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
