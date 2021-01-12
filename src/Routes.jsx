import React from "react";
import {Route,BrowserRouter as Router,Switch } from "react-router-dom";
import Details from './Details';
import App from './App';
const Routes = () => {
    console.log("inside route")
  
    return (
       
       
   //setting the Routes     
       <Router>
 <Switch>
<Route path='/details' component={Details} />
 <Route path='/' component={App} />
</Switch>
</Router>
         

    
    )
}

export default Routes;