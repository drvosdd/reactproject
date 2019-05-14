import React from "react";
import { Route } from "react-router-dom";
import "./Portal.css";
import { Header } from "./Header/Header"
import { Products} from "./Products/Products"
import { Expences } from "./Expences/Expences"
import { New_Product } from "./New_Product/New_Product"
import { Alert } from "./Alert/Alert"

export class Portal extends React.Component {
    render() {
        return (
            <div> 
                <Header />
             
                

                <Route path="/products" component={Products} />
                <Route path="/expences" component={Expences} />
                <Route path="/new_product" component={New_Product} />
                <Route path="/alert" component={Alert} />

            </div>

            
        )
    }
}