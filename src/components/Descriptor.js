import React, { Component } from 'react'

export class Descriptor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            physicalTrait: "tall",
            personalityTrait: "camper"
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.getDescriptors, 3000)
    }
    
    
    getDescriptors = () => {
        const physicalTraits = ["tall", "glasses-wearing", "blonde", "blue-eyed", "bearded"];
        const personalityTraits = ["camper", "musician", "hiker", "animal-loving", "plant dad", "cook", "curry-eating"];
        this.setState({
            physicalTrait: physicalTraits[Math.floor(Math.random() * physicalTraits.length)], 
            personalityTrait: personalityTraits[Math.floor(Math.random() * personalityTraits.length)]
        }) 
    }
    
    render() {  
        return (
            <div>
                <h2>{"The " + this.state.physicalTrait + ", " + this.state.personalityTrait + " guy."}</h2>
            </div>
        )
    }
}

export default Descriptor
