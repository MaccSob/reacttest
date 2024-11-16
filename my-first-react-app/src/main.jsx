import React from 'react'
import ReactDOM from 'react-dom/client'
import Images from './Images.jsx'
import Favorite from './Favorites.jsx'
import Greeting from './Greeting.jsx'
import Avatar from './Avatar.jsx'
import Bio from './Bio.jsx'
import Condition from './Condition.jsx'
import Drink from './Drink.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bio></Bio>
    <Greeting />
    <Favorite></Favorite>
    <Images></Images>
    <Avatar></Avatar>
    <Condition></Condition>
    <Drink></Drink>
    <App></App>
  </React.StrictMode>,
)
