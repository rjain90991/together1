import AmazonListing from "./amazonListing";
import "../css/amazonListing.css";
import data from "../../../data/db.json"; // Import the JSON file

const AmazonListings = () => {
  console.log(data);
  // AmazonListing Component
  /*
  const listings = [
    {
      id: 1,
      title: "Aveda Shampoo",
      image: avedaShampoo,
      lifeTimeEarnings: 5000,
      twelveMonthEarnings: 7800,
      description: "leading shampoo in the world",
      owner: "Smart One",
      agreementPeriod: 5,
    },
    {
      id: 2,
      title: "Belgium Dark Chocolate",
      image: chocolate,
      lifeTimeEarnings: 5000,
      twelveMonthEarnings: 7800,
      description: "leading chocolate in the world",
      owner: "Funny One",
      agreementPeriod: 10,
    },
    {
      id: 3,
      title: "Apple Mac",
      image: appleMac,
      lifeTimeEarnings: 5000,
      twelveMonthEarnings: 7800,
      description: "leading laptop in the world",
      owner: "Good looking One",
      agreementPeriod: 15,
    },
    {
      id: 4,
      title: "Bracelet",
      image: bracelet,
      lifeTimeEarnings: 10000,
      twelveMonthEarnings: 2800,
      description: "leading bracelet in the world",
      owner: "Crazy One",
      agreementPeriod: 20,
    },
    {
      id: 5,
      title: "Tennis Racquet",
      image: tennisRacquet,
      lifeTimeEarnings: 8000,
      twelveMonthEarnings: 19000,
      description: "leading tennis racquet in the world",
      owner: "Kind One",
      agreementPeriod: 25,
    },
  ];
*/
  // create a list of amazon listing components
  const amazonListingComponents = [];
  //for (const listing of data) {
  data.map((listing) =>
    amazonListingComponents.push(
      <AmazonListing
        id={listing.id}
        title={listing.title}
        description={listing.description}
        image={listing.image}
        lifeTimeEarnings={listing.lifeTimeEarnings}
        twelveMonthEarnings={listing.twelveMonthEarnings}
        owner={listing.owner}
        agreementPeriod={listing.agreementPeriod}
      />,
    ),
  );

  // print the list of amazon listing components
  return (
    <div className="amazon-listings-container">
      <h4 className="amazon-listings-title"> Amazon Listings</h4>
      {amazonListingComponents}
    </div>
  );
};

export default AmazonListings;
