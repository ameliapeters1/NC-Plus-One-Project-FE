import { useAuth } from "../context/AuthContext"
import AccountInfo from "../components/AccountInfo"
import AccountRSVPs from "../components/AccountRSVPs"
import AuthNavigation from "../components/AuthNavigation"

function AccountPage(){
    const { user } = useAuth()
    
    return(
    <div className="account-page">
        <h2> it's all about you here 👑</h2>

        {user ? 
            (
                <>
                    <AccountInfo/>
                    <AccountRSVPs user={user}/>
                </>

            ): (
                <AuthNavigation/>
            )
        }
        
    </div>
    )
}

export default AccountPage