import React from "react";
import "./Alert.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import { Header } from "../Header/Header";

export class Alert extends React.Component {
    render() {
        return (
            <section id="login">
            <div><Header /></div> 
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
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>

                    <tr className="tableWhite">
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><i className="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-trash-alt"></i></td>
                    </tr>
                
                    </table>
       
                </div>
    
                <div className="twobuttons">
                    <button className="greenbuttonproducts">NEW CALCULATION</button>
                    <button className="darkbuttonproducts">NEW PRODUCT</button>
                </div>

                <div className="wrapper2">
                    <div className="alert">
                        <b>Delete Product</b>
                        <p className="alertP">You are about to delete this product.
                            Are you sure you wish to continue?</p>
                        <div className="twobuttonsalert">
                        <div className="alertWhiteButton"><buton><p className="cancel">CANCEL</p></buton></div>
                        <div className="alertDarkButton"><buton><p className="delete"></p>DELETE</buton></div>
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}