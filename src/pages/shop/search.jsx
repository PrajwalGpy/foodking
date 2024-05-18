import React, { useState, useEffect } from "react";
import { Product } from "./product";
import "./Shop.css";
import mockdata from "./resCardsItems.json";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Shop = () => {
  const [allRestaurants, setAllRestaurants] = useState(mockdata);
  const [filteredRestaurants, setFilteredRestaurants] = useState(mockdata);
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    setFilteredRestaurants(mockdata);
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredRestaurants(allRestaurants);
      setSearchError("");
    }
  }, [searchText, allRestaurants]);

  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^\d]/g, ""));
  };

  const filterByRating = () => {
    if (searchText.trim() !== "") {
      setSearchError("Clear the search box to apply filter.");
      return;
    }

    let filteredList = mockdata
      .filter((restaurant) => restaurant.info.avgRating >= 4.0)
      .sort((a, b) => b.info.avgRating - a.info.avgRating);
    setFilteredRestaurants(filteredList);
    console.log(filteredList);
  };

  const filterByPriceRange = () => {
    if (searchText.trim() !== "") {
      setSearchError("Clear the search box to apply filter.");
      return;
    }

    let filteredList = mockdata.filter((restaurant) => {
      const costForTwo = parsePrice(restaurant.info.costForTwo);
      return costForTwo >= 300 && costForTwo <= 600;
    });
    setFilteredRestaurants(filteredList);
    console.log(filteredList);
  };

  const filterByMaxPrice = () => {
    if (searchText.trim() !== "") {
      setSearchError("Clear the search box to apply filter.");
      return;
    }

    let filteredList = mockdata.filter((restaurant) => {
      const costForTwo = parsePrice(restaurant.info.costForTwo);
      return costForTwo < 300;
    });
    setFilteredRestaurants(filteredList);
    console.log(filteredList);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    setSearchError("");
    if (text.trim() === "") {
      setFilteredRestaurants(allRestaurants);
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="body-container">
        <div className="shopTitle">
          <h3>Order your food here..</h3>
        </div>

        {searchError && <p className="error-message">{searchError}</p>}

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
          {filteredRestaurants.map((restaurant, id) => (
            <Product {...restaurant?.info} key={id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
