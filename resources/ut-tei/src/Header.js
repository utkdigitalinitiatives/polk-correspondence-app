import React, {Component} from 'react';

/* libraries */
import debounce from "lodash/debounce"
import findIndex from "lodash/findIndex"

/* components */
import {Menu} from "./components/Menu";
import {Search} from "./components/Search";

/* media */
import primary_logo from './media/ut-knoxville.svg';
import square_logo from './media/ut-square.svg';
import {PolkHero} from "./components/custom/PolkHero";
import {Placeholder} from "./components/Placeholder";

/* header component */
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showResources: false,
            showSearch: false,
            headerCollapse: false
        };

        this.toggleResources = this.toggleResources.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.headerCollapse = this.headerCollapse.bind(this);
    };

    toggleResources (e) {
        e.stopPropagation();
        this.setState({showResources: true}, () => {
            document.addEventListener('click', this.closeResources);
            document.body.classList.add('utk-menu-open');
        });
    };

    closeResources = (e) => {
        e.stopPropagation();
        let isHeader = findIndex(e.path, {'className': 'utk-header utk-header-expand-menu'});
        let isClose = findIndex(e.path, {'className': 'utk-resources-close'});
        let isMenuButton = findIndex(e.path, {'className': 'utk-menu-trigger utk-header-expand-menu'});

        if (isHeader === -1 || isClose !== -1 || isMenuButton !== -1) {
            this.setState({showResources: false}, () => {
                document.removeEventListener('click', this.closeResources);
                document.body.classList.remove('utk-menu-open');
            });
        }
    };

    toggleSearch (e) {
        e.stopPropagation();
        this.setState({showSearch: true}, () => {
            document.addEventListener('click', this.closeSearch);
            this.refs.search.utkSearchField.focus();
            this.refs.search.utkSearchField.value = '';
            document.body.classList.add('utk-search-open');
        });
    };

    closeSearch = (e) => {
        e.stopPropagation();
        let isSearch = findIndex(e.path, {'className': 'utk-search-wrapper'});
        if (isSearch === -1) {
            this.setState({showSearch: false}, () => {
                document.removeEventListener('click', this.closeSearch);
                document.body.classList.remove('utk-search-open');
            });
        }
    };

    headerCollapse(status){
        this.setState({headerCollapse: status});
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    render() {

        const {showResources, showSearch, headerCollapse} = this.state;

        let resourcesClass = '';
        let rolloutClass = 'utk-rollin';
        if (showResources === true) {
            resourcesClass = ' utk-header-expand-menu';
            rolloutClass = 'utk-rollout';
        }

        let searchClass = '';
        let searchClassHeader = '';
        if (showSearch === true) {
            searchClass = ' utk-header-expand-search';
            searchClassHeader = ' utk-search-active';
        }

        let headerCollapseClass = 'utk-header-expand';
        if (headerCollapse === true) {
            headerCollapseClass = 'utk-header-collapse';
        }

        return (
            <div className={headerCollapseClass}>
            <div id="utk-header-watch"></div>
            <div id="utk-header-trigger"></div>
            <header className={`utk-header`}>
                <div className={`utk-header-main`}>
                    <div className="container">

                        <div className="utk-logo-wrapper">
                            <a href="https://www.utk.edu">
                                <img src={primary_logo} className="utk-logo utk-logo-primary" alt="University of Tennessee Libraries" />
                                <img src={square_logo} className="utk-logo utk-logo-square" alt="University of Tennessee Libraries" />
                            </a>
                            <a href="https://www.lib.utk.edu" className="utk-logo-unit">Libraries</a>
                        </div>

                        <div className="utk-header-actions">

                            <div className="utk-header-actions--item utk-header-actions--home">
                                <a href="https://lib.utk.edu">lib.utk.edu</a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--resources">
                                <a onClick={this.toggleResources} className={`utk-menu-trigger${resourcesClass}`}>
                                    <span className="icon-menu"></span>
                                    <span className="icon-cancel"></span>
                                    <em>Menu</em>
                                </a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--search">
                                <a onClick={this.toggleSearch} className={searchClass}>
                                    <span className="icon-search"></span>
                                    <span className="icon-cancel"></span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="utk-header-super">
                    <div className="container">
                        <ul className="utk-header-super--menu">
                            <li><a href="#">Hours</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Databases</a></li>
                            <li><a href="#">Services</a></li>
                            <li className="utk-header-super--menu--options">
                            <div className="utk-header-actions--item utk-header-actions--resources">
                                <a onClick={this.toggleResources} className={`utk-menu-trigger${resourcesClass}`}>
                                    <span className="icon-menu"></span>
                                    <span className="icon-cancel"></span>
                                    <em>Menu</em>
                                </a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--search">
                                <a onClick={this.toggleSearch} className={searchClass}>
                                    <span className="icon-search"></span>
                                    <span className="icon-cancel"></span>
                                </a>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Menu active={resourcesClass} />
                <Search showSearch={showSearch} ref="search" />
            </header>
            <div className="utk-body-overlay"></div>
            <PolkHero headerCollapse={this.headerCollapse} />
            <Placeholder/>
            </div>
        );
    }
}

export default Header;
