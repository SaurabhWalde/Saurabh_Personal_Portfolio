import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Have a Data or AI Project Idea? Let's Collaborate!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I'm Saurabh Walde, an AI & ML Engineering graduate with experience in data analysis, 
          machine learning, NLP, and prompt engineering. Whether it's building predictive models, 
          developing dashboards, or delivering actionable insights, I’m eager to bring data-driven 
          solutions to your projects.
        </p>
        <a
          href="mailto:Saurabhwalde722@gmail.com"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Let's Work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
