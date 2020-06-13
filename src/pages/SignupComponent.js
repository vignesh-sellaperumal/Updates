import React from 'react';
import '../styles/LoginCompon.css';
import { NavLink } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import HeaderComponent from '../components/HeaderComponent';
import axios from 'axios';

export default class SignupComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            email : '',
            username : '',
            about : '',
            password : '',
            confirmPassword : ''
        }
    }
    updateEmail(newname){
        this.setState({email:newname});
    }
    updateUsername(newname){
        this.setState({username:newname});
    }
    updateAbout(newname){
        this.setState({about:newname});
    }
    updatePassword(newname){
        this.setState({password:newname});
    }
    updateConfirmPassword(newname){
        this.setState({confirmPassword:newname});
    }

    redirectToLogin = () => {
            axios.post(
                'http://localhost:5000/details/add',
                { 
                  email: this.state.email,
                  username: this.state.username,
                  about: this.state.about,
                  password: this.state.password },
                { headers: { 'Content-Type': 'application/json' } }
              ).then(res => alert("signed up successfully! :)"));
            this.props.history.push("/login");
    }
    render()
    {
        return(
            <div>
                <HeaderComponent></HeaderComponent>
            <div className = "Main-Container">
                <div class="signin-container">
                    <div class="box-cont">
                        <div class="inner-cont">
                            <h3 id="box-head">SIGN IN</h3>
                            <form>
                            <label class="label">Email</label>
                                <InputComponent type="text" placeholder="email" className="details" value={this.state.email} onChange={(event) => this.updateEmail(event.target.value)}></InputComponent>
                                <label class="label">Username</label>
                                <InputComponent type="text" placeholder="username" className="details" value={this.state.username} onChange={(event) => this.updateUsername(event.target.value)}></InputComponent>
                                <label class="label">About</label>
                                <textarea className="middle" id="about" placeholder="write something about you!" value={this.state.about} onChange={(event) => this.updateAbout(event.target.value)}></textarea> 
                                <label  class="label">Password</label>
                                <InputComponent type="password" placeholder="password" className="details" value={this.state.password} onChange={(event) => this.updatePassword(event.target.value)}></InputComponent>
                                <label  class="label">Confirm Password</label>
                                <InputComponent type="password" placeholder="confirm password" className="details" value={this.state.confirmPassword} onChange={(event) => this.updateConfirmPassword(event.target.value)}></InputComponent>
                                <ButtonComponent type="button" value="Sign in" id="login" onClick = {this.redirectToLogin}></ButtonComponent>                         
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}