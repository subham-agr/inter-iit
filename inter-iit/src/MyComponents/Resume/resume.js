// import { upload } from '@testing-library/user-event/dist/upload';
import React, { useRef, useState, useEffect } from "react";
import "./resume.css";
import { skills } from "../Skills/skills";
// import { otherskills } from '../otherskills/otherskills'
import { otherskills } from "../otherskills/otherskills";
import { phonenumber } from "../MainPage/mainpage";
import axios from "axios";
import { Button, touchRippleClasses } from "@mui/material";
const baseURL = "http://localhost:8000/student/";
// const data = useRef({});


var files;
var register = localStorage.getItem("isregistered");

function returnfunc(){
  if(otherskills === "[]" || skills === "[]" || otherskills === undefined || otherskills === "undefined" || skills === "undefined" || phonenumber === undefined){
    return true
  }
  else{
    return false
  }
}

class Resume extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     FormData: formData
  //   }
  //   this.changeHandler = this.changeHandler.bind(this);
  // }
  //change Handler
  // changeHandler(event){
  //   this.setState({
  //     // event.target.files[0]
  //     [event.target.files[0]]
  //   });
  //   console.log(event.target.files[0])
  //   console.log(this.state)
  //   console.log(JSON.stringify(this.state));
  //   console.log("file changed");
  // }

  changeHandler(event) {
    files = event.target.files;
    // formData.append("file", files[0]);
    // console.log(formData.get("otherskills").length)
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    // this.setState(formData)
    // console.log(this.state)
    // console.log(event.target.files[0])
    // console.log(files);
    // console.log(JSON.stringify(files));
  }
  //submit
  // submitForm(e) {
  //   e.preventDefault();
  //   // axios.post('http://localhost:8000/student/', formData).then((resp)=>{ console.log(resp) });
  //   const token = JSON.parse(localStorage.getItem("interiit_data")).data.token;
  //   console.log(token);
  //   axios
  //     .post("http://localhost:8000/student", formData, {
  //       headers: { Authorization: `Token ${token}` },
  //     })
  //     .then((resp) => {
  //       if (resp.data.success == true) {
  //         // setregister(true)
  //         localStorage.setItem("isregistered", true);
  //         window.location.replace("http://localhost:3000/dashboard/profile");
  //       }
  //     });
  //   // headers: {
  //   //   'Content-type': 'application/json; charset=UTF-8',
  //   // },
  //   // .catch(error => {
  //   //       this.setState({ errorMessage: error.toString() });
  //   //       console.error('There was an error!', error);
  //   //   });
  // }
  // if(status){
  //   setupload("Uploaded");
  //   document.getElementById("upload").style.backgroundColor = "green";
  //   // document.getElementsById("upload").style.backgroundColor = "green";
  // }
  // var upload = "Not Uploaded"
  render() {
    if (register == "true") {
      window.location.replace("http://localhost:3000/dashboard/profile");
    }
    return (
      <div style={{ margin: "2rem" }}>
        {/* <button id='upload' className='upload'>upload</button> */}
        <form className="forms">
          {/* {% csrf_token %} */}
          <input
            className="choose"
            name="upload"
            required={true}
            disabled={returnfunc}
            onChange={(e) => this.changeHandler(e)}
            type="file"
          />{" "}
          <br />
        </form>
        {/* <div style={{ padding: "1rem" }}>
          <button
            className="btn1"
            type="submit"
            onClick={(e) => this.submitForm(e)}
          >
            Submit
          </button>
        </div> */}
      </div>
    );
  }
}
export default Resume;
export {files}
