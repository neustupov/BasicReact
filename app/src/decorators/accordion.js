import React from 'react';

export default Component => class Accordion extends React.Component {

    state = {
        openItemId: null
    };

    render() {
        return <Accordion {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }

    toggleOpenArticle = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}