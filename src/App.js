import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrendComponent from './pages/TrendComponent';
import CurrentComponent from './pages/CurrentComponent';
import PostComponent from './pages/PostComponent';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './pages/LoginComponent';
import SignupComponent from './pages/SignupComponent';
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
  constructor()
  {
    super();
  }
  componentDidMount() {
    window.addEventListener("popstate", this.onBackButtonEvent)
  }
  
  componentWillUnmount() {
    window.removeEventListener("popstate", this.onBackButtonEvent)
  }
  
  onBackButtonEvent = () => {
    window.history.forward()
  }
  render()
  {
    return (
      <BrowserRouter>
      <Route exact path={"/"} component={TrendComponent} />
      <Route exact path={"/user/:username"} component={TrendComponent} />
      <Route exact path={"/login"} component={LoginComponent} />
      <Route exact path={"/signup"} component={SignupComponent} />
      <Route exact path={"/current/:username/:tag"} component={CurrentComponent} />
      <Route exact path={"/post/:username"} component={PostComponent} />
      </BrowserRouter>
     );
  }
}

export default App;