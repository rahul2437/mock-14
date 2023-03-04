import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Signin } from "./Signin";
import Signup from "./Signup";

const AllRoutes = () => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            !isAuth ? (
              <Signup />
            ) : (
              <Navigate to={"/dashboard"} replace state={{ from: location }} />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isAuth ? (
              <Signin />
            ) : (
              <Navigate to={"/dashboard"} replace state={{ from: location }} />
            )
          }
        />
      </Routes>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }
  return children;
};

export default AllRoutes;
