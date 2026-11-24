export const readToken = (): string | null => {
    try {
        return localStorage.getItem("user.token")
    } catch {
        return null
    }
}

export const writeToken = (token: string): void => {
    try {
        return localStorage.setItem("user.token", token)
    } catch {}
}

export const clearToken = (): void => {
    try {
        localStorage.removeItem("user.token")
    } catch {}
}