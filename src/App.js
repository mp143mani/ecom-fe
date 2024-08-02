import { Routes, Route } from "react-router-dom";
import HomePage from "./Allpages/HomePage";
import About from "./Allpages/About";
import Contact from "./Allpages/Contact";
import Policy from "./Allpages/Policy";
import Pagenotfound from "./Allpages/Pagenotfound";
import Register from "./Authendication/Register";
import Login from "./Authendication/Login";
import Dashboard from "./User/Dashboard";
import PrivateRoute from "./User/Private";
import ForgotPasssword from "./Authendication/ForgotPasssword";
import AdminRoute from "./Admin/AdminRoute";
import AdminDashboard from "./Admin/AdminProfile";
import CreateCategory from "./Admin/CreateCategory";
import CreateProduct from "./Admin/CreateProduct";
import Users from "./Admin/GetAlluser";
import Orders from "./User/Orders";
import Profile from "./User/Profile";
import Products from "./Admin/Products";
import UpdateProduct from "./Admin/UpdateProduct";
import Search from "./Allpages/Search";
import ProductDetails from "./Allpages/ProductDetails";
import Categories from "./Allpages/Categories";
import CategoryProduct from "./Allpages/CategoryProduct";
import CartPage from "./Allpages/CartPage";
import AdminOrders from "./Admin/AdminOrders";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
