import React, {Component} from 'react';
import ReactSVG from 'react-svg'

export class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchOption: 'onesearch',
            searchPlaceholder: ' Search media, books, etc...'
        };

        this.toggleSearchOption = this.toggleSearchOption.bind(this);
        this.setSearchOptionOnesearch = this.setSearchOptionOnesearch.bind(this);
        this.setSearchOptionLibraries = this.setSearchOptionLibraries.bind(this);
    };

    toggleSearchOption(e) {
        e.stopPropagation();
        let searchOption = this.state.searchOption;
        if (searchOption === 'onesearch') {
            this.setState({searchOption: 'libraries'}, () => {
                this.setState({searchPlaceholder: ' Search hours, services, etc...'})
                this.utkSearchField.focus();
            });
        } else {
            this.setState({searchOption: 'onesearch'}, () => {
                this.setState({searchPlaceholder: ' Search media, books, etc...'})
                this.utkSearchField.focus();
            });
        }
    };

    setSearchOptionOnesearch(e) {
        e.stopPropagation();
        this.setState({searchOption: 'onesearch'}, () => {
            this.setState({searchPlaceholder: ' Search media, books, etc...'});
            this.utkSearchField.focus();
        });
    };

    setSearchOptionLibraries(e) {
        e.stopPropagation();
        this.setState({searchOption: 'libraries'}, () => {
            this.setState({searchPlaceholder: ' Search hours, services, etc...'});
            this.utkSearchField.focus();
        });
    };

    render() {

        const {active} = this.props;
        const {searchOption, searchPlaceholder} = this.state;

        let searchOptionClass = ' utk-search-' + searchOption;

        return (
            <div className={`utk-header-search ${active}${searchOptionClass}`}>
                <div className="container">
                    <div className="utk-search-wrapper">
                        <div className="utk-search-options">
                            <label id="utk-search-toggle-onesearch" onClick={this.setSearchOptionOnesearch}>
                                <ReactSVG src="resources/ut-tei/src/media/ut-onesearch.svg" className="utk-onesearch" />
                                <ReactSVG src="resources/ut-tei/src/media/ut-onesearch-mono.svg" className="utk-onesearch-mono" />
                            </label>
                            <div id="utk-search-toggle" onClick={this.toggleSearchOption}
                                 className="utk-search-toggle utk-search-toggle-onesearch">
                                <div className="utk-search-toggle-button"></div>
                            </div>
                            <label id="utk-search-toggle-libraries"
                                   onClick={this.setSearchOptionLibraries}><span>lib.utk.edu</span></label>
                        </div>
                        <div className="utk-search-wrapper--form-item">
                            <div className="utk-search-wrapper--icon"><span className="icon-search"></span></div>
                            <input id="utk-search-field" ref={(searchFocus) => this.utkSearchField = searchFocus}
                                   placeholder={searchPlaceholder}/>
                            <span className="utk-cursor"></span>
                            <input id="utk-search-submit" type="button" value="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}