import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
const ItemDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/items/${id}`)
            .then((res) => {
                setItem(res.data.item)

            })
            .catch((error) => {
                console.error(error);

            })
    }, [id]);
    const handleDelete = async () => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );

        if (!confirmed) {
            return;
        }

        try {

            const res = await axios.delete(
                `http://localhost:3000/items/${id}`
            );

            console.log(res.data);

            navigate("/items");

        } catch (error) {

            console.error(error);
            alert("Error deleting item");

        }
    };
    if (!item) {
        return (
            <div className="min-h-screen bg-slate-400 flex items-center justify-center">
                <h2 className="text-xl font-semibold text-slate-700">
                    Loading...
                </h2>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-slate-400 p-4">

            <div className="mx-auto max-w-3xl">

                <div className="overflow-hidden rounded-2xl bg-gray-200 shadow-lg shadow-slate-600">

                    <img
                        src={item.image}
                        alt={item.itemName}
                        className="h-80 w-full object-cover"
                    />

                    <div className="p-6">

                        <div className="flex items-start justify-between gap-4">

                            <h1 className="text-3xl font-bold text-slate-800">
                                {item.itemName}
                            </h1>

                            <span
                                className={`
                                    rounded-full
                                    px-3
                                    py-1
                                    text-sm
                                    font-bold
                                    ${item.type === "lost"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-green-100 text-green-600"
                                    }
                                `}
                            >
                                {item.type.toUpperCase()}
                            </span>

                        </div>

                        <div className="mt-6 space-y-3">

                            <p className="text-slate-700">
                                <span className="font-bold">
                                    Description:
                                </span>{" "}
                                {item.description}
                            </p>

                            <p className="text-slate-700">
                                <span className="font-bold">
                                    Category:
                                </span>{" "}
                                {item.category}
                            </p>

                            <p className="text-slate-700">
                                <span className="font-bold">
                                    Location:
                                </span>{" "}
                                {item.location}
                            </p>

                            <p className="text-slate-700">
                                <span className="font-bold">
                                    Date:
                                </span>{" "}
                                {new Date(item.date).toLocaleDateString()}
                            </p>

                            <p className="text-slate-700">
                                <span className="font-bold">
                                    Status:
                                </span>{" "}
                                {item.status}
                            </p>

                        </div>

                        <div className="mt-6 flex gap-3">

                            <Link
                                to={`/edit-item/${item._id}`}
                                className="rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
                            >
                                Edit Item
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 hover:cursor-pointer active:scale-95"
                            >
                                Delete Item
                            </button>
                            <Link
                                to="/items"
                                className="rounded-md bg-slate-500 px-4 py-2 font-semibold text-white hover:bg-slate-600"
                            >
                                Back to Items
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ItemDetails