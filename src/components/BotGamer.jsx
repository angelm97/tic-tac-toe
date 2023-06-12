import React from 'react'




const BotGamer = (turn, TURNS, board, setBoard, checkWinnerFrom, checkEndGame, setTurn, saveGameToStorage, setWinner, mode) => {
    let play = false;
    let exit = true;
    const WINNER_COMBOS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    if (turn == TURNS.X && mode == '/bot') {
        const newBoard = [...board]
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo
            if (newBoard[a] && newBoard[a] === newBoard[b]) {
                play = c
            } else if (newBoard[a] && newBoard[a] === newBoard[c]) {
                play = b
            }
        }

        while (exit) {
            const randomnumber = Math.floor((Math.random() * 9))
            if (board[randomnumber] === null) {



                if (play != false && board[play] === null) {
                    newBoard[play] = turn
                } else {
                    newBoard[randomnumber] = turn
                }

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
