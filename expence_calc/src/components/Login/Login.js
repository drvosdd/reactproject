import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

export class Login extends React.Component {
    render() {
        return (
            <section id="login"> 
                <div className="register">
                    <div>
                        <form className="form">
                            <label className="label">E-mail</label>
                            <input type="email" className="input"/>
                            <label className="label">Password</label>
                            <input type="password" className="input"/>
                            <br></br>
                            <br></br>
                            <button className="greenbutton">SIGN IN</button>
                        </form>
                        <p className="pRegister">Or if you don't have an account, <NavLink className="aRegister" to="/Register">Register</NavLink></p>
                    </div>
                </div>
            </section>
        )
    }
}