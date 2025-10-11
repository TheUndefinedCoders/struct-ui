const BtnReadMore = ({ label = "Read More", link = "#", target = "_self", className = ""}) => {
  return (
    <a href={link} target={target} className={`w-full ${className}`}>
      <div className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-cyan-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-full">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full bg-gradient-to-r from-cyan-500 to-blue-600"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          {label}
        </span>
      </div>
    </a>
  );
};

export default BtnReadMore;
