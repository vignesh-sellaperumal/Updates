import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../styles/ProfileCompon.css';
import HeaderComponent from '../components/HeaderComponent';

class ProfileComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            details : [],
            email : '',
            username : '',
            about : '',
            password : ''
        }
    }
    componentDidMount()
    {
        axios.get('https://backendtrends.herokuapp.com/details/')
        .then(response => {
            this.setState({details:response.data})
            for(let detail of this.state.details)
            {
                if(detail.username == this.props.match.params.username)
                {
                    this.setState({email: detail.email, username: detail.username, about: detail.about})
                }
            }
        })       
    }

    render()
    {
        return(
            <div>
                <HeaderComponent></HeaderComponent>
                <div class="card">
                    <div>
                       <h1 id="photo"></h1>
                    </div>
                    <p className="pro-label">Username</p>
                    <h1 id="pro-name">{this.state.username}</h1>
                    <p className="pro-label">Email</p>
                    <h1 id="pro-email">{this.state.email}</h1>
                    <p className="pro-label">About</p>
                    <p id="pro-about">{this.state.about}</p>
                    <button id="pro-edit">Edit</button>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileComponent);
