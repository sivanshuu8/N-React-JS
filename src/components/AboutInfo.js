import React from "react";


class AboutInfo extends React.Component {
    constructor() {
        super();

        this.state = {
            information: {
                name: 'Dummy name',
                location: 'default'
            }
        }
        
    }

   
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/SIVANSHUU8');
        const json = await data.json()

        this.setState({
            information: json,
        });
    }


    render() {
        const { name, location, bio} = this.state.information;

        return(
            <div className="new-container">
                <h1 className="new-header">Name: {name}</h1>
                <h2 className="new-content">Location: {location}</h2>
                <h2 className="new-content">Bio: {bio}</h2>
            </div>
        )
    }
}

export default AboutInfo;