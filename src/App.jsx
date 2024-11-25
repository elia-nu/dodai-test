import React from 'react';
import BlogPage from "./components/blogs/Blogs";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Shop from "./pages/Shop";

import Auth from "./components/Auth";
import useAuthStore from './store/authStore';

import BlogDetail from "./components/blogs/BlogsDetail";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import JobDetail from "./components/JobDetail";
import JobPortal from "./components/Jobportal";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();

  React.useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/Job" element={<JobPortal />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/News" element={<News />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/product" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
