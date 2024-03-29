import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppNav from './components/AppNav';


class App extends Component {
  render() {
    return (  
      <div className= 'App'>  
          <AppNav />
      </div>
    );
  }
}

export default withStyles({
 button:{
  backgroundColor:'black'
  },
 sombra:{
   boxShadow:'0px 0px 5px rgba(0,0,0,0.5)'
 }  
})(App);
