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
        navigation={{
            nextEl: '#next-opi',
            prevEl: '#back-opi',
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
            // when window width is >= 640px
            1: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            769: {
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
                هندسة البـنيان للتوسيق الرقمي يحتوي على فريق متميز في أدائه
                الرائع أنصح بالتعامل معهم حيث سعدت بتنفيذ العديد من المشاريع
                معهم , تمنياتي لهم بدوام التوفيق والنجاح            
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
                هندسة البـنيان للتوسيق الرقمي يحتوي على فريق متميز في أدائه
                الرائع أنصح بالتعامل معهم حيث سعدت بتنفيذ العديد من المشاريع
                معهم , تمنياتي لهم بدوام التوفيق والنجاح            
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
                هندسة البـنيان للتوسيق الرقمي يحتوي على فريق متميز في أدائه
                الرائع أنصح بالتعامل معهم حيث سعدت بتنفيذ العديد من المشاريع
                معهم , تمنياتي لهم بدوام التوفيق والنجاح            
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
                هندسة البـنيان للتوسيق الرقمي يحتوي على فريق متميز في أدائه
                الرائع أنصح بالتعامل معهم حيث سعدت بتنفيذ العديد من المشاريع
                معهم , تمنياتي لهم بدوام التوفيق والنجاح            
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
                هندسة البـنيان للتوسيق الرقمي يحتوي على فريق متميز في أدائه
                الرائع أنصح بالتعامل معهم حيث سعدت بتنفيذ العديد من المشاريع
                معهم , تمنياتي لهم بدوام التوفيق والنجاح            
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
