import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
const EditItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:3000/items/${id}`)
            .then((res) => {
                setItem(res.data.item);
            })
            .catch((error) => {
                console.error(error);

            })
    }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            type: e.target.type.value,
            itemName: e.target.itemName.value,
            category: e.target.category.value,
            description: e.target.description.value,
            location: e.target.location.value,
            date: e.target.date.value,
            status: e.target.status.value
        };

        console.log("UPDATING:", data);

        try {
            const res = await axios.put(
                `http://localhost:3000/items/${id}`,
                data
            );

            console.log("UPDATE RESPONSE:", res.data);

            navigate(`/items/${id}`);

        } catch (error) {
            console.error("UPDATE ERROR:", error);
            alert("Error updating item");
        }
    };
    if (!item) {
        return (
            <div className="min-h-screen bg-slate-400 flex items-center justify-center">
                <h2 className="text-xl font-semibold text-slate-700">
                    Loading...
                </h2>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-slate-400 flex justify-center p-4">

            <div className="w-full max-w-2xl rounded-2xl bg-gray-200 p-6 shadow-lg shadow-slate-600">

                <h1 className="text-3xl font-bold text-slate-800 text-center mb-6">
                    Edit Item
                </h1>


                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >

                    {/* Item Type */}
                    <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                            Item Type
                        </label>

                        <div className="flex gap-4">

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="type"
                                    value="lost"
                                    defaultChecked={item.type === "lost"}
                                />
                                <span>Lost</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="type"
                                    value="found"
                                    defaultChecked={item.type === "found"}
                                />
                                <span>Found</span>
                            </label>

                        </div>

                    </div>


                    {/* Item Name */}
                    <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                            Item Name
                        </label>

                        <input
                            type="text"
                            name="itemName"
                            defaultValue={item.itemName}
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                        />

                    </div>


                    {/* Category */}
                    <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                            Category
                        </label>

                        <select
                            name="category"
                            defaultValue={item.category}
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                        >

                            <option value="electronics">
                                Electronics
                            </option>

                            <option value="documents">
                                Documents / ID
                            </option>

                            <option value="bags">
                                Bags
                            </option>

                            <option value="books">
                                Books
                            </option>

                            <option value="clothing">
                                Clothing
                            </option>

                            <option value="accessories">
                                Accessories
                            </option>

                            <option value="keys">
                                Keys
                            </option>

                            <option value="other">
                                Other
                            </option>

                        </select>

                    </div>


                    {/* Description */}
                    <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                            Description
                        </label>

                        <textarea
                            name="description"
                            rows="4"
                            defaultValue={item.description}
                            className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                        ></textarea>

                    </div>


                    {/* Location */}
                    <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            defaultValue={item.location}
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                        />

                    </div>


                    {/* Date */}
                    <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                            Date
                        </label>

                        <input
                            type="date"
                            name="date"
                            defaultValue={
                                new Date(item.date)
                                    .toISOString()
                                    .split("T")[0]
                            }
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                        />

                    </div>


                    {/* Status */}
                    <div>

                        <label className="block mb-2 font-semibold text-slate-700">
                            Status
                        </label>

                        <select
                            name="status"
                            defaultValue={item.status}
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
                        >

                            <option value="active">
                                Active
                            </option>

                            <option value="resolved">
                                Resolved
                            </option>

                        </select>

                    </div>


                    {/* Buttons */}
                    <div className="flex gap-3 mt-2">

                        <button
                            type="submit"
                            className="flex-1 rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
                        >
                            Save Changes
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate(`/items/${id}`)}
                            className="flex-1 rounded-md bg-slate-500 px-4 py-3 font-semibold text-white transition hover:bg-slate-600"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditItem