import React, { useEffect, useState } from "react";
import NavBar from "./components/common/NavBar";
import PreLoader from "./components/common/PreLoader";
import SideBar from "./components/common/SideBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

const Content = React.lazy(() => import("./views/Content"));
const DemoView = React.lazy(() => import("./views/DemoView"));

export default function App() {
  const params = useParams();

  console.log(params);

  return (
    <div className="wrapper">
      <PreLoader />
      <NavBar />
      <SideBar />
      <div className="content-wrapper">
        <React.Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/app" element={<Content />} />
            <Route path="/abc" element={<DemoView />} />
            <Route path="/demo" element={() => <div>Hieu</div>} />
          </Routes>
        </React.Suspense>
      </div>
      <Footer />
    </div>
  );
}
