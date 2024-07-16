import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeAdmin from "./components/pages/admin/HomeAdmin";
import EditUsers from "./components/pages/admin/EditUsers";
import AdminRoute from "./components/routes/AdminRoute";
import UserRoute from "./components/routes/UserRoute";
import LoadingToRedirect from "./components/routes/LoadingToRedirect";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HomeAdmin />
                    </>
                  }
                />
                <Route
                  path="edit-user/:id"
                  element={
                    <>
                      <EditUsers />
                    </>
                  }
                />
                <Route path="*" element={<LoadingToRedirect />} />
              </Routes>
            </AdminRoute>
          }
        />
        <Route
          path="/*"
          element={
            <UserRoute>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                    </>
                  }
                />
                <Route
                  path="/userTest"
                  element={
                    <>
                      <Home />
                      <Home />
                      <Home />
                      <Home />
                      <Home />
                      <Home />
                    </>
                  }
                />
                <Route path="*" element={<LoadingToRedirect />} />
              </Routes>
            </UserRoute>
          }
        />
      </Routes>

      <></>
    </div>
  );
};

export default App;
