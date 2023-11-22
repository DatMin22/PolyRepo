import React from 'react'
import classnames from "classnames"
import { useState } from 'react';
export const DemoLike = () => {
    const [isLiked, setIsLiked] = useState(false);

    const classNames = classnames({
        "like-button": true,
        "liked": isLiked,
    });

    const handleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div>
            <i className={classNames} onClick={handleLike}>
            <i class='bx bxs-heart bx-tada' ></i>
            </i>

        </div>
    )
}
