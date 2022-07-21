import "./App.css";

import { Fragment, useEffect, useState } from "react";
import "./sass/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/layouts/DefaultLayout";
import ExtraLayout from "./components/layouts/ExtraLayout";
import { useSelector } from "react-redux";

function App() {
  // const isUser = true;
  const [isUser, setIsUser] = useState(true);
  const { currentUser, isFetching, error } = useSelector(
    (state) => state.auth.login
  );

  useEffect(() => {
    if (!currentUser) return;
    currentUser.roles.map((item) => {
      if (item.includes("admin")) {
        setIsUser(false);
      }
    });
  }, [isFetching]);
  return (
    <Router>
      <div className="App">
        <Routes>
          {isUser
            ? publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                return (
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
              })
            : privateRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = ExtraLayout;

                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }

                return (
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
