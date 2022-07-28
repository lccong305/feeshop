import config from "../config";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Category from "../pages/Category";

import ExtraLayout from "../components/layouts/ExtraLayout";
// import { Dashboard } from "@mui/icons-material";
// import DefaultLayout from "../components/layouts/DefaultLayout";
import Dashboard from "../components/admin/Dashboard";
import AccountUser from "../components/admin/AccountUser";
import ProductAdmin from "../components/admin/Product";
import ProfileLayout from "../components/layouts/ProfileLayout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: config.routes.home, component: Home, property: false },
  { path: config.routes.cart, component: Cart, property: false },
  { path: config.routes.catalog, component: Catalog, property: false },
  { path: config.routes.product, component: Product, property: false },
  { path: config.routes._product, component: Product, property: false },
  { path: config.routes.login, component: Login, property: false },
  { path: config.routes.register, component: Register, property: false },
  {
    path: config.routes.profile,
    component: Profile,
    layout: ProfileLayout,
    property: false,
  },
  { path: config.routes.category, component: Category, property: false },
  {
    path: config.routes.product_ad,
    component: ProductAdmin,
    layout: ExtraLayout,
    property: true,
  },
];

const privateRoutes = [
  { path: config.routes.dashboard, component: Dashboard },
  { path: config.routes.account_user, component: AccountUser },
  { path: config.routes.product_ad, component: ProductAdmin },
];

export { publicRoutes, privateRoutes };
