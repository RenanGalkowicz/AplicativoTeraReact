import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog.jsx";
import UserPostForm from "./components/pages/UserPostForm";

import { CurrentUserContext } from "./contexts/CurrentUserContext";


import "./styles/normalize.css"
import "./styles/fontawesome.min.css"
import "./styles/main.css"

function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserBlog />} />
          <Route path="/users/:userId/post" element={<UserPostForm />} />
        </Routes>  
      </BrowserRouter>
  </CurrentUserContext.Provider>);
}

export default App;
