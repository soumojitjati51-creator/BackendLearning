import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 border-b border-slate-400 bg-sky-300'>
            {/* Logo + Name */}
            <Link
                to="/"
                className="flex items-center gap-2"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-xl shadow-md">
                    📍
                </div>

                <span className="text-xl font-bold text-slate-800">
                    Campus<span className="text-indigo-600">Find</span>
                </span>
            </Link>

            <div className="flex justify-between items-center gap-8 ">
                <Link
                    to="/"
                    className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
                >
                    Home
                </Link>

                <Link
                    to="/items"
                    className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
                >
                    Lost & Found
                </Link>
                <Link
                    to="/about"
                    className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
                >
                    Contact us
                </Link>

            </div>
        </nav>
    )
}

export default Navbar