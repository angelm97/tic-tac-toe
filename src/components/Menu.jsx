import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom"

const Menu = () => {
    const nav = new useNavigate();

    return (
        <div className='menu'>
            <h1>Tic tac toe.</h1>
            <button onClick={() => {
                nav('/bot')
            }}>
                Play with bot
            </button>
            <button onClick={() => {
                nav('/local')
            }}>
                2 Players
            </button>
    
            
        </div>
    )
}

export default Menu