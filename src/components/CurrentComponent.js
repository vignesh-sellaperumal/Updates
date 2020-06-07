import React from 'react';
import  '../styles/CurrentCompon.css';
export default class CurrentComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            tag: ''
        }
    }
    render()
    {
        return(
            <div className = "Main-Container">
                <div className = "indiv-Container">
                    <h4 id="thoughts">{this.props.Tags}</h4>
                </div>
            </div>
        )
    }
}