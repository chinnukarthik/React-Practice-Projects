import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ProductShowcase() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPrducts() {
    try {
      setLoading(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      let data = await response.json();
      if (data && data.products && data.products.length) {
        setProduct((prev) => [...prev, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
      setError("Failed to fetch products. Please try again.");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPrducts();
  }, [count]);

  useEffect(() => {
    if (product && product.length === 100) setDisableButton(true);
  }, [product]);
  if (loading) {
    return <div>Loading Please Wait.....</div>;
  }

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-2 ">
        {product && product.length
          ? product.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex flex-col text-center border-2 border-black"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-35 h-35 "
                />
                <div>{item.title}</div>
              </div>
            ))
          : null}
      </div>
      <div className="text-center">
        <button
          disabled={disableButton}
          onClick={() => setCount((count) => count + 1)}
          className="border rounded  bg-green-400 px-2 py-1 text-white"
        >
          Click me to Add more Items
        </button>
        {disableButton ? (
          <p className="text-red-700 text-xl">
            Your have reached the load of 100 products
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ProductShowcase;
