import { useEffect, useState } from "react";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import img from '../../../assests/vector.png'
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Article = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('article.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return (

        <div className="container mx-auto">
            <div className="">
                <div className="flex items-center gap-3"><img src={img} alt="" srcset="" /><p className="text-[#22b6af] text-[16px] font-semibold">Recent Article</p></div>
                <p className="text-[#142441] font-bold text-[42px]">Interesting Articles Updated <br />Every Daily</p>
            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'3'}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                className="mySwiper"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <ArticleCard article={article}></ArticleCard>
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>

        </div>
    );
};

export default Article;