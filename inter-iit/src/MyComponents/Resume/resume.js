// import { upload } from '@testing-library/user-event/dist/upload';
import React, { useRef, useState } from 'react'
import './resume.css'
import { skills } from '../Skills/skills';
// import { otherskills } from '../otherskills/otherskills'
import {otherskills} from '../otherskills/otherskills'
import axios from 'axios'

const baseURL = "http://localhost:8000/student/";

// const data = useRef({});
var formData;

class Resume extends React.Component{

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

  changeHandler(event){
    const files = event.target.files
    const rollnumber = localStorage.getItem('interiit_data').data
    formData = new FormData();
    formData.append('file',files[0]);
    formData.append('skills',JSON.stringify(skills));
    formData.append('otherskills',JSON.stringify(otherskills));
    console.log(formData)
    // this.setState(formData)
    // console.log(this.state)
    // console.log(event.target.files[0])
    // console.log(files);
    // console.log(JSON.stringify(files));
  }

  //submit
  submitForm(e){
    // e.preventDefault();
    axios.post('http://localhost:8000/student/', formData).then((resp)=>{ console.log(resp) });
    window.location.replace("http://localhost:3000/dashboard2")
      // headers: {
      //   'Content-type': 'application/json; charset=UTF-8',
      // },
    // .catch(error => {
    //       this.setState({ errorMessage: error.toString() });
    //       console.error('There was an error!', error);
    //   });
  }


  // if(status){
  //   setupload("Uploaded");
  //   document.getElementById("upload").style.backgroundColor = "green";
  //   // document.getElementsById("upload").style.backgroundColor = "green";
  // }
  // var upload = "Not Uploaded"
    render(){
      return (
        <div>
        <p>Since you already have this invite only link, we know that you're good fit. The resume is just to understand your experience in the quickest way. If you have other documents to show your skills and experience that can help in Inter IIT, feel free to upload them as well. (Highlighting this document will make our life easier)</p>
        {/* <button id='upload' className='upload'>upload</button> */}
        <form className='forms'>
          {/* {% csrf_token %} */}
          <input className='choose' name='upload' onChange={(e) => this.changeHandler(e)} type="file" /> <br />
          <button className='btn1' type='submit' onClick={(e) => this.submitForm(e)}>Submit</button>
        </form>
      </div>
      );
    }
  }

  export default Resume;