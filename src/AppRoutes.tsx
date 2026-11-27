import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar"
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import IndividualEventPage from "./pages/IndividualEventPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import AddEventPage from "./pages/AddEventPage";
import EditEventPage from "./pages/EditEventPage";
import AttendeeInfoPage from "./pages/AttendeeInfoPage";

function AppRoutes() {
    return(
        <>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<IndividualEventPage />} />
                <Route path="/events/new" element={<AddEventPage/>}/>
                <Route path="/events/:id/edit" element={<EditEventPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/account" element={<AccountPage/>}/>
                <Route path="/:id/attendees" element={<AttendeeInfoPage/>}/>

                <Route path = "/*" element={<NotFoundPage/>} />
            </Routes>

        </>
    )
}

export default AppRoutes