import React from 'react';
import Comment from './Comment';

export default function CommentList({commentList}) {
    const commentsElement = commentList.map((comment) =>
        <li key={comment.id}><Comment comment={comment}/></li>
    );

    return (
        <ul>
            {commentsElement}
        </ul>
    )
}