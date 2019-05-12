import React from "react";
import "./New_Product.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import { Header } from "../Header/Header";

export class New_Product extends React.Component {
    render() {
        return (
            <section id="login"> 
            <div><Header /></div>
                <div className="naslov">
                    <div className="expences">
                        New Product
                    </div>
                </div>

                <div className="wrapper">
                    <div className="newproduct">
                        <form className="form3">
                            <label className="label">Product Name</label>
                            <input type="text" className="input"/>
                            <label className="label">Product Description</label>
                            <input type="text" className="input"/>
                            <label className="label">Product Type</label>
                            <input type="text" className="input"/>
                            <label className="label">Purchase Date</label>
                            <input type="text" className="input"/>
                            <label className="label">Product Price</label>
                            <input type="text" className="input"/>
                            <br></br>
                            <button className="greenbutton">SIGN IN</button>
                        </form>
                    </div>
                
                    <div className="newproduct2">
                        <form className="form2">
                            <div className="addPlus">
                                <a href=""><i id="logo" className="fas fa-plus-circle"></i></a>
                            </div>
                    
                            <label className="label">You are creating a new product</label>
                
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}