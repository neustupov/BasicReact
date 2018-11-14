import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';
import './article.css';

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func
    };

    render() {
        const {article, isOpen, toggleOpenItem} = this.props;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpenItem}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <CSSTransition
                    in={isOpen}
                    classNames='article'
                    timeout={{enter: 500, exit: 500}}
                    component='div'
                    appear
                >
                    <div>
                        {this.getBody()}
                    </div>
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        );
    }
}

export default Article
