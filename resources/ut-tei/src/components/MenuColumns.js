import React, {Component} from 'react';
import {MenuItems} from './MenuItems';

import uniqueId from "lodash/uniqueId"
import debounce from "lodash/debounce";

export class MenuColumns extends Component {

    constructor(props) {
        super(props);

        this.state = {
            updateMenuId: null
        };
    }

    updateMenu = (setMenuId) => {
        let {activeMenu} = this.props;
        this.setState({ updateMenuId: setMenuId });
        if (setMenuId !== activeMenu) {
            this.props.activeMenu(setMenuId);
        }
    }

    render() {

        const {items} = this.props || {};

        if (items) {

            const menuSection = Object.entries(items).map((section, index) => {

                let {id, title, url, classes, target, dropdown} = section[1];
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
                    <MenuItems menuId={id} title={title} dropdownItems={dropdownItems} setMenuAs={this.updateMenu} />
                )
            });
            return (
                <div className="utk-resources-menu--col">
                    {menuSection}
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }
}