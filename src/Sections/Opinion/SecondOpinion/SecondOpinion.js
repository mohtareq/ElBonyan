import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Stars from '../../../Assets/stars.svg';
import Person from '../../../Assets/person.png';

import { Box, StarDiv, Star, Topic, PersonDiv, PersonImg, PersonInfo, PersonName ,PersonPosition} from './SecondOpinionStyle';

import './style.css'


const SecondServices = () => {

    return(
        <Swiper
        slidesPerView={2}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
          }}
        className='swiper'
        >
        <SwiperSlide>
        <Box>
            <StarDiv>
                <Star src={Stars} alt="star" /> 
            </StarDiv>                                    
            <Topic>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص .من مولد النص العربى، حيث يمكنك أن تولد مثل 
            </Topic>   
            <PersonDiv>
                <PersonImg src={Person}  alt="person" /> 
                <PersonInfo>
                    <PersonName>محمد حسين</PersonName> 
                    <PersonPosition>مدير شركة</PersonPosition> 
                </PersonInfo>
            </PersonDiv>                             
        </Box>                     
        </SwiperSlide>
        <SwiperSlide>
        <Box>
            <StarDiv>
                <Star src={Stars}  alt="star" /> 
            </StarDiv>                                    
            <Topic>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص .من مولد النص العربى، حيث يمكنك أن تولد مثل 
            </Topic>   
            <PersonDiv>
                <PersonImg src={Person}  alt="person" /> 
                <PersonInfo>
                    <PersonName>محمد حسين</PersonName> 
                    <PersonPosition>مدير شركة</PersonPosition> 
                </PersonInfo>
            </PersonDiv>                             
        </Box>                     
        </SwiperSlide>
        <SwiperSlide>
        <Box>
            <StarDiv>
                <Star src={Stars}  alt="star" /> 
            </StarDiv>                                    
            <Topic>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص .من مولد النص العربى، حيث يمكنك أن تولد مثل 
            </Topic>   
            <PersonDiv>
                <PersonImg src={Person}  alt="person" /> 
                <PersonInfo>
                    <PersonName>محمد حسين</PersonName> 
                    <PersonPosition>مدير شركة</PersonPosition> 
                </PersonInfo>
            </PersonDiv>                             
        </Box>                     
        </SwiperSlide>
        <SwiperSlide>
        <Box>
            <StarDiv>
                <Star src={Stars}  alt="star" /> 
            </StarDiv>                                    
            <Topic>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص .من مولد النص العربى، حيث يمكنك أن تولد مثل 
            </Topic>   
            <PersonDiv>
                <PersonImg src={Person}  alt="person" /> 
                <PersonInfo>
                    <PersonName>محمد حسين</PersonName> 
                    <PersonPosition>مدير شركة</PersonPosition> 
                </PersonInfo>
            </PersonDiv>                             
        </Box>                     
        </SwiperSlide>
        <SwiperSlide>
        <Box>
            <StarDiv>
                <Star src={Stars}  alt="star" /> 
            </StarDiv>                                    
            <Topic>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص .من مولد النص العربى، حيث يمكنك أن تولد مثل 
            </Topic>   
            <PersonDiv>
                <PersonImg src={Person}  alt="person" /> 
                <PersonInfo>
                    <PersonName>محمد حسين</PersonName> 
                    <PersonPosition>مدير شركة</PersonPosition> 
                </PersonInfo>
            </PersonDiv>                             
        </Box>                     
        </SwiperSlide>
    </Swiper>    
    );
}

export default SecondServices;
