import React, {Component} from 'react';
import {HoursLocation} from "./HoursLocation";
import Globals from "./Globals";

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

export class Hours extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: {},
            timestamp: 0
        };
    }

    componentDidMount() {

        fetch(Globals.URL + ENDPOINT + ROUTE, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locations: data.locations,
                    timestamp: data.timestamp
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null

    }

    render() {

        const {locations} = this.state;

        console.log(locations);

        if (Object.keys(locations).length !== 0)
            return (
                <div className="utk-hours">
                    <h4>Hours Today</h4>
                    <ul className="utk-hours--listing">
                        <HoursLocation
                            data={locations[52]}
                            label="John C. Hodges Library"/>
                        <HoursLocation
                            data={locations[225]}
                            label="Pendergrass Agriculture & Veterinary Medicine Library"/>
                        <HoursLocation
                            data={locations[226]}
                            label="George F. DeVine Music Library"/>
                        <HoursLocation
                            data={locations[227]}
                            label="Hoskins Storage & Reading Room"/>
                    </ul>
                </div>
            );

        else
            return null
    }
}