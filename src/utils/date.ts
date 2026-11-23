export function dateFromIsoTime(time:string){
    return new Date(time).toLocaleDateString('en-GB')
}

export function timeFromIsoTime(time:string){
    return new Date(time).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })
}

//2026-06-18T20:30:00+01:00