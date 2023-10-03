import Modal from 'components/Modal'
import styles from './LightBoxGallery.module.css'
import React, { useState } from 'react'
import Thumbnail from 'components/Thumbnail'

export default function LightBoxGallery({ images }) {

    const [clickedImage, setClickedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(images[0].image)
    const [activeThumbnail, setActiveThumbnail] = useState(images[0].id)
    const [activeGalleryThumbnail, setActiveGalleryThumbnail] = useState(null)

    const handleThumbnailClick = (item, index) => {
        setCurrentIndex(index)
        setCurrentImage(item.image)
        setActiveThumbnail(item.id)
    }

    const handleThumbnailGalleryClick = (item, index) => {
        setClickedImage(item.image)
        setCurrentIndex(index)
        setActiveGalleryThumbnail(item.id)
    }

    const handleImageClick = () => {
        setClickedImage(images[currentIndex].image)
        setActiveGalleryThumbnail(images[currentIndex].id)
    }

    const handleRotationLeft = () => {
        const totalLength = images.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = images[totalLength - 1].image;
            setClickedImage(newUrl);
            setActiveGalleryThumbnail(images[totalLength - 1].id)
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = images[newIndex].image
        setClickedImage(newUrl);
        setCurrentIndex(newIndex);
        setActiveGalleryThumbnail(images[newIndex].id)
    };

    const handleRotationRight = () => {
        const totalLength = images.length
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0)
            setClickedImage(images[0].image)
            setActiveGalleryThumbnail(images[0].id)
            return
        }
        const newIndex = currentIndex + 1
        const newUrl = images[newIndex].image
        setClickedImage(newUrl)
        setCurrentIndex(newIndex)
        setActiveGalleryThumbnail(images[newIndex].id)
    }

    return (
        <div className={styles.container}>
            {clickedImage && <Modal
                clickedImage={clickedImage}
                handleRotationRight={handleRotationRight}
                setClickedImage={setClickedImage}
                handleRotationLeft={handleRotationLeft}
                images={images}
                activeThumbnail={activeThumbnail}
                handleThumbnailGalleryClick={handleThumbnailGalleryClick}
                activeGalleryThumbnail={activeGalleryThumbnail}
            />}
            <img className={styles.current_image} src={currentImage} alt="Sneaker" onClick={() => handleImageClick()} />
            <div className={styles.container_images}>
                <Thumbnail handleClick={handleThumbnailClick} images={images} activeThumbnail={activeThumbnail} />
            </div>

        </div>
    )
}
