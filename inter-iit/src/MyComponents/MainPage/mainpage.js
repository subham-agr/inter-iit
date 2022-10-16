import React, {useState} from 'react'
import Skill from '../Skills/skills';
import Resume from '../Resume/resume'
import Otherskill from '../otherskills/otherskills';
// import Navbar from './MyComponents/Navbar/navbar';
import Navbar from '../Navbar/navbar'
import Footer from '../footer/footer';
import './mainpage.css'
// import axios from "axios";
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Mainpage() {

  // let query = useQuery();
  // if(localStorage.getItem('code')===null){
  //   localStorage.setItem('code',query.get('code'))
  // }
  // // console.log(data)
  // const [isLoading, setLoading] = useState(true);
  // const [pokemon, setPokemon] = useState();
  //   if(localStorage.getItem('data')===null){
  //     if(query.get('code')===null){
  //       window.location.replace('http://localhost:3000/');
  //     }
  //     const data = {
  //       code:query.get('code'),
  //     };
  //   axios
  //   .post('http://127.0.0.1:8000/userdata', data, {headers: {"Content-Type": "application/json"}})
  //   .then((res) => {
  //     localStorage.setItem('data',JSON.stringify(res))
  //     // setTimeout(() => {
  //     //   window.location.reload();
  //     // }, 500);
  //     console.log(JSON.parse(localStorage.getItem('data')).data.name);
  //     console.log('a')
  //     // setPokemon(res.data);
  //     // setLoading(false);
  //   }
  
  //   )
  //   .catch(err => {
  //     console.error(err);
  //     // setLoading(false);
  
  //   }).finally( ()=>{
  //     console.log("hiii");
  //     if(localStorage.getItem('data')===null){
  //       alert("LOGIN PLEASE")
  //       // window.location.replace('http://localhost:3000');
  //     }
  //   });
  // }
  // // else{
  //   console.log(JSON.parse(localStorage.getItem('data')).data.name);
  //   // }
  // // }, []);

  return (
    <div className='mainpage'>
      <Navbar />
      <div className="card3">
        {/* <h1>Welcome {JSON.parse(localStorage.getItem('data')).data.name}!</h1> */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat deserunt itaque accusantium, amet commodi veritatis tempora nobis doloribus nostrum laborum, dignissimos natus iusto iure debitis! Nobis voluptates sapiente esse odit quas laborum, quibusdam suscipit!</p>
      </div>
      <div className="skill">
        <h2>Please select your top 3 skills</h2>
        <Skill />
      </div>
      <div className="skill">
      <h2>Add your other skills</h2>
        <Otherskill />
      </div>
      <div className="resume">
        <Resume />
      </div>
      <Footer />
    </div>
  )
}

export default Mainpage
