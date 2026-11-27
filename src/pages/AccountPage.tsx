import { useAuth } from "../context/AuthContext"
import AccountInfo from "../components/AccountInfo"
import AccountRSVPs from "../components/AccountRSVPs"
import AuthNavigation from "../components/AuthNavigation"
import AccountEvents from "../components/AccountEvents"

function AccountPage(){
    const { user } = useAuth()
    
    return(
    <div className="account-page">
        <h2> it's all about you here 👑</h2>

        {user ? 
            (
                <>
                    <AccountInfo/>
                    <section className="account-events-container">
                        <AccountRSVPs user={user}/>
                        <AccountEvents/>
                    </section>
                    
                </>

            ): (
                <AuthNavigation/>
            )
        }
        
    </div>
    )
}

export default AccountPage