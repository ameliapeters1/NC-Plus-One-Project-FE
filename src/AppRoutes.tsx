import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar"
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";

function AppRoutes() {
    return(
        <>
            <NavigationBar/>
            <Routes>
                <Route index element={<HomePage />} />
            </Routes>
            <Routes>
                <Route path="/events" element={<EventsPage />} />
            </Routes>
        </>
    )
}

export default AppRoutes