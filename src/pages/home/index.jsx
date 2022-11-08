import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../services/api";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCities = async () => {
    try {
      const url = "/api/v1/city";
      const response = await api.get(url);
      const payload = [...response.data.data.cities];
      console.log(payload);
      setCities(payload);
    } catch (error) {
      alert(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const url = "/api/v1/products";
      const response = await api.get(url);
      const payload = [...response.data.data.products];
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchProducts();
  }, []);

  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <img
            src={require("./loopslogo.png")}
            class="mr-3 h-6 sm:h-9"
            alt="Loops Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Loops
          </span>

          <div class="flex items-center">
            <a
              href=""
              class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            ></a>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Banner />
      <h1 className="text-center font-bold">Cities</h1>
      <div className="bg-primary text-white grid grid-cols-5 gap-4 m-5 rounded text-center">
        {cities.map((item) => {
          return (
            //With return
            <span key={item.id}>{item.name}</span>
          );
        })}
      </div>
      <h1 className="text-center font-bold">Products</h1>
      {/* <div className="bg-primary text-white grid grid-cols-5 gap-4 m-5 rounded text-center">
        {products.map(
          (
            item //Without return
          ) => (
            <span key={item.id}>
              {item.name}, <br />
              Rp. {item.price}
            </span>
          )
        )}
      </div> */}
      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            productName={item.name}
            random={Math.random}
            productPrice={item.price}
            productCategory={item.categoryId.name}
            onClick={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
