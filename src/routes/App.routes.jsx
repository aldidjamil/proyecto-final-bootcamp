import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AboutUs from "../pages/AboutUs/AboutUs"
import Events from "../pages/Events/Events"
import Products from "../pages/Products/Products"
import Recipes from "../pages/Recipes/Recipes"
import AboutTempeh from "../pages/AboutTempeh/AboutTempeh"
import NewProductPage from "../pages/NewProductPage/NewProductPage"
import EditProductForm from "../components/EditProductForm/EditProductForm"
import EditRecipeForm from "../components/EditRecipeForm/EditRecipeForm"
import SingleProductCard from "../components/SingleProductCard/SingleProductCard"
import UserListPage from "../pages/UserListPage/UserListPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignUpPage/SignUpPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PrivateRoute from "./PrivateRoute"
import UserEditForm from "../components/UserEditForm/UserEditForm"
import NewRecipePage from "../pages/NewRecipePage/NewRecipePage"
import RecipeDetails from "../components/RecipeDetails/RecipeDetails"
import DeliveryPolicy from "../pages/DeliveryPolicy/DeliveryPolicy"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutTempeh" element={<AboutTempeh />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/NewProductPage" element={<NewProductPage />} />
            <Route path="/NewRecipePage" element={<NewRecipePage />} />
            <Route path="/products/edit/:product_id" element={<EditProductForm />} />
            <Route path="/recipes/edit/:recipe_id" element={<EditRecipeForm />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/recipes/details/:recipe_id" element={<RecipeDetails />}></Route>
            <Route path="/deliverypolicy" element={<DeliveryPolicy />} />
            <Route path="/crearUsuario" element={<SignupPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/user/edit/:user_id" element={<UserEditForm />} />
                <Route path="/appUsers" element={<UserListPage />} />
            </Route>

            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes