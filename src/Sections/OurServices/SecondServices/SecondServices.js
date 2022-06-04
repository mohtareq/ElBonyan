import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import { SecDiv, Box, Icon, Title, SubTitle } from './SecondServicesStyle';
import './Style.css'

const SecondServices = () => {
    

    return(
        <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            spaceBetween={10}
            autoplay={{
                delay: 500,
                disableOnInteraction: false
            }}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
                // when window width is >= 640px
                1: {
                    slidesPerView: 2,
                },
                // when window width is >= 768px

                1200: {
                    slidesPerView: 3,
                },
            }}
            className='swiper'
        >
        <SecDiv>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                        <defs>
                        <filter id="Ellipse_338" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        </defs>
                        <g id="Group_17008" transform="translate(-438 -2834)">
                        <g transform="matrix(1, 0, 0, 1, 438, 2834)" filter="url(#Ellipse_338)">
                            <circle id="Ellipse_338-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#fff"/>
                        </g>
                        <path id="icons8_marketing_1" d="M27.384,3a3.344,3.344,0,0,0-3.341,3.341H6.848A2.889,2.889,0,0,0,4,9.264a2.926,2.926,0,0,0,1.67,2.654V39.955A3.136,3.136,0,0,0,8.8,43.087H23.788l-4.619,7.058a.837.837,0,0,0,1.4.917l5.011-7.657a.827.827,0,0,0,.122-.318h.848v5.428a.835.835,0,1,0,1.67,0V43.087h.848a.827.827,0,0,0,.122.318L34.2,51.062a.837.837,0,1,0,1.4-.917l-4.619-7.058H45.966A3.136,3.136,0,0,0,49.1,39.955V11.917a2.926,2.926,0,0,0,1.67-2.654A2.889,2.889,0,0,0,47.92,6.341h-17.2A3.344,3.344,0,0,0,27.384,3Zm0,1.67a1.672,1.672,0,0,1,1.67,1.67H25.714A1.672,1.672,0,0,1,27.384,4.67ZM6.848,8.011H47.92a1.255,1.255,0,0,1,0,2.505.821.821,0,0,0-.246.049.812.812,0,0,0-.246-.049H19.868a.835.835,0,0,0,0,1.67h27.56V39.955a1.463,1.463,0,0,1-1.462,1.462H8.8a1.463,1.463,0,0,1-1.462-1.462V12.187H9.846a.835.835,0,0,0,0-1.67h-3a1.255,1.255,0,0,1,0-2.505Zm2.163,2.505a.835.835,0,0,0,0,1.67H24.879a.835.835,0,0,0,0-1.67ZM31.56,15.527a.834.834,0,0,0-.835.835v4.176H23.208a.834.834,0,0,0-.835.835v3.341H14.857a.834.834,0,0,0-.835.835V37.241H10.681a.835.835,0,0,0,0,1.67H44.087a.835.835,0,1,0,0-1.67H40.747V16.362a.834.834,0,0,0-.835-.835ZM32.4,17.2h6.681V37.241H32.4V17.2Zm-8.351,5.011h6.681V37.241H24.044V22.208Zm-8.351,4.176h6.681V37.241H15.692Z" transform="translate(490.182 2883.107)" fill="#22274e"/>
                        </g>
                    </Icon> 
                    <Title>SEO تحسين محركات البحث</Title>
                    <SubTitle>
                        نقوم بمساعدتك من خلال خبرتنا في تصدر نتائج محركات البحث بحيث نسمح لك أن تكون في أولى صفحات البحث على جوجل وبذلك تضمن ان نشاطك التجاري يكون دائما في المقدمة والعمل على تحقيق الهدف الذي تريده. 
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                        <defs>
                        <filter id="Ellipse_18" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        </defs>
                        <g id="Group_17007" transform="translate(-872 -2834)">
                        <g transform="matrix(1, 0, 0, 1, 872, 2834)" filter="url(#Ellipse_18)">
                            <circle id="Ellipse_18-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#22274e"/>
                        </g>
                        <path id="icons8_code_file_1" d="M60.618,31.987A1.9,1.9,0,0,0,58.7,33.434l-11.4,43.7a1.9,1.9,0,1,0,3.674.958l11.4-43.7a1.9,1.9,0,0,0-1.755-2.4Zm7.559,9.5a1.9,1.9,0,0,0-1.548,3.08l8.61,11.192-8.61,11.192a1.9,1.9,0,1,0,3.013,2.316L80.033,55.763,69.643,42.255A1.9,1.9,0,0,0,68.177,41.491Zm-28.638,0a1.9,1.9,0,0,0-1.41.761L27.738,55.763,38.129,69.271a1.9,1.9,0,1,0,3.013-2.316l-8.61-11.192,8.61-11.192a1.9,1.9,0,0,0-1.6-3.077Z" transform="translate(897.338 2853.921)" fill="#fff"/>
                        </g>
                    </Icon>
                    <Title>الاعلانات الممولة</Title>
                    <SubTitle>
                        نقوم بمساعدتك في تحقيق المبيعات والنجاح الذي تبحث عنه عن طريق فريق عمل مميز يقوم بالعمل بإحترافية من خلال تحدد أهدافك تحدد الميزانية إستهداف جمهورك الصحيح إختيار الوسائل الإعلانية تتبع النتائج وتسجيل الملاحظات    
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                    <defs>
                    <filter id="Ellipse_18" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    </defs>
                    <g id="Group_17007" transform="translate(-872 -2834)">
                    <g transform="matrix(1, 0, 0, 1, 872, 2834)" filter="url(#Ellipse_18)">
                        <circle id="Ellipse_18-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#22274e"/>
                    </g>
                    <path id="icons8_code_file_1" d="M60.618,31.987A1.9,1.9,0,0,0,58.7,33.434l-11.4,43.7a1.9,1.9,0,1,0,3.674.958l11.4-43.7a1.9,1.9,0,0,0-1.755-2.4Zm7.559,9.5a1.9,1.9,0,0,0-1.548,3.08l8.61,11.192-8.61,11.192a1.9,1.9,0,1,0,3.013,2.316L80.033,55.763,69.643,42.255A1.9,1.9,0,0,0,68.177,41.491Zm-28.638,0a1.9,1.9,0,0,0-1.41.761L27.738,55.763,38.129,69.271a1.9,1.9,0,1,0,3.013-2.316l-8.61-11.192,8.61-11.192a1.9,1.9,0,0,0-1.6-3.077Z" transform="translate(897.338 2853.921)" fill="#fff"/>
                    </g>
                    </Icon>  
                    <Title>برمجة المواقع والتطبيقات</Title>
                    <SubTitle>
                        نساعدك على إنشاء تطبيقك أو موقعك الإلكتروني لتصل لعملائك بشكل أسرع و بمدة زمنية قصيرة وبسعر منافس كما ونعمل على تحويل فكرتك إلى تطبيق مميز  بإستخدام أفضل التقنيات الحديثة 
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                        <defs>
                        <filter id="Ellipse_338" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        </defs>
                        <g id="Group_17008" transform="translate(-438 -2834)">
                        <g transform="matrix(1, 0, 0, 1, 438, 2834)" filter="url(#Ellipse_338)">
                            <circle id="Ellipse_338-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#fff"/>
                        </g>
                        <path id="icons8_marketing_1" d="M27.384,3a3.344,3.344,0,0,0-3.341,3.341H6.848A2.889,2.889,0,0,0,4,9.264a2.926,2.926,0,0,0,1.67,2.654V39.955A3.136,3.136,0,0,0,8.8,43.087H23.788l-4.619,7.058a.837.837,0,0,0,1.4.917l5.011-7.657a.827.827,0,0,0,.122-.318h.848v5.428a.835.835,0,1,0,1.67,0V43.087h.848a.827.827,0,0,0,.122.318L34.2,51.062a.837.837,0,1,0,1.4-.917l-4.619-7.058H45.966A3.136,3.136,0,0,0,49.1,39.955V11.917a2.926,2.926,0,0,0,1.67-2.654A2.889,2.889,0,0,0,47.92,6.341h-17.2A3.344,3.344,0,0,0,27.384,3Zm0,1.67a1.672,1.672,0,0,1,1.67,1.67H25.714A1.672,1.672,0,0,1,27.384,4.67ZM6.848,8.011H47.92a1.255,1.255,0,0,1,0,2.505.821.821,0,0,0-.246.049.812.812,0,0,0-.246-.049H19.868a.835.835,0,0,0,0,1.67h27.56V39.955a1.463,1.463,0,0,1-1.462,1.462H8.8a1.463,1.463,0,0,1-1.462-1.462V12.187H9.846a.835.835,0,0,0,0-1.67h-3a1.255,1.255,0,0,1,0-2.505Zm2.163,2.505a.835.835,0,0,0,0,1.67H24.879a.835.835,0,0,0,0-1.67ZM31.56,15.527a.834.834,0,0,0-.835.835v4.176H23.208a.834.834,0,0,0-.835.835v3.341H14.857a.834.834,0,0,0-.835.835V37.241H10.681a.835.835,0,0,0,0,1.67H44.087a.835.835,0,1,0,0-1.67H40.747V16.362a.834.834,0,0,0-.835-.835ZM32.4,17.2h6.681V37.241H32.4V17.2Zm-8.351,5.011h6.681V37.241H24.044V22.208Zm-8.351,4.176h6.681V37.241H15.692Z" transform="translate(490.182 2883.107)" fill="#22274e"/>
                        </g>
                    </Icon>   
                    <Title>التقارير وتحليل الاداء</Title>
                    <SubTitle>
                        نساعدكم في كتابة التقارير وتحليل الأداء التي تسهم في تحقيق أهداف الشركة والتأكد من سيرها في الإتجاه الصحيح من خلال معرفة كيف تتم إدارة المشاريع وحل المشاكل وتصحيح الأخطاء والكشف عن الخطط المستقبلية 
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                        <defs>
                        <filter id="Ellipse_338" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        </defs>
                        <g id="Group_17008" transform="translate(-438 -2834)">
                        <g transform="matrix(1, 0, 0, 1, 438, 2834)" filter="url(#Ellipse_338)">
                            <circle id="Ellipse_338-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#fff"/>
                        </g>
                        <path id="icons8_marketing_1" d="M27.384,3a3.344,3.344,0,0,0-3.341,3.341H6.848A2.889,2.889,0,0,0,4,9.264a2.926,2.926,0,0,0,1.67,2.654V39.955A3.136,3.136,0,0,0,8.8,43.087H23.788l-4.619,7.058a.837.837,0,0,0,1.4.917l5.011-7.657a.827.827,0,0,0,.122-.318h.848v5.428a.835.835,0,1,0,1.67,0V43.087h.848a.827.827,0,0,0,.122.318L34.2,51.062a.837.837,0,1,0,1.4-.917l-4.619-7.058H45.966A3.136,3.136,0,0,0,49.1,39.955V11.917a2.926,2.926,0,0,0,1.67-2.654A2.889,2.889,0,0,0,47.92,6.341h-17.2A3.344,3.344,0,0,0,27.384,3Zm0,1.67a1.672,1.672,0,0,1,1.67,1.67H25.714A1.672,1.672,0,0,1,27.384,4.67ZM6.848,8.011H47.92a1.255,1.255,0,0,1,0,2.505.821.821,0,0,0-.246.049.812.812,0,0,0-.246-.049H19.868a.835.835,0,0,0,0,1.67h27.56V39.955a1.463,1.463,0,0,1-1.462,1.462H8.8a1.463,1.463,0,0,1-1.462-1.462V12.187H9.846a.835.835,0,0,0,0-1.67h-3a1.255,1.255,0,0,1,0-2.505Zm2.163,2.505a.835.835,0,0,0,0,1.67H24.879a.835.835,0,0,0,0-1.67ZM31.56,15.527a.834.834,0,0,0-.835.835v4.176H23.208a.834.834,0,0,0-.835.835v3.341H14.857a.834.834,0,0,0-.835.835V37.241H10.681a.835.835,0,0,0,0,1.67H44.087a.835.835,0,1,0,0-1.67H40.747V16.362a.834.834,0,0,0-.835-.835ZM32.4,17.2h6.681V37.241H32.4V17.2Zm-8.351,5.011h6.681V37.241H24.044V22.208Zm-8.351,4.176h6.681V37.241H15.692Z" transform="translate(490.182 2883.107)" fill="#22274e"/>
                        </g>
                    </Icon>   
                    <Title>إدارة حسابات التواصل الاجتماعي</Title>
                    <SubTitle>
                        نجعلك أقرب من عملائك المحتملين ونعزز ثقة الناس بك
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                        <defs>
                        <filter id="Ellipse_338" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        </defs>
                        <g id="Group_17008" transform="translate(-438 -2834)">
                        <g transform="matrix(1, 0, 0, 1, 438, 2834)" filter="url(#Ellipse_338)">
                            <circle id="Ellipse_338-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#fff"/>
                        </g>
                        <path id="icons8_marketing_1" d="M27.384,3a3.344,3.344,0,0,0-3.341,3.341H6.848A2.889,2.889,0,0,0,4,9.264a2.926,2.926,0,0,0,1.67,2.654V39.955A3.136,3.136,0,0,0,8.8,43.087H23.788l-4.619,7.058a.837.837,0,0,0,1.4.917l5.011-7.657a.827.827,0,0,0,.122-.318h.848v5.428a.835.835,0,1,0,1.67,0V43.087h.848a.827.827,0,0,0,.122.318L34.2,51.062a.837.837,0,1,0,1.4-.917l-4.619-7.058H45.966A3.136,3.136,0,0,0,49.1,39.955V11.917a2.926,2.926,0,0,0,1.67-2.654A2.889,2.889,0,0,0,47.92,6.341h-17.2A3.344,3.344,0,0,0,27.384,3Zm0,1.67a1.672,1.672,0,0,1,1.67,1.67H25.714A1.672,1.672,0,0,1,27.384,4.67ZM6.848,8.011H47.92a1.255,1.255,0,0,1,0,2.505.821.821,0,0,0-.246.049.812.812,0,0,0-.246-.049H19.868a.835.835,0,0,0,0,1.67h27.56V39.955a1.463,1.463,0,0,1-1.462,1.462H8.8a1.463,1.463,0,0,1-1.462-1.462V12.187H9.846a.835.835,0,0,0,0-1.67h-3a1.255,1.255,0,0,1,0-2.505Zm2.163,2.505a.835.835,0,0,0,0,1.67H24.879a.835.835,0,0,0,0-1.67ZM31.56,15.527a.834.834,0,0,0-.835.835v4.176H23.208a.834.834,0,0,0-.835.835v3.341H14.857a.834.834,0,0,0-.835.835V37.241H10.681a.835.835,0,0,0,0,1.67H44.087a.835.835,0,1,0,0-1.67H40.747V16.362a.834.834,0,0,0-.835-.835ZM32.4,17.2h6.681V37.241H32.4V17.2Zm-8.351,5.011h6.681V37.241H24.044V22.208Zm-8.351,4.176h6.681V37.241H15.692Z" transform="translate(490.182 2883.107)" fill="#22274e"/>
                        </g>
                    </Icon>   
                    <Title>تصميم الجرافيك</Title>
                    <SubTitle> 
                        نترجم ونلخص أفكارك في تصميم حيوي يجذب أنظار عملائك إليك
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                        <defs>
                        <filter id="Ellipse_338" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        </defs>
                        <g id="Group_17008" transform="translate(-438 -2834)">
                        <g transform="matrix(1, 0, 0, 1, 438, 2834)" filter="url(#Ellipse_338)">
                            <circle id="Ellipse_338-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#fff"/>
                        </g>
                        <path id="icons8_marketing_1" d="M27.384,3a3.344,3.344,0,0,0-3.341,3.341H6.848A2.889,2.889,0,0,0,4,9.264a2.926,2.926,0,0,0,1.67,2.654V39.955A3.136,3.136,0,0,0,8.8,43.087H23.788l-4.619,7.058a.837.837,0,0,0,1.4.917l5.011-7.657a.827.827,0,0,0,.122-.318h.848v5.428a.835.835,0,1,0,1.67,0V43.087h.848a.827.827,0,0,0,.122.318L34.2,51.062a.837.837,0,1,0,1.4-.917l-4.619-7.058H45.966A3.136,3.136,0,0,0,49.1,39.955V11.917a2.926,2.926,0,0,0,1.67-2.654A2.889,2.889,0,0,0,47.92,6.341h-17.2A3.344,3.344,0,0,0,27.384,3Zm0,1.67a1.672,1.672,0,0,1,1.67,1.67H25.714A1.672,1.672,0,0,1,27.384,4.67ZM6.848,8.011H47.92a1.255,1.255,0,0,1,0,2.505.821.821,0,0,0-.246.049.812.812,0,0,0-.246-.049H19.868a.835.835,0,0,0,0,1.67h27.56V39.955a1.463,1.463,0,0,1-1.462,1.462H8.8a1.463,1.463,0,0,1-1.462-1.462V12.187H9.846a.835.835,0,0,0,0-1.67h-3a1.255,1.255,0,0,1,0-2.505Zm2.163,2.505a.835.835,0,0,0,0,1.67H24.879a.835.835,0,0,0,0-1.67ZM31.56,15.527a.834.834,0,0,0-.835.835v4.176H23.208a.834.834,0,0,0-.835.835v3.341H14.857a.834.834,0,0,0-.835.835V37.241H10.681a.835.835,0,0,0,0,1.67H44.087a.835.835,0,1,0,0-1.67H40.747V16.362a.834.834,0,0,0-.835-.835ZM32.4,17.2h6.681V37.241H32.4V17.2Zm-8.351,5.011h6.681V37.241H24.044V22.208Zm-8.351,4.176h6.681V37.241H15.692Z" transform="translate(490.182 2883.107)" fill="#22274e"/>
                        </g>
                    </Icon>   
                    <Title>مونتاج الفيديوهات والموشن جرافيك</Title>
                    <SubTitle> 
                        الموشن جرافيك يضيف الروح لرسالتك سواء أكانت معلومات أو أشخاص تتحدث أو حتى نصوص فقط                    
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158">
                        <defs>
                        <filter id="Ellipse_338" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                        </defs>
                        <g id="Group_17008" transform="translate(-438 -2834)">
                        <g transform="matrix(1, 0, 0, 1, 438, 2834)" filter="url(#Ellipse_338)">
                            <circle id="Ellipse_338-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#fff"/>
                        </g>
                        <path id="icons8_marketing_1" d="M27.384,3a3.344,3.344,0,0,0-3.341,3.341H6.848A2.889,2.889,0,0,0,4,9.264a2.926,2.926,0,0,0,1.67,2.654V39.955A3.136,3.136,0,0,0,8.8,43.087H23.788l-4.619,7.058a.837.837,0,0,0,1.4.917l5.011-7.657a.827.827,0,0,0,.122-.318h.848v5.428a.835.835,0,1,0,1.67,0V43.087h.848a.827.827,0,0,0,.122.318L34.2,51.062a.837.837,0,1,0,1.4-.917l-4.619-7.058H45.966A3.136,3.136,0,0,0,49.1,39.955V11.917a2.926,2.926,0,0,0,1.67-2.654A2.889,2.889,0,0,0,47.92,6.341h-17.2A3.344,3.344,0,0,0,27.384,3Zm0,1.67a1.672,1.672,0,0,1,1.67,1.67H25.714A1.672,1.672,0,0,1,27.384,4.67ZM6.848,8.011H47.92a1.255,1.255,0,0,1,0,2.505.821.821,0,0,0-.246.049.812.812,0,0,0-.246-.049H19.868a.835.835,0,0,0,0,1.67h27.56V39.955a1.463,1.463,0,0,1-1.462,1.462H8.8a1.463,1.463,0,0,1-1.462-1.462V12.187H9.846a.835.835,0,0,0,0-1.67h-3a1.255,1.255,0,0,1,0-2.505Zm2.163,2.505a.835.835,0,0,0,0,1.67H24.879a.835.835,0,0,0,0-1.67ZM31.56,15.527a.834.834,0,0,0-.835.835v4.176H23.208a.834.834,0,0,0-.835.835v3.341H14.857a.834.834,0,0,0-.835.835V37.241H10.681a.835.835,0,0,0,0,1.67H44.087a.835.835,0,1,0,0-1.67H40.747V16.362a.834.834,0,0,0-.835-.835ZM32.4,17.2h6.681V37.241H32.4V17.2Zm-8.351,5.011h6.681V37.241H24.044V22.208Zm-8.351,4.176h6.681V37.241H15.692Z" transform="translate(490.182 2883.107)" fill="#22274e"/>
                        </g>
                    </Icon>   
                    <Title>كتابة محتوى</Title>
                    <SubTitle> 
                        نرشدك لمجتمع عملائك عن طريق كتابة محتوى يليق بطموح توسعاتك المستقبلية نساعدك على إيصال خدماتك عبر استهداف شريحة ترغبها من عملائك المحتملين                   
                    </SubTitle>    
                </Box>
            </SwiperSlide>
        </SecDiv>
    </Swiper>    
    );
}

export default SecondServices;