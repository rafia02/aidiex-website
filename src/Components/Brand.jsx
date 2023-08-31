import React, { useEffect } from 'react'
import ScrollCarousel from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css';

export const Brand = () => {
    const images = [
        "https://tidytheme.com/blackgallery/elizah/html/images/client-5.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-6.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-3.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-4.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-5.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-6.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-3.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-4.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-5.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-6.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-3.jpg",
        "https://tidytheme.com/blackgallery/elizah/html/images/client-6.jpg"
    ]
    useEffect(() => {
        new ScrollCarousel(".my-carousel", {
            autoplay: true
        });
    }, [])
    return (
        <div className='carousel'>
            {/* <h1>Our Brand</h1> */}
            <div class="my-carousel">
                {
                    images.map(i => <div class="my-slide">
                        <img src={i} alt="" />
                    </div>)
                }


            </div>
        </div>
    )
}
