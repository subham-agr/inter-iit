import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react'
import './resume.css'

function Resume() {

  const [status, setstatus] = useState(false)

  function Submit() {
    setstatus(true);
  }

  var upload = "Not Uploaded"

  if(status){
    upload = "Uploaded"
    document.getElementById("upload").style.backgroundColor = "green";
    // document.getElementsById("upload").style.backgroundColor = "green";
  }

  return (
    <div>
      <h1>Resume /CV / any similar document</h1>
      <p>Since you already have this invite only link, we know that you're good fit. The resume is just to understand your experience in the quickest way. If you have other documents to show your skills and experience that can help in Inter IIT, feel free to upload them as well. (Highlighting this document will make our life easier)</p>
      <button id='upload' className='upload'>{upload}</button>
      <form action="">
        <input type="file" /> <br />
        <button onClick={Submit}>Upload</button>
      </form>
    </div>
  )
}

export default Resume
