import React from 'react';
import axios from 'axios';
import CurrentCompon from '../components/CurrentComponent';
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';
import ProfileComponent from '../components/ProfileComponent';
import '../styles/TrendCompon.css'

export default class CurrentComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
                thoughts : []
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({thoughts:response.data})
        })
    }
    printThoughts()
    {
        let arrayofCards = []
            for(let d of this.state.thoughts)
            {
                if(d.tag == this.props.match.params.tag) {
                    arrayofCards.push(<CurrentCompon Tags = {d.thought}></CurrentCompon>)
                }
            }
            return arrayofCards;
    }
    render()
    {
        if(this.props.match.params.username == undefined || this.props.match.params.username == "undefined")
        {
            return(
                <div>
                    <HeaderComponent></HeaderComponent>
                    <div className = "Main-Container">
                            <h1 id="heading">{this.props.match.params.tag}</h1>
                            {this.printThoughts()}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <HeaderComponent></HeaderComponent>
                    <div className = "main-Container">
                        <div className = "One-Container">
                            <ProfileComponent></ProfileComponent>
                        </div>
                        <div className = "twoContainer">
                            <h1 id="heading">{this.props.match.params.tag}</h1>
                            {this.printThoughts()}
                        </div>
                    </div>
                </div>
            )
        }
    }
}