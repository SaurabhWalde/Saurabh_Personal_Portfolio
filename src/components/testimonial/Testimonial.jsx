import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Built interactive dashboards and predictive models that helped stakeholders make data-driven decisions.",
    quote: `During my internship at ELAVATE LABS, I designed Power BI dashboards tracking key financial KPIs and executed complex SQL queries on large datasets. This improved reporting clarity and efficiency by 15%, helping the team focus on high-performing areas.`,
    name: "Saurabh Walde",
    designation: "Data Analyst Intern",
  },
  {
    message:
      "Developed structured prompts and educational content that improved AI model performance and engagement.",
    quote: `As a Prompt Engineering Intern at Ransh Innovation, I created over 100 domain-specific prompts, applying advanced prompt engineering techniques. This increased model accuracy and learning engagement by 30%.`,
    name: "Saurabh Walde",
    designation: "Prompt Engineering Intern",
  },
  {
    message:
      "Trained and fine-tuned AI models to enhance reliability and response accuracy.",
    quote: `While freelancing at Soul AI, I optimized large language model prompts and applied RLHF techniques. My contributions improved model response accuracy by 20% and enhanced the quality of technical and instructional content.`,
    name: "Saurabh Walde",
    designation: "AI Trainer / Prompt Engineer",
  },
  {
    message:
      "Simplified complex statistical concepts and helped students achieve better academic results.",
    quote: `As a Subject Matter Expert at Chegg India, I solved and explained 400+ problems in statistics and probability with 95%+ positive feedback, providing clear step-by-step solutions that improved learning outcomes.`,
    name: "Saurabh Walde",
    designation: "Subject Matter Expert – Statistics / Probability",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonials</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
