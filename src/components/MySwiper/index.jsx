import styles from './MySwiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import React, { useRef } from 'react'


export default function MySwiper({ images }) {

    const swiperPrevRef = useRef(null)
    const swiperNextRef = useRef(null)


    return (
        <section className={styles.container}>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation={{
                    prevEl: swiperPrevRef.current,
                    nextEl: swiperNextRef.current,
                }}
                speed={800}
                effect
                slidesPerView={1}
                loop
                className={styles.myswiper}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = swiperPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNextRef.current;
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}

            >
                {images.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className={styles.myswiper_slide}>
                            <img src={item.image} alt={item.alt} /> 
                        </SwiperSlide>
                    );
                })}

                <div className={styles.swiper_prev} ref={swiperPrevRef}></div>
                <div className={styles.swiper_next} ref={swiperNextRef}></div>

            </Swiper>
        </section>
    )
}
