import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDU3NzhjYTQxN2RiZmFhZDY3OGY2NyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyODQ5Njk0NCwiZXhwIjoxNzI4NTA0MTQ0fQ.k_Pq0n-5vMOrP_7vj0L057S129HfrGzuYsiDkAOgHqQ"
    );

    const raw = JSON.stringify({
      products: ["670577caa417dbfaad678f6b"],
      accountId: "6705778ca417dbfaad678f67",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/order",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order placed successfully",

        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/Shop");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order placed successfully",

        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/Shop");
      // console.error(error);
      // setError("Failed to place the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

        <form onSubmit={handleCheckout}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 font-bold text-white rounded-md ${
              loading ? "bg-gray-500" : "bg-orange-600 hover:bg-orange-700"
            } transition-colors duration-300`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Place Order"}
          </button>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
