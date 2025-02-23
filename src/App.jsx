import 'bootstrap/dist/css/bootstrap.min.css' 
import { useState } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from "./components/header"
import EventList from './components/EventList'
import EventListing from './pages/EventListing'
import EventDetails from './pages/EventDetails'

/*const App = () => {
  const [eventType, setEventType] = useState("Both")
  const [searchTerm, setSearchTerm] = useState("")

  const filterEventTypeHandler = (type) => {
    setEventType(type)
  }

  const searchHandler = (value) => {    
    setSearchTerm(value)
  }

  return(
    <div style={{backgroundColor: '#d4d2cc'}}>
      <Header searchHandler={searchHandler}/>
      <hr/>
      <EventList eventType={eventType} filterEventTypeHandler={filterEventTypeHandler} searchTerm={searchTerm}/>
    </div>
  )
}*/

