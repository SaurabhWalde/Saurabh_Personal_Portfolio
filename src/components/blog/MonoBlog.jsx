const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300 flex flex-col h-full">
      {/* Whole card clickable if link exists */}
      <a
        href={data?.link && data?.link !== "#" ? data.link : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col"
      >
        {/* Clickable image */}
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-56 object-cover cursor-pointer"
        />

        <div className="m-6 text-center flex-1 flex flex-col">
          {/* Title */}
          <p className="text-[14px] xs:text-lg font-semibold text-[#333333] mb-2">
            {data?.title}
          </p>

          {/* Description */}
          {data?.desc && (
            <div className="text-xs xs:text-sm text-gray-500 mb-4 overflow-auto max-h-24">
              {data?.desc}
            </div>
          )}
          {/* Removed View Document button */}
        </div>
      </a>
    </div>
  );
};

export default MonoBlog;
