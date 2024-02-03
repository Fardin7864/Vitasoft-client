// Form.js
"use client";

import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Typography } from "@mui/material";
import bg from "../../../public/book-bg.png";
import Swal from 'sweetalert2';


const Form = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    e.preventDefault();

    // const file = e.target.image.files[0];

    // const formData = new FormData();
    // formData.append("image", file);

    try {
      // const response = await axios.post(
      //   "https://api.imgbb.com/1/upload?key=71916831da1892097125a1c42c958554",
      //   formData
      // );

      // const profileImage = response.data.data.display_url;
      const name = e.target.name.value;
      const phone = e.target.phone.value;
      const birthdate = e.target.birthdate.value;
      const status = e.target.status.value;
      const description = e.target.description.value
      const user = {
        name: name,
        phone_number: phone,
        description: description,
        birthdate: birthdate,
        active_status: status,
        // profile_picture: profileImage

      };
      console.log(user)
      const res = await axios.post("https://tasks.vitasoftsolutions.com/userdata/",user)
      if(res.data){
        Swal.fire({
        title: 'Created successfully!',
        text: 'Created new uer',
        icon: 'success',
        confirmButtonText: 'Cool!'
      });
      e.target.reset()
      // router('/users')
    }
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  return (
    <Box
      style={{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
        paddingBottom: 20,
      }}
    >
      <form
        onSubmit={handleImageUpload}
        style={{
          borderRadius: "14px",
          padding: 20,
          boxShadow: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundImage: `url(${bg})`,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "80%",
        }}
      >
        <Typography
          style={{
            marginTop: 20,
            textAlign: "center",
            marginBottom: 10,
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          Create New User
        </Typography>
        {/* 1st row */}
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "50%",
            }}
          >
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                paddingLeft: 10,
                paddingTop: 6,
                paddingBottom: 6,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "50%",
            }}
          >
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Name"
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                paddingLeft: 10,
                paddingTop: 6,
                paddingBottom: 6,
              }}
            />
          </div>
        </div>
        {/* 2nd row */}
        <div
          style={{ display: "flex", gap: 20, justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "50%",
            }}
          >
            <label htmlFor="">Barth Date</label>
            <input
              type="date"
              name="birthdate"
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                paddingLeft: 10,
                paddingTop: 3,
                paddingBottom: 3,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "50%",
            }}
          >
            <label htmlFor="">Status</label>
            <select
              name="status"
              id=""
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                paddingLeft: 10,
                paddingTop: 6,
                paddingBottom: 6,
              }}
            >
              <option>Select Status</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>
        {/* 3rd row */}
        <div
          style={{ display: "flex", gap: 20, justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: '50%' }}>
            <label>Profile Picture</label>
            <input type="file" name="image" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "50%",
            }}
          >
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                paddingLeft: 10,
                paddingTop: 6,
                paddingBottom: 6,
              }}
            />
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button className="btn btn-warning">SUBMIT</button>
        </div>
      </form>
    </Box>
  );
};

export default Form;
