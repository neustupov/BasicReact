import React,{Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import ToggleOpenArticle from '../decorators/accordion';

class ArticleList extends Component{

    static propTypes = {
        articles: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const articleElements = this.props.articles.map((article) =>
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.props.openArticleId}
                    toggleOpen={this.props.toggleOpenArticle(article.id)}
                />
            </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default ToggleOpenArticle(ArticleList)