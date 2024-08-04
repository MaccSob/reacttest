import React from 'react'
import ReactDOM from 'react-dom/client'
import Images from './Images.jsx'
import Favorite from './Favorites.jsx'
import Greeting from './Greeting.jsx'
import Avatar from './Avatar.jsx'
import Bio from './Bio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bio></Bio>
    <Greeting />
    <Favorite></Favorite>
    <Images></Images>
    <Avatar></Avatar>
  </React.StrictMode>,
)
