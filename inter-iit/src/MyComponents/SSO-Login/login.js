import React from 'react'
import './login.css'

function Login() {

  return (
    <div>
      <div className='card'>
        {/* <img className='image' src={Logo} alt="Logo Bombay 76" /> */}
        <div className="card-2">
        </div>
        <a className='btn link' href="https://gymkhana.iitb.ac.in/profiles/oauth/authorize/?client_id=MmuuRsRfMQaYJc2V8ABVq9CHcTvFC0GwCn7Mh5OZ&response_type=code&scope=profile picture&redirect_uri=http://localhost:3000/dashboard">Login with SSO</a>
        <div className="footers">
        Developed by Subham Agrawal | Institute Technical Council with <span className='heart'>♥</span>
      </div>
      </div>
    </div>
  )
}

export default Login
