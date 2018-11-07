import React, {Component} from 'react';

export default class Comment extends Component {

    render() {
        const {comment} = this.props;

        return (
            <ul>
                <li>
                    {comment.user}
                </li>
                <li>
                    {comment.text}
                </li>
            </ul>
        )
    }
}