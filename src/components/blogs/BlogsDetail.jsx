import React from "react";
import { useParams } from "react-router-dom";

const blogData = {
  1: {
    id: 1,
    title: "EthioPost - Logistics & Postal",
    date: "August 12, 2024",
    category: "Partners",
    comments: 3,
    imageUrl: "/ethiopost.jpg",
    content: `
      In a monumental move for Ethiopia’s logistics and postal services, EthioPost has officially teamed up with Dodai to revolutionize how the country delivers its essential services. This partnership is a beacon of sustainability and innovation, as EthioPost, the nation’s trusted state-owned postal service provider, embarks on an exciting journey to modernize and enhance efficiency.

      Through this exclusive collaboration, EthioPost is bringing its “Post for Everyone” initiative to new heights, offering a seamless, eco-friendly delivery experience across Ethiopia. Dodai’s electric fleet, designed to reduce carbon emissions, will now power the delivery of letters, parcels, and essential goods, reaching even the most remote corners of the country.

      This partnership promises not only to streamline operations but to set a new standard for postal services in Africa. With Dodai’s innovative solutions and EthioPost’s nationwide reach, this collaboration is poised to redefine the future of logistics and postal services in Ethiopia, offering faster, greener, and more reliable deliveries for millions of citizens.
    `,
  },
  2: {
    id: 2,
    title: "beU - Revolutionizing Food Delivery in Ethiopia",
    date: "September 28, 2024",
    category: "Delivery",
    comments: 2,
    imageUrl: "/beu.jpg",
    content: `
      The food delivery landscape in Ethiopia is rapidly evolving, and beU Delivery is at the forefront of this exciting transformation. In a bold move towards sustainability and innovation, beU has partnered with Dodai to create an environmentally friendly, high-speed food delivery service.

      With Dodai’s electric vehicles, beU’s delivery fleet is not only faster but greener, ensuring that delicious meals are delivered to customers with a significantly reduced carbon footprint. This partnership is more than just about food—it’s about building a better, more sustainable future for Ethiopia.

      By employing locally assembled electric bikes, beU and Dodai are not only boosting the country’s economy but also creating jobs and empowering communities. Together, they are redefining convenience, service quality, and environmental consciousness in the food delivery industry. Customers can now enjoy their meals knowing that their deliveries are contributing to a healthier planet.
    `,
  },
  3: {
    id: 3,
    title: "Rungooo - Leading the Charge for Greener Liquor Delivery",
    date: "September 28, 2024",
    category: "Delivery",
    comments: 2,
    imageUrl: "/rungo.jpeg",
    content: `
      Rungooo, a game-changer in Ethiopia’s liquor delivery industry, is taking a massive step towards environmental responsibility with its latest partnership with Dodai. Together, they’re electrifying the way alcohol is delivered, trading gas-guzzling vehicles for sleek, electric-powered bikes that zip through the city, providing speedy service while reducing environmental impact.

      This collaboration is about more than just efficiency. It’s about reshaping the way businesses think about sustainability. Rungooo’s decision to integrate Dodai’s locally assembled electric bikes reflects a commitment to both community and planet. By reducing emissions and cutting down on delivery times, Rungooo is not only leading the liquor delivery market but is also setting an example for other businesses in Ethiopia.

      Whether it’s a fine bottle of wine or a selection of craft beers, customers can now feel good about their delivery, knowing that Rungooo and Dodai are working together to bring a little green to every sip.
    `,
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-96 object-cover"
          src={blog.imageUrl}
          alt={blog.title}
        />
        <div className="p-6">
          <div className="text-center mb-4">
            <p className="text-gray-500">{blog.date}</p>
            <h1 className="text-4xl font-bold mt-2">{blog.title}</h1>
            <p className="text-green-500 mt-1 italic">{blog.category}</p>
          </div>

          <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
            {blog.content.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <span className="text-gray-600">Comments: {blog.comments}</span>
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              Leave a Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
