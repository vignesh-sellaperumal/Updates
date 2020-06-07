import React from 'react';
import axios from 'axios';
import TrendpageComponent from '../components/TrendpageComponent';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/TrendCompon.css';
import HeaderComponent from '../components/HeaderComponent';
import ProfileComponent from '../components/ProfileComponent';

export default class TrendComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            tags : []
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/exercises/top')
        .then(response => {
            this.setState({tags:response.data})
        })       
    }
    printTags()
    {
        let arrayofCards = []
        let count = 1;
            for(let d of this.state.tags)
            {
                arrayofCards.push(<TrendpageComponent Tags = {d} count={count} navigation={this.props.history}></TrendpageComponent>)
                count = count+1;
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
                            <h1 id="heading">What's Happening Now!</h1>
                            {this.printTags()}
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
                            <h1 id="heading">What's Happening Now!</h1>
                            {this.printTags()}
                        </div>
                    </div>
                </div>
            )
        }
    }
}