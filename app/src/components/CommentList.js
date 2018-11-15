import React, {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import AddCommentForm from './AddCommentForm';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    static propTypes = {
      comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const {isOpen, toggleOpen} = this.props;

        const text = isOpen ? 'hide comments' : 'show comments';

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {isOpen} = this.props;
        if (!isOpen) return null;
        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
                <br/>
                <br/>
                <AddCommentForm/>
            </ul>
        )
    }
}

export default toggleOpen(CommentList)