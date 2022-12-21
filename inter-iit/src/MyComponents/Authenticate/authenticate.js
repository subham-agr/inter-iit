import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BrowserRouter, Route, Link, Routes, Outlet } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Authenticate() {
  let query = useQuery();
  if (localStorage.getItem("interiit_code") === null) {
    localStorage.setItem("interiit_code", query.get("code"));
  }
  // console.log(data)
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  if (localStorage.getItem("interiit_data") === null) {
    if (query.get("code") === null) {
      window.location.replace("http://localhost:3000/");
    }
    const data = {
      code: query.get("code"),
    };

    axios
      .post("http://127.0.0.1:8000/userdata", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log("CHECK ", res);
        localStorage.setItem("interiit_data", JSON.stringify(res));
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
        console.log(
          JSON.parse(localStorage.getItem("interiit_data")).data.name
        );
        console.log("a");
        // setPokemon(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // setLoading(false);
      })
      .finally(() => {
        if (localStorage.getItem("interiit_code") === null) {
          alert("LOGIN PLEASE");
          window.location.replace("http://localhost:3000");
        } else {
          window.location.replace("http://localhost:3000/dashboard/profile");
        }
      });
  } else {
    console.log(JSON.parse(localStorage.getItem("interiit_data")).data.name);
    window.location.replace("http://localhost:3000/dashboard/profile");
  }
  // }, []);

  return (
    <div>
      <h1>Wait</h1>
    </div>
  );
}
