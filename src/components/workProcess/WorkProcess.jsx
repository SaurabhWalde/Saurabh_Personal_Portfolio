import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "AI Trainer / Prompt Engineer - Soul AI",
    description: [
      "Trained and fine-tuned large language models (LLMs) using RLHF.",
      "Optimized prompts and evaluation workflows, improving model response accuracy by 20%.",
      "Reviewed and generated technical content to enhance model performance and reliability."
    ],
    date: "Sep 2023 - Aug 2024 (Freelance)",
  },
  {
    id: 2,
    title: "Stats & Probability Expert - Chegg India",
    description: [
      "Solved and explained 400+ problems in statistics and probability.",
      "Delivered clear, step-by-step solutions maintaining 95%+ positive feedback.",
      "Simplified advanced topics to support global student learning."
    ],
    date: "Apr 2023 - Oct 2024 (Freelance)",
  },
  {
    id: 3,
    title: "Data Analyst - ELAVATE LABS",
    description: [
      "Designed interactive Power BI dashboards to track financial KPIs.",
      "Executed complex SQL queries for data extraction, cleaning, and transformation.",
      "Identified revenue trends and actionable insights, improving report clarity by 15%."
    ],
    date: "Apr 2025 – May 2025 (Internship)",
  },
  {
    id: 4,
    title: "Prompt Engineer – Ransh Innovation Pvt. Ltd.",
    description: [
      "Created domain-specific prompts and learning materials for educational platforms.",
      "Developed 100+ structured prompts improving model accuracy and engagement by 30%.",
      "Applied advanced prompt engineering techniques to generate high-quality content."
    ],
    date: "Aug 2024 - Nov 2024 (Internship)",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content px-4 py-10 lg:py-20 xl:py-28 max-w-screen-xl mx-auto"
      id="work-process"
    >
      <div className="mb-10 text-center">
        <p className="section-title text-2xl font-bold">Professional Experience</p>
        <p className="mt-4 md:text-lg text-sm font-normal text-gray-500">
          A journey through impactful AI, data analytics, and prompt engineering roles, showcasing practical applications of data-driven solutions and model development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {workStepData.map((data, index) => (
          <WorkSteps
            data={data}
            style="h-full flex flex-col justify-start"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
