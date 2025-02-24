import { useParams } from "react-router";
import useFetch from "../../useFetch";
import Header from "../components/Header";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EventDetails = ({ searchHandler }) => {
    const { data, loading } = useFetch("https://eventura-be.vercel.app/events");

    const {data: users, loading: userLoading} = useFetch("https://eventura-be.vercel.app/users");
    const { eventId } = useParams();
    const eventData = data?.find(event => event._id === eventId);

    const formatEventDateTime = (dateStr) => {
        const date = new Date(dateStr);
    
        // Format date (e.g., Monday, 10 June 2024)
        const formattedDate = date.toLocaleDateString("en-US", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    
        // Format time (e.g., 09:00 AM - 05:00 PM)
        const formattedTime = `${date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        })}` 
    
        return `${formattedDate} at ${formattedTime}`;
    };
    
    return (
        <div>
            <Header searchHandler={searchHandler} />
            <div className="container my-4" style={{ color: "#5B4B8A" }}>
                {loading && <p>Loading...</p>}
                {!loading && eventData && (
                    <div className="row">
                        <section className="col-md-8 pe-8">
                            <h3 className="fw-semibold my-2">{eventData.title}</h3>
                            <p className="mb-0 mt-2">Hosted By: </p>
                            <p className="fw-semibold" style={{ color: "#00C2CB" }}>{eventData.host}</p>
                            <img src={eventData.images[0]} style={{ maxWidth: "80%" }} className="img-fluid rounded" alt="Event" />
                            <h4 className="fw-semibold my-4">Details:</h4>
                            <p>{eventData.description}</p>
                            <h4 className="fw-semibold my-4">Additional Information:</h4>
                            {eventData.dressCode && <p><strong>Dress Code:</strong> {eventData.dressCode}</p>}
                            {eventData.requiredAge && <p><strong>Age Restrictions:</strong> {eventData.requiredAge}</p>}
                            <h4 className="fw-semibold my-4">Event Tags:</h4>
                            <div className="d-flex">
                                {eventData.tags.map(tag => (
                                    <div className="btn mx-1 text-white" style={{ backgroundColor: "#00C2CB" }} key={tag}>{tag}</div>
                                ))}
                            </div>
                        </section>
                        <section className="col-md-4 ps-4">
                            <section className="rounded my-2 p-3 border text-white" style={{ backgroundColor: "#00C2CB" }}>
                                <div className="my-2 d-flex align-items-center fs-6">
                                    <p><FaCalendarAlt className="me-2" /></p>
                                    <div>
                                        <p className="mb-0"> {formatEventDateTime(eventData.sessionStart)}</p>
                                        <p>{formatEventDateTime(eventData.sessionEnd)}</p>
                                    </div>
                                </div>
                                <div className="my-2 d-flex align-items-center">
                                    <p><FaMapMarkerAlt className="me-2" /></p>
                                    <div>
                                        {eventData.eventType === "Offline" ? 
                                            (<>
                                                <p className="mb-0"> {eventData.venue.city}</p>
                                                <p>{eventData.venue.name}, {eventData.venue.address}</p>
                                            </>
                                            ) :
                                            (<p>{eventData.venue.name}</p>)
                                        }
                                    </div>
                                </div>
                                <p className="fw-bold">₹ {eventData.isPaid ? `${eventData.price}` : `Free`}</p>
                            </section>
                            <section className="my-4">
                                <h4>Speakers: ({eventData.presenters.length})</h4>
                                {eventData?.presenters?.map(presenter => {
                                    const speaker = users?.find(user => user._id == presenter)
                                    return (
                                        <div className="card p-2 my-2 d-flex align-items-center text-center shadow-sm" key={presenter._id}>
                                            {speaker?.profileImg && <img 
                                                src={`../../${speaker.profileImg}`}
                                                alt={speaker.name} 
                                                className="img-fluid rounded-circle border border-2 shadow-lg" 
                                                style={{ width: "80px", height: "80px", objectFit: "cover" }} 
                                            />}
                                            <h5 className="mt-2">{speaker.name}</h5>
                                            <p className="text-muted">{speaker.designation}</p>
                                        </div>  
                                    )
                                })}
                            </section>
                            <button className="btn text-white fw-bold align-self-center" style={{ backgroundColor: "#00C2CB" }}>RSVP</button>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventDetails;
