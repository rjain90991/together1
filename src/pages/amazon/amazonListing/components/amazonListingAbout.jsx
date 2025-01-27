import React from "react";
import { useLocation } from "react-router-dom";

const AmazonListingAboutInfo = () => {
  const { state } = useLocation(); // Access the passed `state` object

  if (!state) {
    return <p>No product information available!</p>;
  }

  const {
    title,
    image,
    description,
    lifeTimeEarnings,
    twelveMonthEarnings,
    owner,
    agreementPeriod,
  } = state; // Destructure the product data

  return (
    <div className="listing-details">
      <h1>{title}</h1>
      <img src={image} alt={title} className="amazon-about-image" />
      <p>
        About
        <br />
        {description}
      </p>
      <p>
        Lifetime Earnings <br /> {lifeTimeEarnings}
      </p>
      <p>
        Share Price <br /> {Math.random()}
      </p>
      <p>
        Revenue Shared per Share <br /> {lifeTimeEarnings}
      </p>
      <p>
        Last 12 month earnings
        <br /> {twelveMonthEarnings}
      </p>
      <p>
        Listed by <br /> {owner}
      </p>
      <p>
        Agreement Period <br /> {agreementPeriod}
      </p>
    </div>
  );
};

export default AmazonListingAboutInfo;
