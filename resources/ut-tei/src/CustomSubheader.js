import React, {Component} from 'react';
import {PolkHero} from "./components/PolkHero";

/* header component */
class CustomSubheader extends Component {

    render() {

        return (
            <PolkHero key="polk-0" headerCollapse={this.headerCollapse} />
        );
    }
}

export default CustomSubheader;
