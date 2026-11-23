import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar"
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import IndividualEventPage from "./pages/IndividualEventPage";

function AppRoutes() {
    return(
        <>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<IndividualEventPage />} />

                <Route path = "/*" element={<NotFoundPage/>} />
            </Routes>

        </>
    )
}

export default AppRoutes