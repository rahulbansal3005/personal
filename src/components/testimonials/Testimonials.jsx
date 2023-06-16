import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/avatar1.jpg";
import AVTR2 from "../../assests/avatar2.jpg";
import AVTR3 from "../../assests/avatar3.jpg";
import AVTR4 from "../../assests/avatar4.jpg";

// import Swiper core and required modules
import { Pagination , Navigation, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Mudassir Ali",
    post: "Software Engineer at LinkedIn",
    review:"I worked with Harmeet during my initial years of Career as a Co-Worker. He is very Outspoken and one of the Creative minds I have ever worked with. His dedication towards the completion of work is one of the things I admire the most. He was my team member and was very spontaneous and enthusiastic to dig into the root cause of problem and come up with optimal solutions. I remember a customer project in which he came up with an optimised solution for API Calls making our project more robust. Working along with him has brought the best out of me and he has always kept me on my toes to push through deadlines. I happily recommend Harmeet  to work in creative and fast paced organizations who are looking for a competent, quick learner and adaptability as he possesses all of these skills and is at his best under pressure.",
  },
  {
    avatar: AVTR2,
    name: "Gayatri Shinde",
    post: "Full Stack Developer at Intangles ",
    review:"Harmeet has been my go to person for brainstorming and quick debugging sessions. I got a chance to collaborate with him during multiple projects at Edubrite. Harmeet is a skilled Java developer, and his knowledge in hibernate and spring makes him stand out. Over the time he has upgraded his programming skills. Harmeet has good problem solving skills and his ability to understand the problems and reach the best solution is remarkable. I have worked with him for over a year in both of our early stages of careers during which I have seen an exponential growth in his skills!",
  },
  {
    avatar: AVTR3,
    name: "Neeraj Baipureddy",
    post: "Software Engineer at LinkedIn",
    review:"Harmeet is a highly accomplished professional renowned for his exceptional qualities and remarkable contributions within the industry. During our collaboration on a Salesforce project at Edubrite, I had the privilege of witnessing Harmeet's proactive nature and unwavering commitment to excellence. His profound expertise in Java, MySQL  played a pivotal role in the success of our team. I personally benefitted from his extensive knowledge, particularly in debugging. Harmeet's meticulous attention to detail, unwavering dedication to producing top-notch work, and remarkable problem-solving skills significantly elevated the outcome of our project. Furthermore, his strong work ethic, remarkable teamwork acumen, and positive attitude will make him an invaluable asset to any company",
  },
  // {
  //   avatar: AVTR4,
  //   name: "Ashween Ramakrishan",
  //   post: "Software Engineer at LinkedIn",
  //   review:"Harmeet is a highly accomplished professional renowned for his exceptional qualities and remarkable contributions within the industry. During our collaboration on a Salesforce project at Edubrite, I had the privilege of witnessing Harmeet's proactive nature and unwavering commitment to excellence. His profound expertise in Java, MySQL  played a pivotal role in the success of our team. I personally benefitted from his extensive knowledge, particularly in debugging. Harmeet's meticulous attention to detail, unwavering dedication to producing top-notch work, and remarkable problem-solving skills significantly elevated the outcome of our project. Furthermore, his strong work ethic, remarkable teamwork acumen, and positive attitude will make him an invaluable asset to any company",
  // },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Collegues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
        autoplay={{delay: 4000,disableOnInteraction: false}}
       pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review ,post }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <h5 className="text-light">{post}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
