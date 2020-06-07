import React from 'react';
import '../styles/LoginCompon.css';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import HeaderComponent from '../components/HeaderComponent';
import axios from 'axios';

export default class LoginComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            username : '',
            password : ''
        }
    }
    updateUsername(newname){
        this.setState({username:newname});
    }
    updatePassword(newname){
        this.setState({password:newname});
    }


    redirectToHome = () =>
    {
        axios.get('http://localhost:5000/details/')
        .then(response => {
            const datas = response.data;
            for(let data of datas)
            {
                if(data.username==this.state.username){
                    if(data.password==this.state.password){
                        this.props.history.replace("/user/"+this.state.username);
                    }
                    else{
                        alert('please verify username or password!');
                        this.props.history.push("/login");
                    } 
                }
            }
        })  
    }
    render()
    {
        return(
            <div>
                <HeaderComponent></HeaderComponent>
            <div className = "Main-Container">
                <div class="login-container">
                    <div class="box-cont">
                        <div class="inner-cont">
                            <h3 id="box-head">LOGIN</h3>
                            <form>
                                <label class="label">Username</label>
                                <InputComponent type="text" placeholder="username" className="details" value={this.state.username} onChange={(event) => this.updateUsername(event.target.value)}></InputComponent>
                                <label  class="label">Password</label>
                                <InputComponent type="password" placeholder="password" className="details" value={this.state.password} onChange={(event) => this.updatePassword(event.target.value)}></InputComponent>
                                <a href="#" id="forgot">Forgot Password?</a>
                                <ButtonComponent type="button" value="Login" id="login" onClick = {this.redirectToHome}></ButtonComponent>                         
                            </form>
                        </div>
                    </div>
                    
                    <div class="last-cont">
                        <h4 id="sign-up">Don't have an account? <NavLink to='/signup' id="newSignup">Sign up</NavLink></h4>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}