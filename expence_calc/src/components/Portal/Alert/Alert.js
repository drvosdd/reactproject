import React from "react";
import "./Alert.css";
import { NavLink } from "react-router-dom";
import { Products } from "../Products/Products";

export class Alert extends React.Component {
    render() {
        return (
            <section id="login">
            
            <div><Products /></div>  

                <div className="wrapper2">
                    <div className="alert">
                        <b>Delete Product</b>
                        <p className="alertP">You are about to delete this product.
                            Are you sure you wish to continue?</p>
                        <div className="twobuttonsalert">
                        <div className="alertWhiteButton"><buton><p><NavLink to="/products" className="cancel">CANCEL</NavLink></p></buton></div>
                        <div className="alertDarkButton"><buton><p className="delete"></p>DELETE</buton></div>
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}