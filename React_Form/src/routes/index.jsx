import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentPage from "../pages/StudentPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
