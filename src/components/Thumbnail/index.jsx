import styles from './Thumbnail.module.css'

import React from 'react'

export default function Thumbnail({ images, handleClick, activeThumbnail}) {
    return (
        <>
            {images.map((item, index) => (
                <img className={`${styles.thumbnail_img} ${activeThumbnail === item.id ? styles.active : ''}`}
                    key={item.id}
                    src={item.thumbnail}
                    alt={item.alt}
                    onClick={() => handleClick(item, index)}
                />
            ))}
        </>
    )
}
