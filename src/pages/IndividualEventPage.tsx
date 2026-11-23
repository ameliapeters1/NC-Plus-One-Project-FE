import { useParams } from "react-router"

function IndividualEventPage() {
    const {id} = useParams()

    return(
        <div>
            <p> 
                EVENT INFO PENDING
            </p>
            <p> event ID: {id}</p>
        </div>
    )
}

export default IndividualEventPage