import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Filters from './Filters';
import store from './store'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {

        const {articles} = this.props;

        return (
            <div>
                <Filters articles={articles}/>
                <ArticleList articles={this.props.articles}/>
            </div>
        )
    }
}

export default App