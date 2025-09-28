import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";
import card7 from "../../assets/images/portfolio-images/card-7.png";
import card8 from "../../assets/images/portfolio-images/card-8.png";
import card9 from "../../assets/images/portfolio-images/card-9.png";
import card10 from "../../assets/images/portfolio-images/card-10.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Power BI",
    title: "Financial Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing revenue, transactions, and sales rep performance across regions and products, with KPIs and slicers.",
    link: "https://github.com/SaurabhWalde/Financial_Sales_Dashboard",
  },
  {
    id: 2,
    image: card2,
    category: "SQL",
    title: "E-Commerce SQL Analysis",
    description:
      "PostgreSQL-based data analysis on e-commerce datasets, including joins, subqueries, aggregates, reporting views, and query optimizations.",
    link: "https://github.com/SaurabhWalde/E-Commerce-SQL-Analysis",
  },
  {
    id: 3,
    image: card3,
    category: "Python / Data Cleaning",
    title: "Mall Customer Segmentation Cleaning",
    description:
      "Cleaned and preprocessed the Mall Customer Segmentation dataset using Python and Pandas, handling missing values, duplicates, outliers, and type conversions.",
    link: "https://github.com/SaurabhWalde/Data_Cleaning_Project",
  },
  {
    id: 4,
    image: card4,
    category: "Power BI",
    title: "Superstore Sales Dashboard",
    description:
      "Power BI dashboard visualizing sales across regions and categories with Month-Year trends, slicers, KPIs, and business insights.",
    link: "https://github.com/SaurabhWalde/Superstore_Sales_Dashboard",
  },
  {
    id: 5,
    image: card5,
    category: "Power BI / Data Visualization",
    title: "Data Visualization & Storytelling",
    description:
      "Created compelling dashboards with Power BI to tell business stories, including sales KPIs, category analysis, and 15-day sales forecast.",
    link: "https://github.com/SaurabhWalde/Data_Visualization_Project",
  },
  {
    id: 6,
    image: card6,
    category: "Flask / SQL",
    title: "SQL Chat Assistant",
    description:
      "Flask-based chatbot interacting with SQLite database to process limited natural language queries with error handling via a web interface.",
    link: "https://github.com/SaurabhWalde/Chatbot_Saurabh",
  },
  {
    id: 7,
    image: card7,
    category: "Python / Analytics",
    title: "Sales Analytics Dashboard",
    description:
      "Jupyter Notebook performing sales analysis using SQLite, Pandas, and Matplotlib/Seaborn, generating visual dashboards and professional insights.",
    link: "https://github.com/SaurabhWalde/Sales_Analytics_Project",
  },
  {
    id: 8,
    image: card8,
    category: "Machine Learning",
    title: "ECG-Based Stress Detection System",
    description:
      "ML model to detect stress levels (Low/Medium/High) from ECG signal parameters, showcasing applied ML for healthcare and signal analysis.",
    link: "https://drive.google.com/drive/folders/1xkL2eQOVzRDNipllSFAdRCR329YhC871?usp=sharing", // If you have a repo link, replace it
  },
  {
    id: 9,
    image: card9,
    category: "NLP / Text Analysis",
    title: "Text Analysis",
    description:
      "Scraped articles from URLs and analyzed text using Python, NLTK, and custom dictionaries for sentiment, readability, and word metrics.",
    link: "https://drive.google.com/drive/folders/1mWIb5CPQXAxbXS96SaS40dP-fwpMKP9y?usp=sharing",
  },
  {
    id: 10,
    image: card10,
    category: "Machine Learning",
    title: "Predictive Modeling / ML Projects",
    description:
      "Developed ML models using Python to predict outcomes, optimize performance, and support data-driven decision-making workflows.",
    link: "#!", // Add repo link if applicable
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in Data
            Analytics, Machine Learning, and Business Intelligence.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/SaurabhWalde"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
