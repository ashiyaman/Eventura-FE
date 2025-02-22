const EventList = ({events, loading}) => {
    return(
        <div className="container"> 
            {loading && (<p>Loading...</p>)}
            <h2 style={{color: '#2e4042'}}>Event List</h2>
            {!loading && events ? 
                (
                    <div className="row">
                        {events.map(event => (
                            <div className="col-md-4 text-center my-1">
                                <div className="card">
                                    <img src={event.images[0]} alt={event.title} style={{maxHeight: '150px', minWidth: '100%'}}/>
                                    <div className="card-body" style={{backgroundColor: '#2e4042', color: '#fff'}}>
                                        <div className="card-text">{event.date}</div>
                                        <div className="card-title"><strong>{event.title}</strong></div>
                                    </div>
                                </div>
                            </div>
                        ))}                        
                    </div>
                ) : 
                (<p>No Events found.</p>)}
        </div>
    )
}

export default EventList