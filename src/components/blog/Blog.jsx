import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Added Navigation
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Navigation CSS
import "./blog.css";


// ===== Certificates (10) =====
import cert1 from "../../assets/images/certificates/cert1.jpg";
import cert2 from "../../assets/images/certificates/cert2.jpg";
import cert3 from "../../assets/images/certificates/cert3.jpg";
import cert4 from "../../assets/images/certificates/cert4.jpg";
import cert5 from "../../assets/images/certificates/cert5.jpg";
import cert6 from "../../assets/images/certificates/cert6.jpg";
import cert7 from "../../assets/images/certificates/cert7.jpg";
import cert8 from "../../assets/images/certificates/cert8.jpg";
import cert9 from "../../assets/images/certificates/cert9.jpg";
import cert10 from "../../assets/images/certificates/cert10.jpg";

// ===== Internships (3 offers + 3 certificates) =====
import offer1 from "../../assets/images/internships/offer1.jpg";
import offer2 from "../../assets/images/internships/offer2.jpg";
import offer3 from "../../assets/images/internships/offer3.jpg";
import internCert1 from "../../assets/images/internships/cert1.jpg";
import internCert2 from "../../assets/images/internships/cert2.jpg";
import internCert3 from "../../assets/images/internships/cert3.jpg";

// ===== Research Papers & Certificates (8) =====
import paper1 from "../../assets/images/research/paper1.jpg";
import paper2 from "../../assets/images/research/paper2.jpg";
import paper3 from "../../assets/images/research/paper3.jpg";
import paper4 from "../../assets/images/research/paper4.jpg";
import paperCert1 from "../../assets/images/research/cert1.jpg";
import paperCert2 from "../../assets/images/research/cert2.jpg";
import paperCert3 from "../../assets/images/research/cert3.jpg";
import paperCert4 from "../../assets/images/research/cert4.jpg";

// ===== Swiper Breakpoints =====
const custom_breakpoints = {
  640: { slidesPerView: 2, spaceBetween: 15 },
  768: { slidesPerView: 3, spaceBetween: 15 },
  1220: { slidesPerView: 4, spaceBetween: 24 },
};

// ===== Certificates Data =====
const certificateData = [
  {
    id: 1,
    image: cert1,
    title: "IBM – Data Analysis Using Python",
    desc: "Learned Python libraries for data analysis (Pandas, NumPy, Matplotlib) and applied them in real-world projects.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert1.jpg",
  },
  {
    id: 2,
    image: cert2,
    title: "HP LIFE – Data Science & Analytics",
    desc: "Completed HP LIFE program focusing on business analytics and data-driven decision-making.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert2.jpg",
  },
  {
    id: 3,
    image: cert3,
    title: "LinkedIn – Programming Foundation: Data Structures",
    desc: "Learned core DSA principles for efficient problem-solving and algorithm design.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert3.jpg",
  },
  {
    id: 4,
    image: cert4,
    title: "Scaler – Python Course",
    desc: "Covered Python fundamentals, DSA concepts, and hands-on coding challenges.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert4.jpg",
  },
  {
    id: 5,
    image: cert5,
    title: "HackerRank – SQL (Basic)",
    desc: "Verified SQL proficiency with joins, subqueries, and aggregate functions on HackerRank.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert5.jpg",
  },
  {
    id: 6,
    image: cert6,
    title: "HP LIFE – Effective Leadership",
    desc: "Learned leadership styles, ethical decision-making, and team management strategies.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert6.jpg",
  },
  {
    id: 7,
    image: cert7,
    title: "Edureka – Full Stack Web Development",
    desc: "Gained hands-on experience in front-end and back-end development.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert7.jpg",
  },
  {
    id: 8,
    image: cert8,
    title: "Learn Vern – MS Excel Course",
    desc: "Gained skills in advanced Excel features like pivot tables, charts, and business reporting.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert8.jpg",
  },
  {
    id: 9,
    image: cert9,
    title: "AccunAI – AI Trainer Appreciation",
    desc: "Applied domain expertise in AI training and RLHF to improve LLM accuracy.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert9.jpg",
  },
  {
    id: 10,
    image: cert10,
    title: "Soul AI – AI Project Contribution",
    desc: "Contributed as an AI Trainer, fine-tuning LLMs with RLHF and generating technical content.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/cert10.jpg",
  },
];

// ===== Internships Data =====
const internshipData = [
  {
    id: 11,
    image: offer1,
    title: "Offer letter - Ransh Innovation",
    desc: "Chosen as Prompt Engineering Intern to build AI-driven educational content.",
    link: "#",
  },
  {
    id: 12,
    image: offer2,
    title: "Offer Letter – ELAVATE LABS",
    desc: "Selected as Data Analyst Intern to work on SQL queries, financial KPIs, and Power BI dashboards.",
    link: "#",
  },
  {
    id: 13,
    image: offer3,
    title: "Offer Letter – Unified Mentor",
    desc: "Selected as Front-End Intern to build interactive web interfaces using modern JavaScript frameworks.",
    link: "#",
  },
  {
    id: 14,
    image: internCert1,
    title: "Internship Certificate – Ransh Innovation",
    desc: "Created over 100 domain-specific prompts for educational AI systems, boosting engagement by 30%.",
    link: "#",
  },
  {
    id: 15,
    image: internCert2,
    title: "Internship Certificate – ELAVATE LABS",
    desc: "Completed internship by designing interactive dashboards and improving reporting clarity by 15%.",
    link: "#",
  },
  {
    id: 16,
    image: internCert3,
    title: "Internship Certificate – Unified Mentor",
    desc: "Gained hands-on experience in front-end development, building interactive web interfaces using modern technologies.",
    link: "#",
  },
];

// ===== Research Data =====
const researchData = [
  {
    id: 17,
    image: paper1,
    title: "ECG-Based Stress Assessment: A Data-Driven ML Approach",
    desc: "Developed an ECG-based stress assessment system using ML models (Logistic Regression, SVM, Random Forest, XGBoost) with feature extraction and real-time monitoring.",
    link: "https://ijrpr.com/uploads/V6ISSUE5/IJRPR46254.pdf#:~:text=This%20study%20introduces%20an%20ECG%20signal-based%20machine%20learning,by%20utilizing%20important%20heart%20rate%20variability%20%28HRV%29%20factors.",
  },
  {
    id: 18,
    image: paper2,
    title: "ECG-Based Stress Detection Using Machine Learning",
    desc: "Surveyed ML models (SVM, RF, CNN, LSTM) for ECG-based stress detection and wearable applications.",
    link: "https://ijrpr.com/uploads/V5ISSUE12/IJRPR36111.pdf",
  },
  {
    id: 19,
    image: paper3,
    title: "Barcode Labels for Electronic Data Collection",
    desc: "Explored the use of barcode labels to improve efficiency, accuracy, and real-time tracking in electronic data collection across industries.",
    link: "https://ijcrt.org/papers/IJCRT2311473.pdf",
  },
  {
    id: 20,
    image: paper4,
    title: "Hopfield Neural Network in Image Processing Applications",
    desc: "Study of Hopfield Neural Networks (HNN) for image processing tasks like reconstruction, segmentation, and restoration. Covers HNN architecture, learning, advantages, and limitations in enhancing image analysis.",
    link: "https://ijrpr.com/uploads/V4ISSUE6/IJRPR14214.pdf",
  },
  {
    id: 21,
    image: paperCert1,
    title: "ECG-Based Stress Assessment: A Data-Driven Machine Learning Approach",
    desc: "Certificate of publication for Saurabh Walde’s research on ECG-based stress assessment using machine learning, published in the International Journal of Research Publication and Reviews, Volume 6, Issue 5 (May 2025). The study explores automated stress detection using ECG signals and classification models for real-time health monitoring.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/ECG_certificate.pdf",
  },
  {
    id: 22,
    image: paperCert2,
    title: "ECG-Based Stress Detection Using A Machine Learning Approach: Survey Paper",
    desc: "Surveyed ML models (SVM, RF, CNN, LSTM) for ECG-based stress detection and wearable applications.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/ECG1_certificate.pdf",
  },
  {
    id: 23,
    image: paperCert3,
    title: "Barcode Labels for Electronic Data Collection",
    desc: "Explored the use of barcode labels to improve efficiency, accuracy, and real-time tracking in electronic data collection across industries.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/barcode_certificate.pdf",
  },
  {
    id: 24,
    image: paperCert4,
    title: "Hopfield Neural Network in Image Processing Applications",
    desc: "Study of Hopfield Neural Networks (HNN) for image processing tasks like reconstruction, segmentation, and restoration. Covers HNN architecture, learning, advantages, and limitations in enhancing image analysis.",
    link: "https://github.com/SaurabhWalde/Certificates/blob/main/hopfield_certificates.pdf",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="achievements">
      {/* Certificates Section */}
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Certifications</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Explore my professional certifications.
        </p>
      </div>
      <Swiper grabCursor breakpoints={custom_breakpoints} pagination={{ clickable: true }} modules={[Pagination]}>
        {certificateData?.map((data) => (
          <SwiperSlide key={data.id} className="mb-10">
            <MonoBlog data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Internships Section */}
      <div className="max-w-135 text-center mx-auto pt-20 pb-17.5">
        <p className="section-title pb-6">Internships</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Internship offers and completion certificates.
        </p>
      </div>
      <Swiper grabCursor breakpoints={custom_breakpoints} pagination={{ clickable: true }} modules={[Pagination]}>
        {internshipData?.map((data) => (
          <SwiperSlide key={data.id} className="mb-10">
            <MonoBlog data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Research Section */}
      <div className="max-w-135 text-center mx-auto pt-20 pb-17.5">
        <p className="section-title pb-6">Research Papers</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          My research contributions and associated certifications.
        </p>
      </div>
      <Swiper grabCursor breakpoints={custom_breakpoints} pagination={{ clickable: true }} modules={[Pagination]}>
        {researchData?.map((data) => (
          <SwiperSlide key={data.id} className="mb-10">
            <MonoBlog data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Blog;
