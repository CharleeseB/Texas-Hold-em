import React, { Component } from 'react';
// import App from '../App';
import "./PokerTable.css";
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck';

class PokerTable extends Component{
    constructor(){
        super();
        this.Deck =new Deck();
        this.Deck.create();
        this.Deck.shuffle();
        // this.Deck.deal();
        console.log(this.Deck.cards)
        this.state ={
            playerHand: [],
            dealerHand: [],
            CommunityHand: []
        }
    }

    prepDeck =()=>{
        const card1 = this.Deck.cards.shift();
        const card2 = this.Deck.cards.shift();
        const card3 = this.Deck.cards.shift();
        const card4 = this.Deck.cards.shift();
        this.setState({
            playerHand:[card1,card3],
            dealerHand:[card2,card4]
        })
    }

    render(){
        return(
            <div className="the-table col-sm-12">
                <PokerHand cards ={this.state.playerHand} />
                <PokerHand cards ={this.state.CommunityHand} />
                <PokerHand cards ={this.state.dealerHand} />
                <button onClick={this.prepDeck} className="btn btn-primary">Start</button>
            </div>
        )
    }
}

export default PokerTable;