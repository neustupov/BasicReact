import React from 'react';

export default function Comment({comment}) {

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