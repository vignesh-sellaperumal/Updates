import React from 'react'
import logo from '../Resources/images/logo_two.png';
import '../styles/HeaderCompon.css';
import { BrowserRouter, Route, NavLink, withRouter } from "react-router-dom";

class HeaderComponent extends React.Component{
    constructor()
    {
        super();

        this.state = {
            user : 'Login'
        }
    }
    componentDidMount(){
        if(this.props.match.params.username != undefined){
            if(this.props.match.params.username != "undefined"){
                this.setState({user: this.props.match.params.username+"  :)  "+"logout"})
            }
        }
    }
    redirectToTrending()
    {
        this.props.history.push('/user/'+this.props.match.params.username)
    }
    redirectToPost()
    {
        if(this.props.match.params.username == undefined || this.props.match.params.username == "undefined"){
                this.props.history.push('/login')
        }
        else{
            this.props.history.push('/post/'+this.props.match.params.username)
        }
    }
    redirectToLogin()
    {
        this.props.history.push('/login')
    }
    render(){
        return(
            <div class="Container">
                <div class="top-container">
                    <div class="top-one">
                        <img src={logo} alt="Logo" id="white" onClick={() => {this.redirectToTrending()}}/>
                    </div>
                    <div class="top-two">
                    <h3 className="nav-trend" onClick={() => {this.redirectToTrending()}}>Trending</h3>
                    <h3 className="nav-trend" onClick={() => {this.redirectToPost()}}>Post</h3>
                    <h3 id="nav-user" onClick={() => {this.redirectToLogin()}}>{this.state.user}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HeaderComponent);