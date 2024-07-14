import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/home/Home";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <Routes>
                <Route
                  path="index"
                  element={
                    <>
                      <Home />
                    </>
                  }
                />
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
                  path="/user2"
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
