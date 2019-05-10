import React from "react";
import { Route } from "react-router-dom";
import "./Portal.css";
import { NavLink } from "react-router-dom";
import { Header } from "Header/Header"
import { Products} from "Products/Products"
import { Expences } from "Expences/Expences"

export class Portal extends React.Component {
    render() {
        return (
            <div id="login"> 
                <Header />

                <Route path="/products" component={Products} />
                <Route path="/expences" component={Expences} />
            </div>

            
        )
    }
}