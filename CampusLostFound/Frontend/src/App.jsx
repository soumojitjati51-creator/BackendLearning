import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Items from "./pages/Items";
import CreateItem from './pages/CreateItem';
import ItemDetails from './pages/ItemDetails';
import EditItem from './pages/EditItem';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/create-item" element={<CreateItem/>}/>
        <Route path="/items/:id" element={<ItemDetails/>}/>
        <Route path="/edit-item/:id" element={<EditItem/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;