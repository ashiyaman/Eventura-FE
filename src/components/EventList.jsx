import useFetch from "../../useFetch";

const EventList = ({ eventType, searchTerm }) => {
    const { data, loading } = useFetch("https://eventura-be.vercel.app/events");

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
            {loading && <p className="text-center text-dark fw-bold">Loading...</p>}
            {!loading && events?.length > 0 ? (
                <div className="row">
                    {events.map((event, index) => (
                        <div key={index} className="col-md-4 my-2">
                            <div className="card border shadow-lg" 
                                style={{ backgroundColor: "#EEE5FF", 
                                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)"}}>
                                <img
                                    src={event.images[0]}
                                    alt={event.title}
                                    className="card-img-top img-fluid"
                                    style={{ height: "180px"}}
                                />
                                <div className="card-body text-white rounded-bottom" style={{ backgroundColor: "#5B4B8A"}}>
                                    <div className="fw-light fs-6">{event.date}</div>
                                    <h5 className="card-title">{event.title}</h5>
                                </div>
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
