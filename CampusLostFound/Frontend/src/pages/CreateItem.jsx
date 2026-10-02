import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateItem = () => {
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    console.log("FORM DATA:");

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }
    try {
            const res = await axios.post(
                "http://localhost:3000/items",
                formData
            );

            console.log(res.data);

            navigate("/items");

        } catch (err) {
            console.log(err);
            alert("Error creating item");
        }
  }
  return (
    <div className='min-h-screen bg-slate-400 flex justify-center p-4'>
      <div className="w-full max-w-2xl rounded-2xl bg-gray-200 p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 text-center mb-2">
          Report An Item
        </h1>
        <p className="text-center text-slate-600 mb-6">help your campus community to find lost and found items </p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className='block mb-2 font-semibold text-slate-700'>
              Item type
            </label>
            <div className='flex gap-4'>
              <label className="flex items-center gap-2"><input type="radio" name="type" value="lost"  /><span>Lost</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="type" value="found" /><span>Found</span></label>
            </div>

          </div>
          <div>
            <label className='block mb-2 font-semibold text-slate-700'>
              Item Name
            </label>
            <input type='text' name="itemName" placeholder='e.g. Black Wallet' className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500" />

          </div>
          <div>
            <label className='block mb-2 font-semibold text-slate-700'>
              Category
            </label>
            <select className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500" name="category" defaultValue="">
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="documents">Documents</option>
              <option value="bags">Bags</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
              <option value="keys">Keys</option>
              <option value="other">Other</option>

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
              placeholder="Describe the item..."
              className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <div>
            <label className='block mb-2 font-semibold text-slate-700'>
              Location
            </label>
            <input type='text'name="location" placeholder='e.g. Library' className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500" />

          </div>
          {/* Date */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Date
            </label>

            <input
              type="date" name="date"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500"
            />
          </div>
          {/* Image */}
          <div>
            <label className="block mb-2 font-semibold text-slate-700">
              Upload Image
            </label>

            <input
              type="file"
              name='image'
              accept="image/*"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="mt-2 rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01]"
          >
            Report Item
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateItem