import React from 'react'

const BotGamer = (turn, TURNS, board, setBoard, checkWinnerFrom, checkEndGame, setTurn, saveGameToStorage, setWinner) => {
    
    const [exit, setExit] = useState(true)

    if (turn == TURNS.X) {
        while (exit) {
            const randomnumber = Math.floor((Math.random() * 9))
            console.log(99);

            if (board[randomnumber] === null) {
                console.log('jugo');
                console.log('board', board);
                console.log('turn', turn);
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
                setExit(false)
            }

            if (board.every((square) => square !== null)) {
                setExit(false)
            }


        }
    }


}

export default BotGamer
