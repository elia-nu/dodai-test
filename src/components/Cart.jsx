import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import useStore from "../store/store";
import { useNavigate } from "react-router";
const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { cartNo, carts } = useStore(); // Extract cartNo and carts from the store
  const navigate = useNavigate();
  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={toggleSidebar}
        className=" fixed top-[55px] right-4 text-black p-4 rounded-full shadow-lg hover:bg-orange-300 transition-colors"
      >
        <div className="absolute top-0 left-0 bg-orange-500 text-white text-sm px-1 rounded-full">
          {cartNo}
        </div>
        <ShoppingCart size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto">
            {carts.length > 0 ? (
              carts.map((cartItem, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{cartItem.name}</h3>
                    <p className="text-sm text-gray-600">
                      {cartItem.features.slice(0, 2)}...
                    </p>
                    <p className="text-lg font-bold mt-2">${cartItem.price}</p>
                  </div>
                  {/* Optional Image */}
                  {cartItem.imgSrc && (
                    <img
                      src={cartItem.imgSrc}
                      alt={cartItem.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => navigate("/Checkout")}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors mt-4"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
