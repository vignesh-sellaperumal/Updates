import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../styles/ProfileCompon.css';

class ProfileComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            email : '',
            username : '',
            about : '',
            password : ''
        }
    }

    render()
    {
        return(
            <div>
                <h1 id="pro">Profile!</h1>
            </div>
        )
    }
}

export default withRouter(ProfileComponent);