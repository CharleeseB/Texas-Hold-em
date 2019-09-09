import React from 'react';
import Card from "./Cards"


function PokerHand(props){
    console.log(props)
    let hand = props.cards.map((card,i)=>{
        return(
            <Card key={i} card={card} />
        )
    })
return(
    <div className="poker-hand col-sm-12">
       {hand}
    </div>
)

}


export default PokerHand;