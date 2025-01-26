import { useState } from "react";
import "../css/createListing.css";

const CreateListingForm = () => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="create">
      <form class="beautiful-form" onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Owner Name</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Connect Account</label>
          <select>
            <option value="Amazon Seller Account">Amazon Seller Account</option>
            <option value="Shopify Store Account">Shopify Store Account</option>
          </select>
        </div>

        <button type="submit" class="form-button">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default CreateListingForm;
