import useFetch from "../../useFetch";
import {Link} from "react-router-dom"

const EventList = ({ eventType, searchTerm }) => {
    const { data, loading } = useFetch("https://eventura-be.vercel.app/events");
    console.log(loading)

    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        const options = ({
            weekday: "short",  
            year: "numeric",   
            month: "short",    
            day: "2-digit",    
            hour: "2-digit",   
            minute: "2-digit", 
            second: "2-digit", 
            hour12: true,      
            timeZoneName: "short",
        })
        return date.toLocaleDateString("en-IN", options)
    }

    const events =
        data && searchTerm
            ? data.filter((eventData) => {
                  return (
                      eventData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      eventData.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                  );
              })
            : eventType !== "Both"
            ? data?.filter((eventData) => eventData.eventType === eventType)
            : data;

    return (
        <div className="container py-4">
            {loading ? (
                <p className="text-center text-dark fw-bold">Loading...</p>
            ) : events?.length > 0 ? (
                <div className="row">
                    {events.map((event, index) => (
                        <div key={index} className="col-md-4 my-2">
                            <div
                                className="card border shadow-lg cursor-pointer position-relative"
                                style={{
                                    backgroundColor: "#EEE5FF",
                                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
                                }}
                            >
                                <Link to={`/details/${event._id}`}>
                                    <img
                                        src={event.images?.[0] || "/fallback.jpg"}
                                        alt={event.title}
                                        className="card-img-top img-fluid"
                                        style={{ height: "180px", objectFit: "cover" }}
                                    />
                                    <span className="badge position-absolute m-2 end-0 p-2"
                                        style={{ backgroundColor: "#00C2CB" }} >{event.eventType}</span>
                                    <div
                                        className="card-body text-white rounded-bottom"
                                        style={{ backgroundColor: "#5B4B8A" }}
                                    >
                                        <div className="fw-light fs-6">{formatDate(event.date)}</div>
                                        <h5 className="card-title">{event.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-danger fw-bold mt-3">No Events Found.</p>
            )}
        </div>
    );
};

export default EventList;
