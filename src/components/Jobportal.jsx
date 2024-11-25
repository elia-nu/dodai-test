import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobPortal = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Mechanical Engineer",
      category: "Engineering",
      description:
        "We are looking for a skilled mechanical engineer to design and optimize scooters for performance and safety.",
      responsibilities:
        "Design scooter components, test prototypes, ensure safety standards.",
      requirements:
        "Degree in Mechanical Engineering, 3+ years experience in automotive or scooter design.",
      image: "/mechanical.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Marketing Specialist",
      category: "Marketing",
      description:
        "Join Dodai as a marketing specialist to help grow our brand and drive sales.",
      responsibilities:
        "Develop marketing campaigns, analyze market trends, manage social media.",
      requirements:
        "Experience in digital marketing, SEO knowledge, social media management.",
      image: "/marketing.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Scooter Assembly Technician",
      category: "Manufacturing",
      description:
        "Seeking an experienced scooter assembly technician to join our production team.",
      responsibilities:
        "Assemble scooters, test functionality, ensure quality control.",
      requirements:
        "Experience in assembly line work, attention to detail, scooter knowledge is a plus.",
      image: "/scooterAssemble.webp", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Sales Representative",
      category: "Sales",
      description:
        "Looking for a motivated sales representative to help sell Dodai scooters to retail customers.",
      responsibilities:
        "Handle customer inquiries, close sales deals, manage sales records.",
      requirements:
        "Previous experience in sales, excellent communication skills, scooter industry knowledge is a plus.",
      image: "/sells.jpg", // Replace with actual image URL
    },
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = jobs.filter((job) => job.category === category);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs); // Show all jobs if no category is selected
    }
  };

  const handleSearch = () => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((job) => job.category === selectedCategory);
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-48 lg:mt-28 px-4">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full p-6 bg-gray-100 mb-6 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Filter Jobs</h2>

        {/* Search Input */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Search by job title..."
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full mb-6"
        >
          Search
        </button>

        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="mb-6">
          {/* List of categories as buttons */}
          <button
            onClick={() => handleCategoryClick("")}
            className={`w-full text-left mb-2 px-4 py-2 rounded-lg ${
              selectedCategory === ""
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => handleCategoryClick("Engineering")}
            className={`w-full text-left mb-2 px-4 py-2 rounded-lg ${
              selectedCategory === "Engineering"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Engineering
          </button>
          <button
            onClick={() => handleCategoryClick("Marketing")}
            className={`w-full text-left mb-2 px-4 py-2 rounded-lg ${
              selectedCategory === "Marketing"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Marketing
          </button>
          <button
            onClick={() => handleCategoryClick("Manufacturing")}
            className={`w-full text-left mb-2 px-4 py-2 rounded-lg ${
              selectedCategory === "Manufacturing"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Manufacturing
          </button>
          <button
            onClick={() => handleCategoryClick("Sales")}
            className={`w-full text-left mb-2 px-4 py-2 rounded-lg ${
              selectedCategory === "Sales"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Sales
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="lg:w-3/4 w-full p-6">
        <h1 className="text-2xl font-bold mb-6">Available Jobs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-4 border border-gray-300 rounded-lg flex flex-col"
            >
              <img
                src={job.image}
                alt={job.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p className="mb-4">{job.description}</p>
              <Link
                to={`/job/${job.id}`}
                className="text-orange-500 hover:underline mt-auto"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
