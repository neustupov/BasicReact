import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransition'

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
                <CSSTransitionGroup
                    timeout={500}
                    classNames="article"
                    mountOnEnter={true}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <div>
                <section>
                    {article.text}
                    <CommentList comments={article.comments}/>
                </section>
            </div>
        );
    }
}

export default Article
