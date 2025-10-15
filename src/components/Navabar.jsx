import React from 'react'
import { Link } from 'react-router-dom'

function Navabar() {
    return (
        <nav className="bg-gray-800 py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-300">SALMAN</h1>
            <div>
                <Link to="/" className="hover:text-yellow-200 text-blue-300">Home</Link>
            </div>
        </nav>
    )
}

export default Navabar