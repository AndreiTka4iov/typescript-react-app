import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Card, { CardVatiant } from './components/Card'
import EventsExample from './components/EventsExample'
import List from './components/List'
import TodoItem from './components/TodoItem'
import UserItem from './components/UserItem'
import { ITodo, IUser } from './types/types'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserPage from './components/UserPage'
import TodosPage from './components/TodosPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
              <Route path="/users" element={<UserPage/>}/>
              <Route path="/todos" element={<TodosPage/>}/>
              <Route path="*" element={<div>NotFound</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
