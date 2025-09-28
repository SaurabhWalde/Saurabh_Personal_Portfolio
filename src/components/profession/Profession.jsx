import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Data Analysis & BI",
    description:
      "I analyze complex datasets using SQL, Excel, and Power BI to uncover insights, build interactive dashboards, and support data-driven decision-making.",
  },
  {
    id: 2,
    title: "Machine Learning",
    description:
      "I design and implement predictive models using Python, Scikit-learn, and TensorFlow to solve real-world problems and optimize business processes.",
  },
  {
    id: 3,
    title: "Natural Language Processing (NLP)",
    description:
      "I work with text data using libraries like NLTK and spaCy to develop applications such as text classification, sentiment analysis, and chatbots.",
  },
  {
    id: 4,
    title: "Business Intelligence Solutions",
    description:
      "I build scalable BI solutions and visual reports, helping organizations track KPIs, monitor performance, and achieve strategic goals.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in transforming raw data into actionable insights
            through analytics, machine learning, and business intelligence.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach blends technical expertise with problem-solving skills
            to create scalable, data-driven solutions that deliver real value.
          </p>
        </div>
        <a
          href="mailto:Saurabhwalde722@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
