import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl shadow-md hover:shadow-2xl transition duration-500 ease-out p-6 sm:p-8 bg-white ${style}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="flex flex-col h-full">
        <p className="font-semibold text-lg sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <ul className="mt-2 text-sm sm:text-base text-gray-500 list-disc ml-5 space-y-2">
          {data?.description.map((point, idx) => (
            <li key={idx} className="text-justify">{point}</li>
          ))}
        </ul>
        {data?.date && (
          <span className="mt-4 text-xs sm:text-sm text-gray-400">{data.date}</span>
        )}
      </div>
    </div>
  );
};

export default WorkSteps;
