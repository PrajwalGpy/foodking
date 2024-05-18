import React, { useState, useEffect } from "react";
import { Product } from "./product";
import "./Shop.css";
import mockdata from "./resCardsItems.json";
import Footer from "./Footer";
import Navbar from "./components/Navbar";

export const Shop = (handleClick) => {
  const [allRestaurants, setAllRestaurants] = useState(mockdata);
  const [filteredRestaurants, setFilteredRestaurants] = useState(mockdata);
  const [searchMessage, setSearchMessage] = useState("");

  useEffect(() => {
    setFilteredRestaurants(mockdata);
  }, []);

  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^\d]/g, ""));
  };

  const filterByRating = () => {
    let filteredList = mockdata
      .filter((restaurant) => restaurant.info.avgRating >= 4.0)
      .sort((a, b) => b.info.avgRating - a.info.avgRating);
    setFilteredRestaurants(filteredList);
    console.log(filteredList);
  };

  const filterByPriceRange = () => {
    let filteredList = mockdata.filter((restaurant) => {
      const costForTwo = parsePrice(restaurant.info.costForTwo);
      return costForTwo >= 300 && costForTwo <= 600;
    });
    setFilteredRestaurants(filteredList);
    console.log(filteredList);
  };

  const filterByMaxPrice = () => {
    let filteredList = mockdata.filter((restaurant) => {
      const costForTwo = parsePrice(restaurant.info.costForTwo);
      return costForTwo < 300;
    });
    setFilteredRestaurants(filteredList);
    console.log(filteredList);
  };

  const handleSearch = (searchText) => {
    const filteredList = mockdata.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredList.length > 0) {
      setFilteredRestaurants(filteredList);
      setSearchMessage("");
    } else {
      setFilteredRestaurants([]);
      setSearchMessage("Item not found");
    }
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="body-container">
        <div className="shopTitle">
          <h3>Order your food here..</h3>
        </div>

        <div className="filter">
          <button className="top-rating" onClick={filterByRating}>
            Ratings 4.0+
          </button>
          <button className="between" onClick={filterByPriceRange}>
            Rs. 300-Rs. 600
          </button>
          <button className="lessthan-300" onClick={filterByMaxPrice}>
            Less than Rs. 300
          </button>
        </div>
        <div className="restaurant-list">
          {searchMessage ? (
            <p>{searchMessage}</p>
          ) : (
            filteredRestaurants.map((restaurant, id) => (
              <Product
                {...restaurant?.info}
                key={id}
                handleClick={() => handleClick(restaurant)}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
