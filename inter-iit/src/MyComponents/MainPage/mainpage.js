import React, { useState } from "react";
import Skill from "../Skills/skills";
import Resume from "../Resume/resume";
import Otherskill from "../otherskills/otherskills";
// import Navbar from './MyComponents/Navbar/navbar';
import { alpha, styled } from '@mui/material/styles';
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";
import "./mainpage.css";
import Grid from "@mui/material/Grid";
import axios from "axios";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from '@mui/icons-material/Phone';
import { InputAdornment, TextField } from "@mui/material";
import { formData } from "../Resume/resume";
// import { useLocation } from 'react-router-dom';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

var register = localStorage.getItem("isregistered");

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#1976d2',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiInputLabel-root': {
    color: '#1976d2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
});

var phonenumber;
// const [phonenumber, setphone] = React.useState()

function Mainpage() {

  if (register == "true") {
    window.location.replace("http://localhost:3000/dashboard/profile");
  }

  function handleChange(event) {
    // setphone(event.target.value)
    // setphone(event.target.value);
    phonenumber = event.target.value
  }

  function submitForm(e) {
    // e.preventDefault();
    // axios.post('http://localhost:8000/student/', formData).then((resp)=>{ console.log(resp) });
    const token = JSON.parse(localStorage.getItem("interiit_data")).data.token;
    console.log(token);
    axios
      .post("http://localhost:8000/student", formData, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((resp) => {
        if (resp.data.success == true) {
          // setregister(true)
          window.location.replace("http://localhost:3000/dashboard/profile");
        }
      });
    // headers: {
    //   'Content-type': 'application/json; charset=UTF-8',
    // },
    // .catch(error => {
    //       this.setState({ errorMessage: error.toString() });
    //       console.error('There was an error!', error);
    //   });
  }
  // let query = useQuery();
  // if(localStorage.getItem('interiit_code')===null){
  //   localStorage.setItem('interiit_code',query.get('code'))
  // }
  // // console.log(data)
  // const [isLoading, setLoading] = useState(true);
  // const [pokemon, setPokemon] = useState();
  //   if(localStorage.getItem('interiit_data')===null){
  //     if(query.get('code')===null){
  //       window.location.replace('http://localhost:3000/');
  //     }
  //     const data = {
  //       code:query.get('code'),
  //     };

  //   axios
  //   .post('http://127.0.0.1:8000/userdata', data, {headers: {"Content-Type": "application/json"}})
  //   .then((res) => {
  //     localStorage.setItem('interiit_data',JSON.stringify(res))
  //     // setTimeout(() => {
  //     //   window.location.reload();
  //     // }, 500);
  //     console.log(JSON.parse(localStorage.getItem('interiit_data')).data.name);
  //     console.log('a')
  //     // setPokemon(res.data);
  //     // setLoading(false);
  //   }

  //   )
  //   .catch(err => {
  //     console.error(err);
  //     // setLoading(false);

  //   }).finally( ()=>{
  //     if(localStorage.getItem('interiit_code')===null){
  //       alert("LOGIN PLEASE")
  //       window.location.replace('http://localhost:3000');
  //     }
  //   });
  // }
  // else{
  //   console.log(JSON.parse(localStorage.getItem('interiit_data')).data.name);
  //   }
  // // }, []);

  return (
    <div className="mainpage">
      <Navbar />
      <div className="card3">
        <h1
          style={{ paddingLeft: "2rem", paddingTop: "1.2rem" }}
          className="myfont"
        >
          Welcome!
        </h1>
        {/* {JSON.parse(localStorage.getItem('data')).data.name} */}
        <p style={{ paddingLeft: "2rem" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          deserunt itaque accusantium, amet commodi veritatis tempora nobis
          doloribus nostrum laborum, dignissimos natus iusto iure debitis! Nobis
          voluptates sapiente esse odit quas laborum, quibusdam suscipit!
        </p>
      </div>
      <Grid container>
        <Grid item xs={6}>
          <div className="skill griditem">
            <div className="small-header" style={{ paddingBottom: "1rem" }}>
              {/* <button className="rank">1</button><span>Top Skills</span> */}
              <span class="badge text-bg-primary">1</span> <b>Top Skills</b>
            </div>
            <h2>Please select your top 3 skills</h2>
            <Skill />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="skill griditem">
            <div className="small-header" style={{ paddingBottom: "1rem" }}>
              <span class="badge text-bg-primary">2</span> <b>Other Skills</b>
            </div>
            <h2>Add your other skills</h2>
            <Otherskill />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="phonenumber griditem">
            <div className="small-header" style={{ paddingBottom: "1rem" }}>
              <span class="badge text-bg-primary">3</span> <b>Phone Number</b>
            </div>
            <h2>Phone Number</h2>
            <div className="phonenumberfield">
              <CssTextField
                id="input-with-icon-textfield"
                label="Whatsapp No."
                type="number"
                placeholder="94923XXXXX"
                sx={{backgroundColor: "#ffffff"}}
                // color="success"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{color: "1976d2"}} variant="filled" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                onChange={handleChange}
              />
            </div>
            {/* <h2>Thank You!</h2> */}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="resume griditem">
            <div className="small-header" style={{ paddingBottom: "1rem" }}>
              <span class="badge text-bg-primary">4</span> <b>Resume</b>
            </div>
            <h2>Resume / CV / any similar document</h2>
            <Resume />
            {/* <h2>Thank You!</h2> */}
          </div>
        </Grid>
      </Grid>
      <div style={{ padding: "1rem" }}>
          <button
            className="btn1"
            type="submit"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
export {phonenumber}
