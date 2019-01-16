import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import {MenuItems} from "./MenuItems";

import _ from "lodash";
import {MenuSecondary} from "./MenuSecondary";
import {Hours} from "./Hours";
import Globals from "./Globals";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/drawer';


export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuDrawer: [],
            activeMenu: 0,
            activeDepth: 0
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
                this.setState({menuDrawer: data})
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null
    }

    setMenu = (passedMenuId) => {
        this.setState({activeMenu: passedMenuId});
        this.setState({activeDepth: 1});
    };

    resetMenu = () => {
        this.setState({activeMenu: 0});
        this.setState({activeDepth: 0});
    };

    render() {


        const {active} = this.props;
        const {menuDrawer, activeMenu, activeDepth} = this.state;

        let menuColumns, menuSecondary = {};
        let depthClass = 'utk-menu-depth--' + activeDepth;

        if (activeMenu === 0) {

            menuColumns = Object.entries(menuDrawer).map((columns, index) => {
                return (
                    <MenuColumns items={columns[1].data} activeMenu={this.setMenu}/>
                );
            })
            menuSecondary = <div className="utk-secondary-menu"></div>;

        } else {

            let secondary = Object.entries(menuDrawer).map((columns, index) => {
                return Object.entries(columns[1].data).map((secondary, index) => {
                    if (secondary[1].id === activeMenu) {
                        let {id, title, url, classes, target, dropdown} = secondary[1];
                        let dropdownItems = '';
                        if (dropdown) {
                            dropdownItems = Object.entries(dropdown).map((link, index) => {

                                let {title, url, classes, target} = link[1];

                                return (
                                    <a href={url} tabIndex="4">{title}</a>
                                );

                            });
                        }
                        return (
                            <div className="utk-secondary-menu">
                                <div className="utk-secondary-menu--options">
                                    <a className="utk-menu-back" tabIndex="4" onClick={this.resetMenu}>
                                        <span className="icon-left-open"></span>
                                    </a>
                                </div>
                                <MenuSecondary menuId={id} title={title} dropdownItems={dropdownItems}/>
                            </div>
                        );
                    }
                });
            });

            menuColumns = <div></div>;
            menuSecondary = secondary;
        }

        return (
            <div className={`utk-header-resources ${active} ${depthClass}`}>
                <div className="container">
                    <div className="utk-resources-menu">
                        {menuColumns}
                        {menuSecondary}
                    </div>
                    <div className="utk-resources-contact">
                        <Hours/>
                    </div>
                    <div className='utk-menu-options'>
                        <div className='utk-menu-help'>
                            <a className="utk-menu-help--item utk-menu-help--help-me">
                                <h4>Quick Help</h4>
                                <div className="utk-menu-help--item--icon">
                                    <span className="icon-chat"></span>
                                </div>
                            </a>
                            <a className="utk-menu-help--item utk-menu-help--chat">
                                <h4>Chat</h4>
                                <div className="utk-menu-help--item--icon">
                                    <span className="icon-chat"></span>
                                </div>
                            </a>
                        </div>
                        <a className="utk-resources-close">
                            <span className="icon-cancel"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}