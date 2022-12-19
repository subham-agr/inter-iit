import React, { useState } from 'react'
import Skill from '../Skills/skills';
import Resume from '../Resume/resume'
import Otherskill from '../otherskills/otherskills';
// import Navbar from './MyComponents/Navbar/navbar';
import Navbar from '../Navbar/navbar'
import Footer from '../footer/footer';
import './mainpage.css'
import Grid from '@mui/material/Grid';
import axios from "axios";
// import { useLocation } from 'react-router-dom';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function Mainpage() {

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
    <div className='mainpage'>
      <Navbar />
      <div className="card3">
        <h1>Welcome!</h1>
        {/* {JSON.parse(localStorage.getItem('data')).data.name} */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat deserunt itaque accusantium, amet commodi veritatis tempora nobis doloribus nostrum laborum, dignissimos natus iusto iure debitis! Nobis voluptates sapiente esse odit quas laborum, quibusdam suscipit!</p>
      </div>
      <Grid container>
        <Grid item xs={6}>
          <div className="skill">
            <div className="small-header">
              <button className="rank">1</button><span>Top Skills</span>
            </div>
            <h2>Please select your top 3 skills</h2>
            <Skill />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="skill">
            <div className="small-header">
              <button className="rank">2</button><span>Other Skills</span>
            </div>
            <h2>Add your other skills</h2>
            <Otherskill />
          </div>
        </Grid>
      </Grid>
      <div className="resume">
            <div className="small-header">
              <button className="rank">3</button><span>Resume</span>
            </div>
            <h2>Resume /CV / any similar document</h2>
            <Resume />
            <h2>Thank You!</h2>
          </div>
      <Footer />
    </div>
  )
}

export default Mainpage
