import config from "../config";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

// import ExtraLayout from "../components/layouts/ExtraLayout";
// import { Dashboard } from "@mui/icons-material";
// import DefaultLayout from "../components/layouts/DefaultLayout";
import Dashboard from "../components/admin/Dashboard";
import AccountUser from "../components/admin/AccountUser";
import ProductAdmin from "../components/admin/Product";
import ProfileLayout from "../components/layouts/ProfileLayout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: config.routes.home, component: Home },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.catalog, component: Catalog },
  { path: config.routes.product, component: Product },
  { path: config.routes._product, component: Product },
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
  { path: config.routes.profile, component: Profile, layout: ProfileLayout },
];

const privateRoutes = [
  { path: config.routes.dashboard, component: Dashboard },
  { path: config.routes.account_user, component: AccountUser },
  { path: config.routes.product_ad, component: ProductAdmin },
];

export { publicRoutes, privateRoutes };
