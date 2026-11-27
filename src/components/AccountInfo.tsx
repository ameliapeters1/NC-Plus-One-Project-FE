import { useAuth } from "../context/AuthContext"
import { clearToken } from "../utils/tokenStorage"

function AccountInfo(){
    const {user, setAuth} = useAuth()

    function handleLogout(){
        setAuth(null)
        clearToken()
    }

    if (!user) return null
        
    return(
    <div className="account-info">
        <p>hello {user.name.split(" ")[0].toLowerCase()}</p>
        <p>welcome back to your page to see everything you have coming up</p>
        <button className="logout-btn" onClick={handleLogout}>logout if you really have to</button>
    </div>
    )                  
}

export default AccountInfo