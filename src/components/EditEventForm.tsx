import { useState } from "react"
import { editEvent } from "../api/client"
import { validateTimes } from "../utils/validateTimes"
import type { EditEvent, FetchedEvent } from "../types/eventsTypes"
import { toDateTimeLocal } from "../utils/dateConversion"
import { useNavigate } from "react-router"

interface EditEventFormProps{
    event: FetchedEvent
}

function EditEventForm({event}:EditEventFormProps){
    const navigate = useNavigate()
    const {id, title, description, starts_at, ends_at, location } = event

    const [eventDescription, setEventDescription] = useState(description)
    const [startTime, setStartTime] = useState(toDateTimeLocal(starts_at))
    const [endTime, setEndTime] = useState(toDateTimeLocal(ends_at))
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validationError = validateTimes(startTime, endTime)

    const handleSubmit = async (event:React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (validationError){
            setError(validationError)
            return
        }

        setError("")
        setIsSubmitting(true)

        const editedEvent: EditEvent = {
            id: id,
            description: eventDescription,
            startsAt: new Date(startTime).toISOString(),
            endsAt:new Date(endTime).toISOString()
        }

        try {
            await editEvent(editedEvent)
            navigate(`/events/${id}`)
        } catch (err) {
            setError(err instanceof Error ? err.message:"something bad happened")
        } finally {
            setIsSubmitting(false)
        }
    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>edit event!</h2>

            <label htmlFor="title">Title</label>
            <input
            id="title"
            type="text"
            value={title}
            className="readonly-field"
            readOnly/>
        
            <label htmlFor="description">Description</label>
            <input 
            id="description" 
            type="text" 
            placeholder="Enter description" 
            value={eventDescription} 
            onChange={(event)=>setEventDescription(event.target.value)}
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

            <label htmlFor="venue">Venue</label>
            <input
            id="venue"
            type="text"
            value={location}
            className="readonly-field"
            readOnly/>

            {(validationError || error) && (
                <p className="error">{validationError || error}</p>
            )}
            
            <button type="submit" disabled={!!validationError||isSubmitting}>
                {isSubmitting ? "editing...": "edit event"}
            </button>


        </form>
    )
}

export default EditEventForm