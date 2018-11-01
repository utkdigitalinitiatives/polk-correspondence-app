import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PolkBackground from '../../media/custom/james-k-polk-correspondence.jpg';
import LogoNHPRC from '../../media/custom/nhprc-logo-l.jpg';
import LogoNEH from '../../media/custom/NEH_h-logo_03_all-black.svg';
import LogoNewfoundPress from '../../media/custom/newfound-press-logo.svg';
import debounce from "lodash/debounce";

export class PolkHero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heroShrink: true,
            polkRoot: false
        };

        this.watchPolk = this.watchPolk.bind(this); // Here
        this.headerCollapse = this.headerCollapse.bind(this);
    };

    headerCollapse(status){
        this.props.headerCollapse(status);
    }

    buildLandingPage() {
        if (document.getElementById('document-pane')) {
        const documentPaneContent = document.getElementById('document-pane').getElementsByClassName('content')[0];
            const landingPage = document.createElement('div');
            landingPage.classList.add('polk-logos');
            landingPage.classList.add('row');
            landingPage.innerHTML =
                "<div class='col-sm-4 col-xs-12'><img src='" + LogoNHPRC + "' alt='National Archives: National Historical Publications & Records Commission'/></div>" +
                "<div class='col-sm-4 col-xs-12'><img src='" + LogoNEH + "' alt='National Endowment for the Humanities'/></div>" +
                "<div class='col-sm-4 col-xs-12'><img src='" + LogoNewfoundPress + "' alt='Newfound Press'/></div>"
            ;
            documentPaneContent.appendChild(landingPage);
        }
    }

    watchPolk() {

        const urlParams = new URLSearchParams(window.location.search);
        const defaultRoot = '1.4.2.4';
        const urlLocation = window.location.pathname;
        const searchFile = 'search.html';

        if (urlParams.has('root')) {
            let root = urlParams.get('root');
            if (root === defaultRoot) {
                this.setState({heroShrink: false});
                this.setState({polkRoot: true});
                this.buildLandingPage();
                document.addEventListener('scroll', this.trackScrolling);
            } else {
                this.setState({heroShrink: true});
                this.setState({polkRoot: false});
            }
        } else if (urlParams.has('id')) {
            this.setState({heroShrink: true});
            this.setState({polkRoot: false});
        } else if (urlLocation.includes(searchFile)) {
            this.setState({heroShrink: true});
            this.setState({polkRoot: false});
        } else {
            this.setState({heroShrink: false});
            this.setState({polkRoot: true});
            this.buildLandingPage();
            document.addEventListener('scroll', this.trackScrolling);
        }
    }

    isTop(el) {
        return el.getBoundingClientRect().top;
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom;
    }

    componentWillMount() {
        setInterval(this.watchPolk(), 25);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const collapseTrigger = document.getElementById('utk-hero-polk-trigger');
        const expandTrigger = document.getElementById("placeholder");

        if (this.state.heroShrink === false) {
            if (this.isBottom(collapseTrigger) < 205) {
                this.setState({heroShrink: true});
                this.headerCollapse(true);
            }
        } else {
            if (this.isTop(expandTrigger) > 204) {
                this.setState({heroShrink: false});
                this.headerCollapse(false);
            }
        }
    };

    render() {

        let {heroShrink} = this.state;
        let utkHeroClass = 'utk-custom-hero-shrink';

        if (heroShrink === true) {
            utkHeroClass = 'utk-custom-hero-shrink';
        } else {
            utkHeroClass = 'utk-custom-hero-large';
        }

        return (
            <div id="utk-hero-polk" className={`utk-custom-hero ${utkHeroClass}`}>
                <div className="container">
                    <div className="utk-custom-hero--wrap">
                        <div className="utk-custom-hero--title">
                            <h1>Correspondence of <em className="font-script">James K. Polk</em></h1>
                            <h2>Transcriptions April 1848–June 1849</h2>
                        </div>
                    </div>
                </div>
                <div className="utk-custom-hero--background" style={{backgroundImage: "url(" + PolkBackground + ")"}}>
                </div>
                <span id="utk-hero-polk-trigger"></span>
            </div>
        )
    }

}

PolkHero.propTypes = {
    headerCollapse: PropTypes.func
};