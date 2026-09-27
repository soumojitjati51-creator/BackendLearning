import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Home from './pages/Home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App