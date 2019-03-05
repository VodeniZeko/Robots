import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './App.css';
import Navbar from './Components/Navbar';
import RobotsList from './Components/RobotsList';
import Default from './Components/Default';
import {robots} from './robots';
import Searchbar from './Components/Searchbar';



class App extends Component {
render() {
    return (
  <div>
  <Navbar />
  <Searchbar />
 <RobotsList robots={robots}/>
 </div>
  
          )
     } 
}

export default App;
