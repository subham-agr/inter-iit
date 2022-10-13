import React from 'react'
import './login.css'

function Login() {
  return (
    <div>
      <div className='card'>
        {/* <img className='image' src={Logo} alt="Logo Bombay 76" /> */}
        <div className="card-2">
        </div>
        <a className='btn link' href='/dashboard'>Login with SSO</a>
        <div className="footer">
        Developed by Subham Agrawal | Institute Technical Council with <span className='heart'>♥</span>
      </div>
      </div>
    </div>
  )
}

export default Login
