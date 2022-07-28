import config from "../config";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
<<<<<<< HEAD
import Payment from "../pages/Payment";
import PaymentOffline from "../pages/PaymentOffline";
import PaymentPaypal from "../pages/PaymentPaypal";
import PaymentVNPAY from "../pages/PaymentVNPAY";
import Ordered from "../pages/Ordered";
=======
import Category from "../pages/Category";
>>>>>>> 35fecdad0990d751f1e61cf8e429a041815b1896

import ExtraLayout from "../components/layouts/ExtraLayout";
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
<<<<<<< HEAD
  { path: config.routes.payment, component: Payment },
  { path: config.routes.paymentoffline, component: PaymentOffline },
  { path: config.routes.paymentpaypal, component: PaymentPaypal },
  { path: config.routes.paymentvnpay, component: PaymentVNPAY },
  { path: config.routes.orderer, component: Ordered },
=======
  { path: config.routes.category, component: Category },
>>>>>>> 35fecdad0990d751f1e61cf8e429a041815b1896
];

const privateRoutes = [
  { path: config.routes.dashboard, component: Dashboard },
  { path: config.routes.account_user, component: AccountUser },
  { path: config.routes.product_ad, component: ProductAdmin },
];

export { publicRoutes, privateRoutes };
