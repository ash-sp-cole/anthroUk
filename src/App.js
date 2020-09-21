import React from 'react';
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Activities from "./Components/Activities";
import Contact from "./Components/Contact";
import Header from './Components/Header';
import School from "./Components/Activities/SchoolSpirtual";
import SteinerHouse from "./Components/Activities/RudolfSteinerHouse";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>


        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/activities" component={Activities} />
          <Route path="/contact" component={Contact} />
          <Route path="/school-of-spiritual-science" component={School}/>
          <Route path="/rudolf-steiner-house" component={SteinerHouse}/>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
