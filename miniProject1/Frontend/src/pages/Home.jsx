import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
                Welcome
            </h1>

            <p className="text-slate-600 mb-8">
                What would you like to do?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/create-post"
                    className="px-6 py-3 rounded-lg bg-blue-500 text-white text-center
                               hover:bg-blue-600 transition-colors"
                >
                    Create Post
                </Link>

                <Link
                    to="/feed"
                    className="px-6 py-3 rounded-lg bg-slate-700 text-white text-center
                               hover:bg-slate-800 transition-colors"
                >
                    View Feed
                </Link>
            </div>
        </div>
    )
}

export default Home