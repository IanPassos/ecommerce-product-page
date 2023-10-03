import styles from './Modal.module.css';
import React from 'react'
import { ReactComponent as IconClose } from 'assets/icon-close.svg'
import { ReactComponent as IconNext } from 'assets/icon-next.svg'
import { ReactComponent as IconPrevious } from 'assets/icon-previous.svg'
import Thumbnail from 'components/Thumbnail';

export default function Modal({ activeGalleryThumbnail, clickedImage, handleRotationRight, handleRotationLeft, setClickedImage, images, activeThumbnail, handleThumbnailGalleryClick }) {

    const handleCloseClick = () => {
        setClickedImage(null)
    }

    return (
        <div className={styles.overlay}>
            <button className={styles.overlay_arrows__left} onClick={() => handleRotationLeft()}>
                <IconPrevious className={styles.arrow} />
            </button>
            <img className={styles.main_image} src={clickedImage} alt="" />
            <button className={styles.overlay_arrows__right} onClick={() => handleRotationRight()}>
                <IconNext className={styles.arrow} />
            </button>
            <IconClose className={styles.icon_close} onClick={() => handleCloseClick()} />
            <div className={styles.thumbnail_images}>
                <Thumbnail handleClick={handleThumbnailGalleryClick} images={images} activeThumbnail={activeGalleryThumbnail} />
            </div>
        </div>
    )
}
