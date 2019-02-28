import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import RobotsList from './Components/RobotsList';
import Default from './Components/Default';

class App extends Component {
render() {
    return (
<React.Fragment>
  <Navbar />
    <Switch>
    <Route exact path="/" component={RobotsList}/>
    <Route component={Default}/>
    </Switch>
</React.Fragment>
          )
        } 
}

export default App;
