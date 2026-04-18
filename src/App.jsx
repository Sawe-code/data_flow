import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Routes>

      
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      
      <Route path="/dashboard" element={<DashboardLayout />} />

    </Routes>
  );
};

export default App;