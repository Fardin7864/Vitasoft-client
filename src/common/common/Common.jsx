"use client"
import { Box, Typography } from '@mui/material';
import axios from 'axios';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CommonCompo = ({params}) => {
  const [user, setuser] = useState();

  const id = params.id;
   useEffect(() => { 
       const response = fetch(`https://tasks.vitasoftsolutions.com/userdata/${id}/`).then(res=>res.json()).then(data=> setuser(data))
    },[])
    console.log(user)
    const handleUpdate = async (e) => {
        e.preventDefault();
    
      
          const name = e.target.name.value;
          const phone = e.target.phone.value;
          const birthdate = e.target.birthdate.value;
          const status = e.target.status.value;
          const description = e.target.description.value
          const updatedUser = {
            name: name,
            phone_number: phone,
            description: description,
            birthdate: birthdate,
            active_status: status,
            // profile_picture: profileImage
    
          };
          // console.log(updatedUser)
          // console.log("id", id)
        //   console.log(user)
          const res = await axios.put(`https://tasks.vitasoftsolutions.com/userdata/${id}/`, updatedUser)          
          console.log(res.data)
       
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
          onSubmit={handleUpdate}
          style={{
            borderRadius: "14px",
            padding: 20,
            boxShadow: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
           Update {}
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
                defaultValue={user?.name}
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
                defaultValue={user?.phone_number}
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
                defaultChecked={user?.active_status}
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
                defaultValue={user?.description}
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
            <button type='submit' className="btn btn-warning">SUBMIT</button>
          </div>
        </form>
      </Box>
    );
};

export default CommonCompo;