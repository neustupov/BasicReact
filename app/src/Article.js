import React, {Component} from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenComment: false
        };
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        const {isOpenComment} = this.state;
        return (
            <div>
                <section>{article.text}</section>
                <button onClick={this.toggleOpenComment}>
                    {isOpenComment ? 'Close comments' : 'Open comments'}
                </button>
                {this.getComments()}
            </div>
        );
    }

    getComments() {
        if (!this.state.isOpenComment) return null;
        const comments = this.props.article.comments;
        if (!comments) return null;
        return <CommentList commentList={comments}/>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleOpenComment = () => {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    }
}
