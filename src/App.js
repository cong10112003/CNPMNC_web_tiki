import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponents from "./components/HeaderComponents/HeaderComponents";
import DefaultComponents from "./components/DefaultComponents/DefaultComponents";

function App() {
  return (
    <div>
    <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponents : Fragment
            return (<Route key={route.path} path={route.path} element={
              <Layout>
                <Page />  
              </Layout>
            } />)
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
