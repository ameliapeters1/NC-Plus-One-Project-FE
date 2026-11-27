import { useAuth } from "../context/AuthContext";
import { useEventsList } from "../hooks/useEventsList";
import AccountEventCard from "./AccountEventCard";


function AccountEvents(){
    const {user}=useAuth()
    const {events, isLoading, error}= useEventsList()

    if (!user) return null
    if (isLoading) return <p>loading events...</p>
    if (error) return <p>{error}</p>

    const organisedEvents = events.filter(
        event => event.organiser_id === user.id
    )

    const totalOrganisedEvents= organisedEvents.length

    return (
        <main className="account-events">
            <h2> your organised events 🗓️</h2>
            <h3>you have {totalOrganisedEvents} upcoming {totalOrganisedEvents === 1 ? "event" : "events"} to organise</h3>
            {totalOrganisedEvents ===0 ? "you haven't organised any events yet, get on it" : 
                totalOrganisedEvents > 3 ? "hope you're organised and ready for all these": "get a bit more main character and organise some more..."}

            {organisedEvents.map(event =>(
                <AccountEventCard key={event.id} event={event}/>
            ))}
        </main>
    )

}

export default AccountEvents