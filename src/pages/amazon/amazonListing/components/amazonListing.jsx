import { Link } from "react-router-dom";
import "../css/amazonListing.css";

// AmazonListing Component
export const AmazonListing = ({
  id,
  description,
  title,
  image,
  lifeTimeEarnings,
  twelveMonthEarnings,
  owner,
  agreementPeriod,
}) => {
  return (
    <Link
      to={`/details/${id}`}
      state={{
        id,
        title,
        image,
        description,
        lifeTimeEarnings,
        twelveMonthEarnings,
        owner,
        agreementPeriod,
      }} // Pass product data here
      className="amazon-listing"
    >
      <button className="amazon-listing" onClick={handleClick}>
        <h2 className="amazon-title">{title}</h2>
        <img src={image} alt={title} className="amazon-image" />
        <p className="amazon-earnings">Life Time Earnings {lifeTimeEarnings}</p>
        <p className="amazon-earnings">
          Last 12 month Earnings {twelveMonthEarnings}
        </p>
      </button>
    </Link>
  );
};

const handleClick = () => {
  console.log("hi");
};

export default AmazonListing;
