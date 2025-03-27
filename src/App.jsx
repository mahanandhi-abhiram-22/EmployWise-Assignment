// employwise/src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
};

export default App;
