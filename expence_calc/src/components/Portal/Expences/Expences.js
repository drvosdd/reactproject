import React from "react";
import "./Expences.css";

export class Expences extends React.Component {
    render() {
        return (
            <section id="login"> 
            
                <div className="naslov">
                    <div className="expences">
                        Expenses
                    </div>
                </div>

                <div>
                    <div className="twobuttonsexpences">
                        <button className="greenbuttonproducts"><b>MONTHLY</b></button>
                        <button className="greenbuttonghost">YEARLY</button>
                        <div className="myListExpences">
                            <p>
                                <label>Choose Month</label>
                                <select className="selector">
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </p>
                        </div>
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
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>

                        <tr className="tableWhite">
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                        </tr>
                    </table>
                </div>

                <div className="total">
                    <p className="totalPar">Total spent: 1205 den.</p>
                </div>
            </section>
        )
    }
}