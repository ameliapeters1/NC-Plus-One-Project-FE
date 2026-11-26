import { NavLink } from "react-router"
import { useAuth } from "../context/AuthContext"
import { clearToken } from "../utils/tokenStorage"
import { useUserRSVPs } from "../hooks/useUserRSVPs"
import { dateFromIsoTime, timeFromIsoTime } from "../utils/dateConversion"

function AccountPage(){
    const { user, setAuth } = useAuth()
    const { events, isLoading, error } = useUserRSVPs(!!user)

    function handleLogout(){
        setAuth(null)
        clearToken()
    }
    
    return(
    <div className="account-page">
        <h2> Account info</h2>

        {user ? 
            (
                <>
                <div className="account-info">
                    <p>hello {user.name.split(" ")[0]}</p>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
                    
                <div className="account-rsvps">
                    <h3>Your RSVPs</h3>
                    <h3>You have {events[0]?.total_rsvps ?? 0} upcoming events</h3>
                    {isLoading ? 
                        ( <p>Loading your events...</p> ) : 
                        error ? 
                            (<p>{error}</p>) : 
                            events.length === 0 ? 
                                (<p>you haven't RSVPed to any events</p>) : 
                                (events.map(event => (
                                   
                                    <div key={event.id} className="account-rsvp-card">
                                        <h2>{event.title}</h2>
                                        <p>Date: {dateFromIsoTime(event.starts_at)}</p>
                                        <p>time: {timeFromIsoTime(event.starts_at)}</p>
                                        <p>rsvp date: {timeFromIsoTime(event.rsvp_date)}</p>
                                    </div>
                                    ))
                                )
                    }
                </div>
              
                </>

            ): (
                <nav className="auth-nav">
                    <NavLink 
                    to="/login" 
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Login    
                    </NavLink>

                    <NavLink 
                    to="/register" 
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Register    
                    </NavLink>
                </nav>
            )
            }
        
    </div>
    )
}

export default AccountPage