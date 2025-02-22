import 'bootstrap/dist/css/bootstrap.min.css' 
import { useState } from "react"

import Header from "./components/header"
import EventList from './components/EventList'

const App = () => {
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
      <Header filterEventTypeHandler={filterEventTypeHandler} searchHandler={searchHandler}/>
      <hr/>
      <EventList eventType={eventType} searchTerm={searchTerm}/>
    </div>
  )
}

export default App