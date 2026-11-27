import type { User } from "../context/AuthContext"
import { useUserRSVPs } from "../hooks/useUserRSVPs"
import AccountRSVPCard from "./AccountRSVPCard"

interface AccountRSVPsProps{
    user: User
}

function AccountRSVPs({user}:AccountRSVPsProps){
    const { events, isLoading, error } = useUserRSVPs(!!user)

    const totalRSVPs = events[0]?.total_rsvps ?? 0

    return(
        <div className="account-rsvps">
            <h2>your RSVPs 🗓️</h2>
            <h3>you have {totalRSVPs} upcoming {totalRSVPs === 1 ? "event" : "events"} to attend</h3>
            {totalRSVPs ===0 ? "get yourself to some events asap" : 
                totalRSVPs > 3 ? "yes, you said you'd go to all these": "i think you could do more"}
 
            {isLoading ? 
                ( <p>Loading your events...</p> ) : 
                error ? 
                    (<p>{error}</p>) : 
                    events.length === 0 ? 
                        (<p>you haven't RSVPed to any events</p>) : 
                        (events.map(event => (
                            <AccountRSVPCard key={event.id} event={event}/>
                            ))
                        )
            }
        </div>
    )
}

export default AccountRSVPs
