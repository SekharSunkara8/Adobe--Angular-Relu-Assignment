import { Route, Routes } from "react-router";
import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import LoadingBar from "react-top-loading-bar";
import { useLocation } from "react-router";

const AllRoutes = () => {
  const location = useLocation();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(40);
    const timeout = setTimeout(() => {
      setProgress(100);
    });
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div>
      <Toaster />
      <LoadingBar
        // className="loading-bar"
        color="#1dc4b0"
        height={5}
        shadow={true}
        progress={progress}
        loaderSpeed={400}
        containerStyle={{ zIndex: 1000 }}
        transitionTime={200}
        // waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress} />} />
        <Route
          path="/auth/login"
          element={<Login setProgress={setProgress} />}
        />
        <Route
          path="/auth/signup"
          element={<Signup setProgress={setProgress} />}
        />
        <Route path="*" element={<NotFound setProgress={setProgress} />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
