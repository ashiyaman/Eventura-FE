import 'bootstrap/dist/css/bootstrap.min.css' 
import { useState } from "react"

import useFetch from '../useFetch'
import Header from "./components/header"
import EventList from './components/EventList'

const App = () => {
  const [eventType, setEventType] = useState("Both")

  const {data, loading} = eventType === "Both" ?
                            useFetch('https://eventura-be.vercel.app/events') :
                            useFetch(`https://eventura-be.vercel.app/events/type/${eventType}`)

  const filterEventTypeHandler = (type) => {
    setEventType(type)
  }

  const searchHandler = () => {
    console.log("...in search");
  }

  return(
    <div style={{backgroundColor: '#d4d2cc'}}>
      <Header filterEventTypeHandler={filterEventTypeHandler} searchHandler={searchHandler}/>
      <hr/>
      <EventList events={data} loading={loading}/>
    </div>
  )
}

export default App