import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "EthioPost - Logistics & Postal",
    date: "August 12, 2024",
    category: "partners",
    comments: 3,
    imageUrl: "/ethiopost.jpg",
    excerpt:
      "Ethiopost, Ethiopia’s state-owned postal services delivery, announced its exclusive partnership with Dodai to continue its services of “Post for everyone,” further setting a new standard in sustainable delivery solutions.",
  },
  {
    id: 2,
    title: "beU - Food Delivery",
    date: "September 28, 2024",
    category: "Delivery",
    comments: 2,
    imageUrl: "/beu.jpg",
    excerpt:
      "Ethiopian food delivery leader BeU Delivery teams up with Dodai! This powerful partnership delivers food faster, cleaner, and creates jobs, all while fueling a greener future for Ethiopia.",
  },
  {
    id: 3,
    title: "Rungooo - Liquor Delivery",
    date: "September 28, 2024",
    category: "Delivery",
    comments: 2,
    imageUrl: "/rungo.jpeg",
    excerpt:
      "Ethiopia's eco-friendly beverage hero, Rungooo, partners with Dodai to fuel greener deliveries! Together, we'll zoom past gas with custom electric bikes, assembled locally, redefining the future of sustainable sips.",
  },
];

// Extract unique categories from blogs
const categories = [...new Set(blogs.map((blog) => blog.category))];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter blogs based on search term and selected category
  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? blog.category === selectedCategory : true)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>

      {/* Sidebar on top for mobile, on right for larger screens */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* Main content */}
        <div className="w-full md:w-3/4 mb-8 md:mb-0">
          <div className="grid grid-cols-1 gap-8">
            {filteredBlogs
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by latest date
              .map((blog) => (
                <div
                  key={blog.id}
                  className="relative bg-white w-full shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    className="w-full h-58 object-cover"
                    src={blog.imageUrl}
                    alt={blog.title}
                  />
                  <div className="p-4 bg-slate-100">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700">{blog.date}</p>
                    </div>
                  </div>
                  <div className="text-gray-700 flex justify-center items-center mt-4">
                    <h2 className="p-3 text-center text-lg md:text-3xl font-bold">
                      {blog.title}
                    </h2>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mt-2 text-center">
                      {blog.excerpt}
                    </p>
                    <div className="flex justify-center items-center m-4">
                      <a
                        href={`/blog/${blog.id}`}
                        className="text-black hover:text-white hover:bg-orange-300 bg-gray-100 p-2 rounded"
                      >
                        Read More{" "}
                        <span className="text-orange-300 hover:text-white">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4 md:pl-4 mb-8 md:mb-0">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Search bar */}
            <h2 className="text-xl font-bold mb-4 text-center md:text-left">
              Search
            </h2>
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded-md"
            />

            {/* Categories list */}
            <h2 className="text-xl font-bold mb-4 text-center md:text-left">
              Categories
            </h2>
            <ul className="text-center md:text-left">
              <li
                className={`cursor-pointer mb-2 p-2 rounded-lg ${
                  selectedCategory === "" ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelectedCategory("")}
              >
                All
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer mb-2 p-2 rounded-lg ${
                    selectedCategory === category ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
