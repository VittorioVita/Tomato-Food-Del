import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'


const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type='text' placeholder='Nome' required />}
                <input type="email" name="" id="" placeholder='Email' required />
                <input type="password" required placeholder='Password' />
            </div>    
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required />
                <p>Per continuare, Accetto i termini e le condizioni riguardante la nostra Privacy Policy</p>
            </div>
            {currState === "Login"
            ?<p>Creare un nuovo Account? <span onClick={()=>setCurrState("Sign Up")}>Clicca Qui</span></p>
            :<p>Hai gia' un account? <span onClick={()=>setCurrState("Login")} >Accedi Qui</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup