import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import { SecDiv, Box, Tube } from './YoutubeStyle';
import './Style.css'

const YouTube = ()  => {

  return(
    <Swiper
      slidesPerView={1}
      slidesPerGroup={0}
      loop={true}
      spaceBetween={200}
      autoplay={{
          delay: 1,
          disableOnInteraction: true
      }}
      loopFillGroupWithBlank={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
          // when window width is >= 640px
          1: {
              slidesPerView: 1,
          },
          // when window width is >= 768px

      }}
      className='swiper-tube'
    >
      <SecDiv>
        <SwiperSlide>
          <Box>
            <Tube 
              src="https://www.youtube.com/embed/N0dCyu_xf3A" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </Tube>    
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Tube 
              src="https://www.youtube.com/embed/-ychNqhq7Pw" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </Tube>    
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Tube 
              src="https://www.youtube.com/embed/vUF09X76rF8" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </Tube> 
          </Box>
        </SwiperSlide>
      </SecDiv>
    </Swiper>    
  );
}

export default YouTube;