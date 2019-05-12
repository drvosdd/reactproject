import React from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import { Header } from "../Header/Header";
import { Alert } from "../Alert/Alert";


export class Products extends React.Component {
    render() {
        return (
            
            <section id="login">
            
                <div className="naslov">
                    <div className="products">
                        Products
                    </div>
                    <div className="myList">
                        <p> Filter by: </p>
                        <select className="selector">
                            <option value="1">Highest Price</option>
                            <option value="2">Lowest Price</option>
                            <option value="3">Latest Purchases</option>
                        </select>
                    </div>
                </div>

                <div>

                    <table className="tableBold">
                        <tr>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Product Type
                            </th>
                            <th>
                                Product Description
                            </th>
                            <th>
                                Purchase Date
                            </th>
                            <th>
                                Product Price
                            </th>
                            <th>
                                Edit / Delete
                            </th>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td><button className="far fa-edit edit-icon">&nbsp;</button> &nbsp;
                                <button className="far fa-edit delete-icon"><NavLink to="/alert"> &nbsp; </NavLink></button>
                            </td>
                        </tr>

                    </table>

                </div>

                <div className="twobuttons">
                    <button className="greenbuttonproducts">NEW CALCULATION</button>
                    <button className="darkbuttonproducts"> <NavLink to="/new_product"> NEW PRODUCT </NavLink></button>
                </div>
                
            </section>
        )
    }
}