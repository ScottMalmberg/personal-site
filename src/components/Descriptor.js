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
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    getDescriptors = () => {
        const physicalTraits = ["tall", "glasses-wearing", "blonde", "blue-eyed", "bearded", "sandals-wearing", "curly-haired"];
        const personalityTraits = ["camper", "musician", "hiker", "animal-loving", "plant dad", "cook", "curry-eating", "dog/cat person", "developer", "kombucha-brewing", "bread-making"];
        this.setState({
            physicalTrait: physicalTraits[Math.floor(Math.random() * physicalTraits.length)], 
            personalityTrait: personalityTraits[Math.floor(Math.random() * personalityTraits.length)]
        }) 
    }
    
    render() {  
        return (
            <div style={{minHeight: '145px'}}>
                <h2 style={{textAlign: "center"}}>{"The " + this.state.physicalTrait + ", " + this.state.personalityTrait + " guy."}</h2>
            </div>
        )
    }
}

export default Descriptor
