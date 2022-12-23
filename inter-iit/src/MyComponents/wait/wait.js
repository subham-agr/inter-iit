import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BrowserRouter, Route, Link, Routes, Outlet } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Wait() {


    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem("interiit_data")))
        const token = JSON.parse(localStorage.getItem("interiit_data")).data.token;
        const data = {
          roll_number: JSON.parse(localStorage.getItem("interiit_data")).data
            .roll_number,
        };
        axios.post("http://localhost:8000/check_reg", data, {
            headers: { Authorization: `Token ${token}` },
          })
          .then((resp) => {
            console.log(resp.data.success);
            if (resp.data.success === false) {
              window.location.replace("http://localhost:3000/register");
              localStorage.setItem('isregistered',false)
            }
            else{
              localStorage.setItem('isregistered',true)
              window.location.replace("http://localhost:3000/dashboard/problems");
            }
          });
      });
  return (
    <div>
      <h1>Wait</h1>
    </div>
  );
}
