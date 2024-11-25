import React from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();

  const jobs = [
    {
      id: 1,
      title: "Mechanical Engineer",
      category: "Engineering",
      description: `
        Join our dynamic engineering team as a Mechanical Engineer, where you'll be at the forefront of scooter innovation and design. 
        We're looking for someone with a passion for engineering and a commitment to creating top-tier, high-performance scooters 
        that meet the highest safety standards.
      `,
      responsibilities: `
        - Lead the design and development of scooter components.
        - Test and optimize prototypes for durability, performance, and safety.
        - Ensure all designs adhere to both industry safety standards and company requirements.
        - Collaborate with cross-functional teams, including manufacturing and assembly, to bring designs to life.
      `,
      requirements: `
        - Bachelor's degree in Mechanical Engineering or related field.
        - 3+ years of hands-on experience in automotive or scooter design.
        - Strong knowledge of CAD software and product lifecycle management.
        - Proven ability to work with complex mechanical systems and troubleshoot design issues.
      `,
      image: "/mechanical.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Marketing Specialist",
      category: "Marketing",
      description: `
        Dodai is looking for a creative and driven Marketing Specialist to help us expand our brand presence and drive customer engagement. 
        You'll play a key role in developing and implementing marketing campaigns that resonate with our audience and drive growth.
      `,
      responsibilities: `
        - Design and implement marketing strategies and campaigns to promote Dodai scooters.
        - Analyze and interpret market trends to identify opportunities for growth.
        - Manage and optimize social media platforms, creating content that engages and attracts customers.
        - Collaborate with the sales team to align marketing strategies with business objectives.
      `,
      requirements: `
        - Bachelor's degree in Marketing or a related field.
        - Proven experience in digital marketing and SEO.
        - Proficiency in social media management and content creation.
        - Strong analytical skills and the ability to make data-driven decisions.
      `,
      image: "/marketing.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Scooter Assembly Technician",
      category: "Manufacturing",
      description: `
        We’re searching for an experienced Scooter Assembly Technician to join our production team and bring our scooters to life. 
        Your expertise in assembly line work and attention to detail will ensure that every scooter we produce meets our high standards for quality and performance.
      `,
      responsibilities: `
        - Assemble scooters according to engineering specifications and assembly instructions.
        - Conduct functionality tests to ensure the highest quality before distribution.
        - Identify and troubleshoot any issues during the assembly process.
        - Collaborate with engineering and quality control teams to improve assembly processes.
      `,
      requirements: `
        - Prior experience in assembly line work, preferably in automotive or scooter manufacturing.
        - Strong attention to detail and a commitment to maintaining high quality.
        - Basic understanding of scooter mechanics is a plus.
        - Ability to work in a fast-paced environment and meet production deadlines.
      `,
      image: "/scooterAssemble.webp", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Sales Representative",
      category: "Sales",
      description: `
        Dodai is seeking an energetic and goal-oriented Sales Representative to join our team. 
        In this role, you’ll be responsible for driving sales and ensuring our scooters reach as many customers as possible. 
        You’ll play a crucial part in our growth, helping to spread the word about our innovative, eco-friendly scooters.
      `,
      responsibilities: `
        - Manage and respond to customer inquiries, offering product recommendations.
        - Close sales deals, ensuring customers have a positive buying experience.
        - Maintain accurate sales records and meet monthly sales targets.
        - Develop relationships with retail customers to promote long-term business opportunities.
      `,
      requirements: `
        - Proven experience in sales, with a track record of meeting or exceeding sales targets.
        - Strong communication and interpersonal skills.
        - Knowledge of the scooter industry or automotive products is an advantage.
        - Ability to work independently and manage time effectively.
      `,
      image: "/sells.jpg", // Replace with actual image URL
    },
  ];

  const job = jobs.find((job) => job.id === parseInt(id));

  return (
    <div className="p-6">
      {job ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <img
            src={job.image}
            alt={job.title}
            className="mb-4 w-full h-60 object-cover rounded-lg"
          />
          <p className="text-gray-600 mb-2 font-semibold">
            Category: {job.category}
          </p>
          <p className="text-lg mb-4 leading-relaxed">{job.description}</p>
          <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
          <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-wrap">
            {job.responsibilities}
          </p>
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-wrap">
            {job.requirements}
          </p>
        </>
      ) : (
        <p className="text-red-600">Job not found.</p>
      )}
    </div>
  );
};

export default JobDetail;
