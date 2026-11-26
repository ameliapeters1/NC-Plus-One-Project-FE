export interface FetchedEvent{
    id: number,
    title: string,
    description:string,
    starts_at: string,
    ends_at:string,
    location: string
    address: string
    capacity: number,
    organiser_id: number
}

export interface NewEvent{
    title:string
    description:string
    startsAt:string
    endsAt:string
    venueID:number
}

export interface EditEvent{
    id: number
    description:string
    startsAt:string
    endsAt:string
}