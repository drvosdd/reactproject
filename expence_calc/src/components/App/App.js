import React from "react";
import { Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Portal } from "../Portal/Portal";
import { Products } from "../Portal/Products/Products";
import { Expences } from "../Portal/Expences/Expences"
import { New_Product } from "../Portal/New_Product/New_Product"
import { Alert } from "../Portal/Alert/Alert"
import { Header } from "../Portal/Header/Header"


export class App extends React.Component {
    render () {
        return (
            <main id="app">
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/portal" component={Portal} />
                <Route path="/header" component={Header} />
                <Route path="/products" component={Products} />
                <Route path="/expences" component={Expences} />
                <Route path="/new_product" component={New_Product} />
                <Route path="/alert" component={Alert} />
            </main>
        )
    }
}



