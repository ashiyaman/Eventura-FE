import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import EventListing from "./pages/EventListing"
import EventDetails from "./pages/EventDetails"

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchHandler = (value) => {
        setSearchTerm(value);
    };

    return (
        <Routes>
        <Route path="/" element={<EventListing searchHandler={searchHandler} searchTerm={searchTerm}/>}/>
        <Route path="/details/:eventId" element={<EventDetails searchHandler={searchHandler}/>}/>
        </Routes>
    )

}

export default App