import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import PlayVedio from './PlayVedio'

function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<PlayVedio/>}/>
        
    </Routes>
  )
}

export default MyRoutes