export function validateTimes(startTime:string, endTime:string){
        if (!startTime || !endTime) {
            return ""
        }

        const start = new Date(startTime)
        const end = new Date(endTime)
        const now = new Date()

        if (start <= now){
            return "event must be in the future"
        }
        if (end <=start){
            return "end must be after start"
        }
        return ""
    }