import "./App.css";

import { Fragment } from "react";
import "./sass/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/layouts/DefaultLayout";
import ExtraLayout from "./components/layouts/ExtraLayout";

function App() {
  const isAdmin = true;
  return (
    <Router>
      <div className="App">
        <Routes>
          {isAdmin
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
