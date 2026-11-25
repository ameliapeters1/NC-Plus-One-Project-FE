export const readUser = (): string | null => {
    try {
        return localStorage.getItem("user")
    } catch {
        return null
    }
}

export const writeUser = (user: string): void => {
    try {
        return localStorage.setItem("user", user)
    } catch {}
}

export const clearUser = (): void => {
    try {
        localStorage.removeItem("user")
    } catch {}
}