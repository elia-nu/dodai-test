import { useState, useEffect } from "react";
import useStore from "../store/store";
import Scooter from "../assets/bikeIcon.svg";
import { useNavigate } from "react-router";
export default function Products() {
  const [activeButton, setActiveButton] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const { cartIncrement, updateCarts, removeAllCart } = useStore();
  const navigate = useNavigate();
  // Fetch products data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDI3ODY2N2I2N2Q1OTRhMzNmYjIyOCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI4NDExNDM0LCJleHAiOjE3Mjg0MTg2MzR9.8vveALbM8Ys-QmVgBuiRamJfcK5pt5THTejynso3wzE"
      );

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/product`,
          requestOptions
        );
        const result = await response.json();

        // Map the fetched data to match the expected structure
        const mappedProducts = result.map((product, index) => ({
          id: index + 1,
          name: product.name,
          model: product.description, // Assuming description is like the model
          imgSrc: `${import.meta.env.VITE_API_BASE_URL}/${product.image}`, // Adjusting the image URL

          price: `${product.price} Birr`,
          features: product.feature, // Assuming this maps to features array
        }));

        setProductsData(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const handleView = () => {
    navigate("/product");
  };
  const handleProductAdd = (product) => {
    cartIncrement();
    // removeAllCart();
    updateCarts(product);
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:px-8 flex flex-col justify-center items-center">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <img src={Scooter} alt="Bike" className=" " />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mt-6">
            Explore Our Products
          </h1>
          <p className="text-gray-500 mt-2">
            Look at available scooters for you
          </p>
        </div>

        <div className="flex justify-center bg-white rounded-full w-fit space-x-6 mb-8">
          <button
            onClick={() => setActiveButton("moto")}
            className={`pl-4 py-2 rounded-full ${
              activeButton === "moto" ? "text-orange-300" : "text-gray-500"
            }`}
          >
            Model V1<span className="ml-4">|</span>
          </button>
          <button
            onClick={() => setActiveButton("bicycles")}
            className={`py-2 ${
              activeButton === "bicycles" ? "text-orange-300" : "text-gray-500"
            } hover:text-gray-700`}
          >
            Model V3<span className="ml-4">|</span>
          </button>
          <button
            onClick={() => setActiveButton("electro")}
            className={`pr-4 py-2 ${
              activeButton === "electro" ? "text-orange-300" : "text-gray-500"
            } hover:text-gray-700`}
          >
            Model H1
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 relative"
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {product.discount}
                </div>
              )}
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500">{product.model}</p>
              <ul className="mt-4 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-orange-500 font-bold mt-6">
                buy from {product.price}
              </p>
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={handleView}
                  className="mt-4 w-full bg-orange-500 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-300 flex justify-center items-center"
                >
                  View Detail
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
                <button
                  onClick={() => handleProductAdd(product)}
                  className="mt-4 w-full bg-gray-200 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-400 flex justify-center items-center"
                >
                  Add to cart
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button className="bg-gray-100 text-gray-500 p-3 rounded-full shadow-lg hover:bg-gray-200 hover:text-gray-700">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="bg-gray-100 text-gray-500 p-3 rounded-full shadow-lg hover:bg-gray-200 hover:text-gray-700">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
