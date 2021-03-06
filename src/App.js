import "./App.css";
import { Fragment, useEffect, useState } from "react";
import "./sass/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/layouts/DefaultLayout";
import ExtraLayout from "./components/layouts/ExtraLayout";
import { useSelector } from "react-redux";
import PureLoading from "./components/Loading/PureLoading";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  // const isUser = false;

  const { currentUser, isFetching, error } = useSelector(
    (state) => state.auth.login
  );
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            let privateRoute = route.property;
            console.log(privateRoute + "   heheh");
            console.log(PrivateRoutes);
            console.log(index + " index");
            console.log(route.component + "  route");
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return privateRoute ? (
              <Route element={<PrivateRoutes />}>
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              </Route>
            ) : (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
