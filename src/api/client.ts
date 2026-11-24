import { writeToken } from "../utils/tokenStorage";

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

  const { token } = await response.json();
  writeToken(token)
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

  await login(email,password)
}
