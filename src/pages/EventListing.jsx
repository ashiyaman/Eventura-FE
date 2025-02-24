import { useState } from "react";
import { FaFilter } from "react-icons/fa6";

import Header from "../components/Header";
import EventList from "../components/EventList";

const EventListing = ({searchHandler, searchTerm}) => {
    const [eventType, setEventType] = useState("Both");
    
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const filterEventTypeHandler = (type) => {
        setEventType(type);
    };

    

    return (
        <div>
            <Header searchHandler={searchHandler} />
            <main className="container">
                <div className="d-flex justify-content-between align-items-center py-1">
                    <h2 className="fw-semibold" style={{ color: "#5B4B8A" }}>Event List</h2>
                    {!showFilter && <button 
                        onClick={toggleFilter} 
                        className="btn text-white shadow-normal position-relative" 
                        style={{ backgroundColor: "#5B4B8A" }}
                    >
                        <FaFilter className="fs-6" />
                    </button>}
                
                {showFilter && (
                    <div className="position-absolute" style={{right: "7%", maxWidth: "50%"}}>
                        <select
                            onChange={(e) => filterEventTypeHandler(e.target.value)}
                            className="form-select fw-semibold border shadow-lg text-white"
                            style={{ backgroundColor: "#00C2CB"}}
                        >
                            <option>Event Type</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Both">Both</option>
                        </select>
                    </div>
                )}
                </div>
            </main>
            <EventList eventType={eventType} filterEventTypeHandler={filterEventTypeHandler} searchTerm={searchTerm} />
        </div>
    );
};

export default EventListing;
