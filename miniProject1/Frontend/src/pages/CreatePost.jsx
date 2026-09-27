import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()


        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
            .then((res) => {

                navigate("/feed")

            })
            .catch((err) => {
                console.log(err)
                alert("Error creating post")
            })


    }
    return (
        <div className='min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans'>
            <section className='w-full max-w-md'>
                <h1 className='text-3xl font-bold text-slate-800 text-center mb-6'>Create post</h1>
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-5">

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Upload Image
                        </label>

                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            required
                            className="w-full border border-slate-300 rounded-lg p-2 
                                       text-sm cursor-pointer
                                       file:bg-blue-500 file:text-white 
                                       file:border-0 file:rounded-md 
                                       file:px-4 file:py-2 
                                       file:mr-4
                                       hover:file:bg-blue-600"
                        />
                    </div>

                    {/* Caption */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Caption
                        </label>

                        <textarea
                            name="caption"
                            placeholder="Write a caption..."
                            required
                            rows="4"
                            className="w-full border border-slate-300 rounded-lg p-3
                                       outline-none resize-none
                                       focus:ring-2 focus:ring-blue-400
                                       focus:border-blue-400"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2.5 rounded-lg
                                   font-medium
                                   hover:bg-blue-600
                                   active:scale-95 transition"
                    >
                        Create Post
                    </button>

                </form>
            </section>
        </div>
    )
}

export default CreatePost