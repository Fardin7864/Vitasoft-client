"use client"
import { SvgIcon } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function user() {
  const [users, setusers] = useState();
useEffect(() => { 
  const response = fetch("https://tasks.vitasoftsolutions.com/userdata/").then(res => res.json()).then(data=> setusers(data))
        // setusers(response.data)
 },[users])

  const setings = <SvgIcon>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
    />
  </svg>
</SvgIcon>

const handleDelete = (id) => { 
 
  MySwal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Here you can handle the deletion logic
      const respons = axios.delete(`https://tasks.vitasoftsolutions.com/userdata/${id}/`)
    
      MySwal.fire(
        'Deleted!',
        'Your data has been deleted.',
        'success'
      );
    }
  });
 }


  return (
    <div className=" w-[100vw] h-[100vh]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`${user.profile}`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">
                        Birth Date: {user.birthdate}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.active_status ? "Active" : "Inactive"}</td>
                <td>{user.joining_date}</td>
                <th>
                <div className=" flex items-center">
                    <button className=" btn btn-xs"><Link href={`/edit/${user.id}`}>{setings}</Link></button>
                    <button onClick={()=>handleDelete(user.id)} className="btn btn-xs btn-warning "><MdDelete /></button>
                </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
