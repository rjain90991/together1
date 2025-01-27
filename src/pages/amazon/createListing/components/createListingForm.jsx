import { useState } from "react";
import supabase from "../../../../supabase/supabaseClient";
import "../css/createListing.css";

const CreateListingForm = () => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [listingList, setListingList] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0]; // Get the first file selected
    if (file) {
      setSelectedFile(file); // Store the file in state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    // Alert the selected file
    alert(`File selected: ${selectedFile.name}`);

    try {
      // Step 1: Upload the file to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("images1") // Ensure "images1" matches your bucket name
        .upload(`public/${selectedFile.name}`, selectedFile, { upsert: true }); // Allow overwriting

      if (uploadError) {
        console.error("Error uploading file:", uploadError.message);
        return;
      }

      console.log("Upload successful. File path:", uploadData.path);

      // Step 2: construct public url:
      const projectRef = "xgyxnnzyahcfidvkayxg"; // Replace with your project reference
      const bucketName = "images1"; // Replace with your bucket name
      const folderName = "public"; // Folder in the bucket (e.g., "public")

      // Construct the URL
      const publicURL = `https://${projectRef}.supabase.co/storage/v1/object/public/${bucketName}/${folderName}/${selectedFile.name}`;

      console.log("Public URL:", publicURL);

      // Step 3: Prepare and insert the new listing with the public URL
      const newListing = {
        listed_by: owner,
        about: description,
        title: title,
        life_time_earnings: 5000,
        twelve_month_earnings: 7800,
        agreement_period: 5,
        image: publicURL, // Use the public URL here
        share_price: Math.random(),
        revenue_shared_per_share: 50,
      };

      const { data, error } = await supabase
        .from("AmazonListings") // Replace with your table name
        .insert([newListing])
        .single();

      if (error) {
        console.error("Error adding listing:", error.message);
      } else {
        console.log("New listing added:", data);
        setListingList((prev) => [...prev, data]); // Update the state with the new listing
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
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
          <label htmlFor="file-input">Select an Image:</label>
          <input
            type="file"
            id="file-input"
            name="image"
            accept="image/*" // Restrict to image files only
            onChange={handleFileChange} // Capture file on change
          />
        </div>
        <div class="form-group">
          <label>Connect Account</label>
          <select>
            <option value="Amazon Seller Account">Amazon Seller Account</option>
            <option value="Shopify Store Account">Shopify Store Account</option>
          </select>
        </div>
        <div>
          <h3>Preview:</h3>
          <img src={previewUrl} alt="Preview" style={{ width: "200px" }} />
        </div>
        <button type="submit" class="form-button">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default CreateListingForm;
