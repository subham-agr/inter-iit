import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react'
import './resume.css'

class Resume extends React.Component{
  constructor(){
    super();
    this.state={
      file:''
    }
    this.changeHandler=this.changeHandler.bind(this);
  }

  //change Handler
  changeHandler(event){
    console.log(event)
    this.setState({
      [event.target.name]:event.target.value
    });
    console.log("file changed");
  }

  //submit
  submitForm(e){
    e.preventDefault();
    fetch('/student/',{
      method:'POST',
      body:JSON.stringify(this.state),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            file:'',
        })
    .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
  }


  // if(status){
  //   setupload("Uploaded");
  //   document.getElementById("upload").style.backgroundColor = "green";
  //   // document.getElementsById("upload").style.backgroundColor = "green";
  // }
  // var upload = "Not Uploaded"

  render() {
    return (
      <div>
      <h1>Resume /CV / any similar document</h1>
      <p>Since you already have this invite only link, we know that you're good fit. The resume is just to understand your experience in the quickest way. If you have other documents to show your skills and experience that can help in Inter IIT, feel free to upload them as well. (Highlighting this document will make our life easier)</p>
      {/* <button id='upload' className='upload'>upload</button> */}
      <form>
        {/* {% csrf_token %} */}
        <input name='file' value={this.state.file} onChange={this.changeHandler} type="file" /> <br />
        <button type='submit' onClick={this.submitForm}>Upload</button>
      </form>
    </div>
    )
  }
}

export default Resume
