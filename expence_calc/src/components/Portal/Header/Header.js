import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";

export class Header extends React.Component {
    render() {
        return (
            <section id="login"> 
                <div className="header">
                    <button className="greenwhitebutton">PRODUCTS</button>
                    <button className="ghostbutton">EXPENSES</button>
                    <div className="ap">
                        <div className="avatar">
                            <img src={avatar} alt="" width="40px"/>
                        </div>
                        <div className="potpis">
                            <p>Dejan</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}