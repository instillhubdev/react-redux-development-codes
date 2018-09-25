import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/posts/:year?/:month?" exact component={Posts} />
          <Route path="/products/:id" exact component={ProductDetails} />
          <Route path="/products" exact component={Products} />
          <Redirect from="/messages" to="/posts"/>
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/" exact render={props => <Home {...props} />} />
          <Route path='/admin' component={Dashboard}/>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
