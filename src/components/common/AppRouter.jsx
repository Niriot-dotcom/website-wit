import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home";
import AboutPage from "../../pages/About";
import MembersPage from "../../pages/Members";
import ProjectsPage from "../../pages/Projects";
import EventsPage from "../../pages/Events";
import ContactPage from "../../pages/Contact";
import RegisterPage from "../../pages/Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={HomePage} />
        <Route path="/about" element={AboutPage} />
        <Route path="/members" element={MembersPage} />
        <Route path="/projects" element={ProjectsPage} />
        <Route path="/events" element={EventsPage} />
        <Route path="/contact" element={ContactPage} />
        <Route path="/register" element={RegisterPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
