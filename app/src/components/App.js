import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Filters from './Filters';
import Counter from './Counter'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {

        const {articles} = this.props;

        return (
            <div>
                <Counter/>
                <Filters articles={articles}/>
                <ArticleList articles={this.props.articles}/>
            </div>
        )
    }
}

export default App