import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AboutUs from "../pages/AboutUs/AboutUs"
import Products from "../pages/Products/Products"
import Recipes from "../pages/Recipes/Recipes"
import AboutTempeh from "../pages/AboutTempeh/AboutTempeh"
import NewProductPage from "../pages/NewProductPage/NewProductPage"
import EditProductForm from "../components/EditProductForm/EditProductForm"
import EditRecipeForm from "../components/EditRecipeForm/EditRecipeForm"
import UserListPage from "../pages/UserListPage/UserListPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignUpPage/SignUpPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PrivateRoute from "./PrivateRoute"
import UserEditForm from "../components/UserEditForm/UserEditForm"
import NewRecipePage from "../pages/NewRecipePage/NewRecipePage"
import RecipeDetails from "../components/RecipeDetails/RecipeDetails"
import DeliveryPolicy from "../pages/DeliveryPolicy/DeliveryPolicy"
import CookiesPolicy from "../pages/CookiesPolicy/CookiesPolicy"
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy"
import Legal from "../pages/Legal/Legal"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutTempeh" element={<AboutTempeh />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/recipes/details/:recipe_id" element={<RecipeDetails />} />
            <Route path="/deliverypolicy" element={<DeliveryPolicy />} />
            <Route path="/cookiespolicy" element={<CookiesPolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/crearUsuario" element={<SignupPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/user/edit/:user_id" element={<UserEditForm />} />
                <Route path="/appUsers" element={<UserListPage />} />
                <Route path="/products/edit/:product_id" element={<EditProductForm />} />
                <Route path="/recipes/edit/:recipe_id" element={<EditRecipeForm />} />
                <Route path="/NewRecipePage" element={<NewRecipePage />} />
                <Route path="/NewProductPage" element={<NewProductPage />} />
            </Route>

            <Route path="*" element={<p>404</p>} />
        </Routes >
    )
}

export default AppRoutes