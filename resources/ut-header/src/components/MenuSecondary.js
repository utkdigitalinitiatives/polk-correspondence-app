import React, {Component} from 'react';

export class MenuSecondary extends Component {

    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(menuId, e) {
        this.props.setMenuAs(menuId, 'secondary');
    }

    render() {

        const {title, menuId, dropdownItems} = this.props;

        return (
            <div className="utk-resources-menu--section">
                <h3 className="utk-resources-menu--trigger">{title}</h3>
                <div className="utk-resources-menu--submenu utk-resources-menu--submenu-secondary">
                    {dropdownItems}
                </div>
            </div>
        )
    }
}