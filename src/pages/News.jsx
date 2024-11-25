import React from "react";
import Hero from "../components/Hero";
import BlogPage from "../components/blogs/Blogs";
import Footer from "../components/Footer";
export default function News() {
  return (
    <div>
      <div className="mt-40">
        <Hero page="News" />
      </div>
      <div>
        <BlogPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
