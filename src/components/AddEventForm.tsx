import { useState } from "react"
import type { NewEvent } from "../types/eventsTypes"
import { addEvent } from "../api/client"
import { useNavigate } from "react-router"
import { validateTimes } from "../utils/validateTimes"
// need to add a backend endpoint to fetch venue info but hardcode for now
const venues = [
    {"id": 1, "name": "Nexus, University of Leeds"}, 
    {"id": 2, "name": "Manchester Central Library"},
    {"id":3,"name": "Online – Zoom"},
    {"id":4, "name": "The Skiff"},
    {"id":5, "name": "Newspeak House"}
]



function AddEventForm(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [venueID, setVenueID] = useState<number>(0)
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const navigate = useNavigate()

    //check for valid time entries pre submitting
    const validateTime = validateTimes(startTime, endTime)

    const allFieldsComplete = (
        title.trim() !== "" &&
        description.trim() !== "" &&
        startTime !== "" &&
        endTime !== "" &&
        venueID !== 0
    )

    const validationError = allFieldsComplete ? validateTime : ""
    const validForm = allFieldsComplete && validationError===""
        

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) =>{
        event.preventDefault()

        if (!validForm){
            setError(validationError || "need all the info")
            return
        }

        setError("")

        const newEvent: NewEvent = {
            title:title, description:description, startsAt: startTime, endsAt:endTime, venueID:venueID
        }

        try{
            setIsSubmitting(true)
            await addEvent(newEvent)
            navigate("/events", {state: {successMessage: "event added!"}})
        } catch (err){
            setError(err instanceof Error ? err.message: "uh oh something went wrong")
        } finally{
            setIsSubmitting(false)
        }

    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1>New event!</h1>
            

            <label htmlFor="title">Title</label>
            <input 
            id="title" 
            type="text" 
            placeholder="Enter title" 
            value={title}
            onChange={(event)=>setTitle(event.target.value)} 
            required/>

            <label htmlFor="description">Description</label>
            <input 
            id="description" 
            type="text" 
            placeholder="Enter description" 
            value={description} 
            onChange={(event)=>setDescription(event.target.value)}
            required/>

            <label htmlFor="start-time">start time</label>
            <input 
            id="start-time" 
            type="datetime-local" 
            value={startTime} 
            onChange={(event)=>setStartTime(event.target.value)}
            required/>
            

            <label htmlFor="end-time">end time</label>
            <input 
            id="end-time" 
            type="datetime-local" 
            value={endTime} 
            min={startTime || undefined}
            onChange={(event)=>setEndTime(event.target.value)}
            required/>

            <label htmlFor="venue">venue</label>
            <select
            id="venue"
            value={venueID}
            onChange={(event)=>setVenueID(Number(event.target.value))}
            required>
                <option value={0}>select a venue</option>
                {venues.map(venue => (
                    <option 
                    key={venue.id} 
                    value={venue.id}>
                        {venue.name}
                    </option>))}

            </select>


            {(validationError || error) && (
                <p className="error">{validationError || error}</p>
            )}
            
            <button type="submit" disabled={!validForm||isSubmitting}>
                {isSubmitting ? "adding event...": "add event"}
                </button>


        </form>
    )
    
}

export default AddEventForm