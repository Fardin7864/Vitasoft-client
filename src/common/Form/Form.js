// Form.js
"use client";

import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const file = e.target.image.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=71916831da1892097125a1c42c958554",
        formData
      );

      const profileImage = response.data.data.display_url;
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  return (
    <div className="border-4 mt-10" style={{marginTop: 10}}>
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input 
          type="text" 
          name="name"
          placeholder="Enter Name"
          className=" border-2 ml-6"
          />
        </div>
      </form>
      <div>
        <input type="file" name="image" />
      </div>
 
    </div>
  );
};

export default Form;
