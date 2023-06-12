import React from 'react'




const BotGamer = (turn, TURNS, board, setBoard, checkWinnerFrom, checkEndGame, setTurn, saveGameToStorage, setWinner, mode) => {

    let exit = true;

    if (turn == TURNS.X && mode == '/bot') {
        while (exit) {
            const randomnumber = Math.floor((Math.random() * 9))
            if (board[randomnumber] === null) {
                const newBoard = [...board]
                newBoard[randomnumber] = turn
                setBoard(newBoard)

                const newWinner = checkWinnerFrom(newBoard)
                if (newWinner) {

                    setWinner(newWinner)
                } else if (checkEndGame(newBoard)) {
                    setWinner(false)
                }

                const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
                setTurn(newTurn)

                saveGameToStorage({
                    board: newBoard,
                    turn: newTurn
                })
                exit = (false)
            }

            if (board.every((square) => square !== null)) {
                exit = (false)
            }

        }
    }


}

export default BotGamer
