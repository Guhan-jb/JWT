import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./Pages/AdminDashboard";
import Navbar from "./Components/NavBar";
import UserDashboard from "./Pages/UserDashboard";
import Footer from "./Components/Footer";
import MenPage from "./Pages/Men";
import WomenPage from "./Pages/Women";
import KidsPage from "./Pages/Kids";
import SearchPage from "./Pages/searchPage";
import Cart from "./Pages/Cart";
import AccessoriesPage from "./Pages/Access";
import ProductForm from "./Pages/AddProducts";
import AdminAllproducts from "./Pages/AllProducts";
import EditProductForm from "./Pages/EditProducts";
function App() {
    return (
    <>
      <Routes>
        <Route path="/user" element={<><Navbar/><Footer/></>} >
        <Route path="/user" element={<Home />} />
        <Route path="/user/profile" element={<UserDashboard />} />
        <Route path="/user/search" element={<SearchPage />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/men" element={<MenPage />} />
        <Route path="/user/women" element={<WomenPage />} />
        <Route path="/user/kids" element={<KidsPage />} />
        <Route path="/user/accessories" element={<AccessoriesPage />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/AdminDashBoard" element={<Dashboard />} />
        <Route path="/AddProduct" element={<ProductForm />} />
        <Route path="/AllProduct" element={<AdminAllproducts />} />
        <Route path="/EditProduct" element={<EditProductForm />} />
      </Routes>
    </>
  );
}

export default App;
