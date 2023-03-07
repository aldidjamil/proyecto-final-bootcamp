import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AboutUs from "../pages/AboutUs/AboutUs"
import Events from "../pages/Events/Events"
import Products from "../pages/Products/Products"
import Recipes from "../pages/Recipes/Recipes"
import AboutTempeh from "../pages/AboutTempeh/AboutTempeh"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutTempeh" element={<AboutTempeh />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Recipes" element={<Recipes />} />
            {/* <Route path="/SignUp" element={<SignupPage />} />
            <Route path="/Login" element={<LoginPage />} /> */}
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes