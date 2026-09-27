import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: "https://ik.imagekit.io/soumojitdev/image_wLVmpTGgv.jpg",
            caption: "test_caption"
        },
        {
            _id: '2',
            image: "https://ik.imagekit.io/soumojitdev/image_Gqdyk_Wxz.jpg",
            caption: "test_caption2"
        }
    ])

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            setPosts(res.data.posts)
            
        })
        // axios.get('http://localhost:3000/posts')
        // .then((res) => {
        //     console.log("FULL RESPONSE:", res.data)
        //     console.log("POSTS:", res.data.posts)

        //     res.data.posts.forEach((post) => {
        //         console.log("IMAGE URL:", post.image)
        //     })

        //     setPosts(res.data.posts)
        // })
        // .catch((err) => {
        //     console.log("ERROR:", err)
        // })
    },[])

    const handleDelete = async (id) => {
        try {

            const res = await axios.delete(
                `http://localhost:3000/posts/${id}`
            )

            console.log(res.data)

            // Remove deleted post from UI
            setPosts(posts.filter(post => post._id !== id))

        } catch (error) {
            console.error(error)
            alert("Failed to delete post")
        }
    }

    return (
        <div className='min-h-screen bg-slate-400 flex items-center justify-center p-4 font-sans'>
            <section className='w-full max-w-md flex flex-col items-center '>
                <div className='text-3xl font-bold text-slate-800 text-center mb-2'>
                    Your Feed
                </div>
                <div className='px-2'>
                    {
                        posts.length > 0 ? (
                            posts.map((post) => (
                                <div key={post._id} className='w-full max-w-[200px] p-2 rounded-2xl bg-gray-200 mb-4
               overflow-hidden shadow-md shadow-slate-600
               hover:scale-[1.02] transition-transform
               hover:text-gray-900 hover:text-lg hover:font-bold hover:bg-blue-300 
               hover:shadow-lg md:max-w-[300px] lg:max-w-[400px]'>
                                    <img src={post.image} alt={post.caption} onLoad={() => console.log("IMAGE LOADED:", post.image)} onError={(e) => {
        console.log("IMAGE FAILED:", post.image)
        console.log("ACTUAL SRC:", e.currentTarget.src)
    }} className='aspect-[4/5] object-cover w-full  rounded' />
                                    <div className='px-3'>
                                        <p>{post.caption}</p>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            className='bg-red-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-red-600'
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )
                            )
                        ) : (
                            <h1>No posts available</h1>
                        )
                    }
                </div>
            </section>
        </div>
    )
}

export default Feed

