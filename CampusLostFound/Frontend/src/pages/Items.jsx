import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Items = () => {
    const [items, setItems] = useState([]);

    
    useEffect(() => {
        axios
            .get("http://localhost:3000/items")
            .then((res) => {
                setItems(res.data.items);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-slate-400 p-4 font-sans">

            <section className="mx-auto w-full max-w-7xl">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Campus Lost & Found
                    </h1>

                    <p className="mt-2 text-slate-700">
                        Browse recently reported lost and found items
                    </p>
                </div>


                {/* Items */}
                {items.length > 0 ? (

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {items.map((item) => (

                            <div
                                key={item._id}
                                className="
                                    overflow-hidden
                                    rounded-2xl
                                    bg-gray-200
                                    shadow-md
                                    shadow-slate-600
                                    transition-transform
                                    hover:scale-[1.02]
                                    hover:shadow-lg
                                "
                            >

                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.itemName}
                                    className="aspect-[4/5] w-full rounded object-cover"
                                />


                                {/* Item Information */}
                                <div className="p-4">

                                    <div className="flex items-start justify-between gap-2">

                                        <h2 className="text-lg font-bold text-slate-800">
                                            {item.itemName}
                                        </h2>

                                        <span
                                            className={`
                                                rounded-full
                                                px-2
                                                py-1
                                                text-xs
                                                font-bold
                                                ${
                                                    item.type === "lost"
                                                        ? "bg-red-100 text-red-600"
                                                        : "bg-green-100 text-green-600"
                                                }
                                            `}
                                        >
                                            {item.type.toUpperCase()}
                                        </span>

                                    </div>


                                    <p className="mt-2 text-sm text-slate-600">
                                        {item.description}
                                    </p>

                                    <p className="mt-3 text-sm text-slate-600">
                                        📍 {item.location}
                                    </p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        📅 {new Date(item.date).toLocaleDateString()}
                                    </p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        🏷️ {item.category}
                                    </p>


                                    {/* Button */}
                                    <Link
                                        to={`/items/${item._id}`}
                                        className="
                                            mt-4
                                            block
                                            rounded-md
                                            bg-indigo-600
                                            px-3
                                            py-2
                                            text-center
                                            font-semibold
                                            text-white
                                            transition
                                            hover:bg-indigo-700
                                        "
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="flex min-h-[300px] items-center justify-center">
                        <h2 className="text-xl font-semibold text-slate-700">
                            No items available
                        </h2>
                    </div>

                )}

            </section>

        </div>
    );
};

export default Items;