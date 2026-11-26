import type { EditEvent, NewEvent } from "../types/eventsTypes";
import { readToken, writeToken } from "../utils/tokenStorage";

export async function login(email: string, password: string) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 401) {
    throw new Error("Invalid email or password");
  }
  if (!response.ok) throw new Error("Unable to log in, please try again");

  const data = await response.json();
  writeToken(data.token)

  return data.user
}

export async function register(name:string, email: string, password: string) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    },
  );

  if (response.status === 409) {
    throw new Error("That email is already registered");
  }
  if (!response.ok) throw new Error("Unable to sign up, please try again");

  return await login(email,password)
}

export async function addEvent(event: NewEvent) {
  const token = readToken()
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/events`,
    {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" ,
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title:event.title, 
        description: event.description, 
        starts_at: event.startsAt, 
        ends_at: event.endsAt, 
        venue_id: event.venueID}),
    },
  );

  if (!response.ok) throw new Error("Unable to add event please try again");

}

export async function editEvent(event: EditEvent) {
  const token = readToken()
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/events/${event.id}`,
    {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json" ,
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        description: event.description,
        starts_at: event.startsAt,
        ends_at: event.endsAt
      }),
    },
  );

  if (!response.ok) throw new Error("Unable to edit event, please try again");

}

export async function getUserRSVPs() {
  const token = readToken()

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/user/me/events`,
    {
      method: "GET",
      headers: { 
        "Content-Type": "application/json" ,
        "Authorization": `Bearer ${token}`
      },
    },
  );

  if (!response.ok) throw new Error("Unable to fetch your RSVP, please try again");

  const data = await response.json()
  return data.events
}