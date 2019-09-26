import React, { Component } from 'react'

export class Descriptor extends Component {
    getDescriptor = () => {
        const physical = ["tall", "glasses-wearing", "blonde", "blue-eyed", "bearded"];
        const personality = ["camper", "musician", "hiker", "animal-loving", "plant dad", "cook", "curry-eating"];
        let phrase = "The " + physical[Math.floor(Math.random() * physical.length)] + ", " + personality[Math.floor(Math.random() * personality.length)] + " guy.";
        return phrase;
    }
    
    render() {  
        return (
            <div>
                <h2>{this.getDescriptor()}</h2>
            </div>
        )
    }
}

export default Descriptor
