import React from "react";
import "./Register.css";

export class Register extends React.Component {
    render() {
        return (
            <section>
                <div className="register add_margin">
                    <div>
                        <form className="form">
                            <label className="label">First Name</label>
                            <input type="email" className="input"/>
                            <label className="label">Last Name</label>
                            <input type="password" className="input"/>
                            <label className="label">E-mail</label>
                            <input type="email" className="input"/>
                            <label className="label">Date of Birth</label>
                            <input type="password" className="input"/>
                            <label className="label">Telephone</label>
                            <input type="email" className="input"/>
                            <label className="label">Country</label>
                            <input type="password" className="input"/>
                            <label className="label">Password</label>
                            <input type="password" className="input"/>
                            <br></br>
                            <button className="greenbutton">SIGN IN</button>
                        </form>
                            <p className="pRegister">Or if you don't have an account, <a className="aRegister" href=""/>Register</p>
                    </div>
                </div>
            </section>
        )
    }
}