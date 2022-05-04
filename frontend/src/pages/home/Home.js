import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  // const url = "";

  // const [data, setData] = useState({
  //   name: "",
  //   username: "",
  //   password: "",
  // });

  // const handle = (event) => {
  //   const newdata = { ...data };
  //   newdata[event.target.id] = event.target.value;
  //   setData(newdata);
  //   console.log(newdata);
  // };
  // const createUser = async (event) => {
  //   event.preventDefault();
  //   await axios
  //     .post("http://localhost:4000/createUser", {
  //       name: data.name,
  //       username: data.username,
  //       password: data.password,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   axios.get("http://localhost:4000/getUsers").then((response) => {
  //     console.log(response.data);
  //   });
  // });

  return (
    <div className="container bg-landing-background w-full h-screen bg-cover bg-no-repeat  fixed">
      <div className="container h-3/4 w-5/6 mr-auto ml-auto mt-10 bg-bg-panel flex flex-col justify-around">
        <div className="h-1/2 w-5/6 mr-auto ml-auto text-justify">
          <p className="text-2xl">
            Welcome to
            <br /> <span className="text-4xl font-medium">Bibliolater</span>,
            The Social site for Bibliophiles and book lovers alike to connect ,
            collect, and share a love for books.
          </p>
        </div>
        <div className="h-32 w-5/6">
          <button className="h-32 w-32 bg-red-50">Log In/ Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
