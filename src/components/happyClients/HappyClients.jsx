import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { ArrowLeft, ArrowRight } from "lucide-react";

const mySkills = [
  "Python", "SQL", "Excel",
  "Data Analysis", "Power BI", "Matplotlib", "Seaborn", "Plotly",
  "Machine Learning", "Scikit-learn", "TensorFlow", "XGBoost",
  "NLTK", "Tokenization", "Stemming", "Lemmatization", "TF-IDF", "Sentiment Analysis",
  "Flask", "Streamlit",
  "Git", "GitHub", "Jupyter Notebook", "VS Code", "Google Colab", "Kaggle",
  "HTML", "CSS",
  "Portfolio Projects", "Problem Solving", "Communication Skills"
];

const SkillMarquee = () => {
  const [direction, setDirection] = useState("left");

  return (
    <div className="relative bg-gray-900 py-6 px-4 flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => setDirection("right")}
        className="absolute left-2 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white shadow-lg transition-all"
      >
        <ArrowLeft size={22} />
      </button>

      <div className="w-full">
        <h2 className="text-center text-white text-xl md:text-2xl font-semibold mb-4">
          My Skills & Expertise
        </h2>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          direction={direction}
          className="flex items-center"
        >
          {mySkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-3 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => setDirection("left")}
        className="absolute right-2 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white shadow-lg transition-all"
      >
        <ArrowRight size={22} />
      </button>
    </div>
  );
};

export default SkillMarquee;
