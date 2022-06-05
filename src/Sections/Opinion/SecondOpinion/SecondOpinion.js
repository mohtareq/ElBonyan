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
            901: {
              slidesPerView: 2,
            },
          }}
        className='swiper'
        >
        <SwiperSlide>
        <Box>
            <StarDiv>
                <Star xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 25">
                    <g id="Group_10731" data-name="Group 10731" transform="translate(0.298 0.382)">
                    <rect id="Rectangle_175" data-name="Rectangle 175" width="24" height="25" transform="translate(112.702 -0.382)" fill="#f07f1a"/>
                    <rect id="Rectangle_177" data-name="Rectangle 177" width="24" height="25" transform="translate(56.702 -0.382)" fill="#f07f1a"/>
                    <path id="Path_5241" data-name="Path 5241" d="M0,0H24.421V24.421H0Z" transform="translate(84.533)" fill="#f07f1a"/>
                    <path id="Path_5242" data-name="Path 5242" d="M0,0H24.421V24.421H0Z" transform="translate(28.178)" fill="#f07f1a"/>
                    <rect id="Rectangle_179" data-name="Rectangle 179" width="25" height="25" transform="translate(-0.298 -0.382)" fill="#f07f1a"/>
                    <g id="Star" transform="translate(116.468 4.227)">
                        <path id="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-2" data-name="Star" transform="translate(88.266 4.227)">
                        <path id="Shape-2" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-3" data-name="Star" transform="translate(60.088 4.227)">
                        <path id="Shape-3" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-4" data-name="Star" transform="translate(31.911 4.227)">
                        <path id="Shape-4" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-5" data-name="Star" transform="translate(3.733 4.227)">
                        <path id="Shape-5" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    </g>
                </Star>            
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
                <Star xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 25">
                    <g id="Group_10731" data-name="Group 10731" transform="translate(0.298 0.382)">
                    <rect id="Rectangle_175" data-name="Rectangle 175" width="24" height="25" transform="translate(112.702 -0.382)" fill="#f07f1a"/>
                    <rect id="Rectangle_177" data-name="Rectangle 177" width="24" height="25" transform="translate(56.702 -0.382)" fill="#f07f1a"/>
                    <path id="Path_5241" data-name="Path 5241" d="M0,0H24.421V24.421H0Z" transform="translate(84.533)" fill="#f07f1a"/>
                    <path id="Path_5242" data-name="Path 5242" d="M0,0H24.421V24.421H0Z" transform="translate(28.178)" fill="#f07f1a"/>
                    <rect id="Rectangle_179" data-name="Rectangle 179" width="25" height="25" transform="translate(-0.298 -0.382)" fill="#f07f1a"/>
                    <g id="Star" transform="translate(116.468 4.227)">
                        <path id="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-2" data-name="Star" transform="translate(88.266 4.227)">
                        <path id="Shape-2" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-3" data-name="Star" transform="translate(60.088 4.227)">
                        <path id="Shape-3" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-4" data-name="Star" transform="translate(31.911 4.227)">
                        <path id="Shape-4" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-5" data-name="Star" transform="translate(3.733 4.227)">
                        <path id="Shape-5" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    </g>
                </Star>            
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
                <Star xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 25">
                    <g id="Group_10731" data-name="Group 10731" transform="translate(0.298 0.382)">
                    <rect id="Rectangle_175" data-name="Rectangle 175" width="24" height="25" transform="translate(112.702 -0.382)" fill="#f07f1a"/>
                    <rect id="Rectangle_177" data-name="Rectangle 177" width="24" height="25" transform="translate(56.702 -0.382)" fill="#f07f1a"/>
                    <path id="Path_5241" data-name="Path 5241" d="M0,0H24.421V24.421H0Z" transform="translate(84.533)" fill="#f07f1a"/>
                    <path id="Path_5242" data-name="Path 5242" d="M0,0H24.421V24.421H0Z" transform="translate(28.178)" fill="#f07f1a"/>
                    <rect id="Rectangle_179" data-name="Rectangle 179" width="25" height="25" transform="translate(-0.298 -0.382)" fill="#f07f1a"/>
                    <g id="Star" transform="translate(116.468 4.227)">
                        <path id="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-2" data-name="Star" transform="translate(88.266 4.227)">
                        <path id="Shape-2" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-3" data-name="Star" transform="translate(60.088 4.227)">
                        <path id="Shape-3" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-4" data-name="Star" transform="translate(31.911 4.227)">
                        <path id="Shape-4" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-5" data-name="Star" transform="translate(3.733 4.227)">
                        <path id="Shape-5" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    </g>
                </Star>            
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
                <Star xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 25">
                    <g id="Group_10731" data-name="Group 10731" transform="translate(0.298 0.382)">
                    <rect id="Rectangle_175" data-name="Rectangle 175" width="24" height="25" transform="translate(112.702 -0.382)" fill="#f07f1a"/>
                    <rect id="Rectangle_177" data-name="Rectangle 177" width="24" height="25" transform="translate(56.702 -0.382)" fill="#f07f1a"/>
                    <path id="Path_5241" data-name="Path 5241" d="M0,0H24.421V24.421H0Z" transform="translate(84.533)" fill="#f07f1a"/>
                    <path id="Path_5242" data-name="Path 5242" d="M0,0H24.421V24.421H0Z" transform="translate(28.178)" fill="#f07f1a"/>
                    <rect id="Rectangle_179" data-name="Rectangle 179" width="25" height="25" transform="translate(-0.298 -0.382)" fill="#f07f1a"/>
                    <g id="Star" transform="translate(116.468 4.227)">
                        <path id="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-2" data-name="Star" transform="translate(88.266 4.227)">
                        <path id="Shape-2" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-3" data-name="Star" transform="translate(60.088 4.227)">
                        <path id="Shape-3" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-4" data-name="Star" transform="translate(31.911 4.227)">
                        <path id="Shape-4" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-5" data-name="Star" transform="translate(3.733 4.227)">
                        <path id="Shape-5" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    </g>
                </Star>            
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
                <Star xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 25">
                    <g id="Group_10731" data-name="Group 10731" transform="translate(0.298 0.382)">
                    <rect id="Rectangle_175" data-name="Rectangle 175" width="24" height="25" transform="translate(112.702 -0.382)" fill="#f07f1a"/>
                    <rect id="Rectangle_177" data-name="Rectangle 177" width="24" height="25" transform="translate(56.702 -0.382)" fill="#f07f1a"/>
                    <path id="Path_5241" data-name="Path 5241" d="M0,0H24.421V24.421H0Z" transform="translate(84.533)" fill="#f07f1a"/>
                    <path id="Path_5242" data-name="Path 5242" d="M0,0H24.421V24.421H0Z" transform="translate(28.178)" fill="#f07f1a"/>
                    <rect id="Rectangle_179" data-name="Rectangle 179" width="25" height="25" transform="translate(-0.298 -0.382)" fill="#f07f1a"/>
                    <g id="Star" transform="translate(116.468 4.227)">
                        <path id="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-2" data-name="Star" transform="translate(88.266 4.227)">
                        <path id="Shape-2" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-3" data-name="Star" transform="translate(60.088 4.227)">
                        <path id="Shape-3" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-4" data-name="Star" transform="translate(31.911 4.227)">
                        <path id="Shape-4" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    <g id="Star-5" data-name="Star" transform="translate(3.733 4.227)">
                        <path id="Shape-5" data-name="Shape" d="M16.94,6.057a.3.3,0,0,0-.245-.2L11.2,5.067,8.75.167a.305.305,0,0,0-.544,0L5.75,5.067.26,5.853a.3.3,0,0,0-.245.2.3.3,0,0,0,.077.306l3.973,3.815-.938,5.386a.3.3,0,0,0,.12.292.3.3,0,0,0,.32.023l4.911-2.543,4.911,2.543a.308.308,0,0,0,.32-.023.3.3,0,0,0,.12-.292l-.938-5.386,3.973-3.815A.3.3,0,0,0,16.94,6.057Z" transform="translate(0)" fill="#fff"/>
                    </g>
                    </g>
                </Star>            
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
