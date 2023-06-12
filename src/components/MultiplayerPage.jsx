import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    return (
        <div className='menu'>
            <input type="text" name=""  placeholder='Type your name' id="" />
            <button>Login</button>
        </div>
    )
}

const ShowRooms = () => {
    return (
        <div className='menu'>
            <h1>Rooms.</h1>
            <button onClick={() => {
                nav('/')
            }}>
                Play with bot
            </button>
            <button onClick={() => {
                nav('/')
            }}>
                2 Players
            </button>
            <button onClick={() => {
                nav('/')
            }}>
                Multiplayer
            </button>
        </div>
    )
}

const MultiplayerPage = () => {
    const nav = useNavigate();


    return (

        <div>

            <ShowRooms></ShowRooms>
            <Login></Login>

        </div>

    )
}

export default MultiplayerPage
