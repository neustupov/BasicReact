import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {

    state = {
        isOpen: false,
        openArticleId: null
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}
                                  toggleOpenArticle={this.toggleOpenArticle}/>
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId
        })
    }
}