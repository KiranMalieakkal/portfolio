import WorkGrid from "./WorkGrid";

export interface Work {
  period: string;
  position: string;
  descriptions: string[];
  tech: string[];
}
function Experience({ works }: { works: Work[] }) {
  const handleShowResume = () => {
    // Open the PDF file in a new tab
    window.open("/portfolio//Resume.pdf", "_blank");
  };

  return (
    <>
      <>
        <div
          className="min-h-screen bg-[#1E2F3F] flex flex-col items-center "
          id="experience"
        >
          <div className="lg:m-20 mt-10">
            <p className="text-white font-libre font-extrabold lg:text-[40px] md:text-[40px] text-[24px]">
              Experience
            </p>
          </div>
          {works.map((work, index) => (
            <WorkGrid key={index} work={work} />
          ))}
          <div className="m-10">
            <button
              className=" bg-[#253F57] text-white w-[200px] p-2 hover:scale-105 transition-all duration-500 border-4 border-transparent hover:border-4 hover:border-gray-400 hover:bg-slate-900 "
              onClick={handleShowResume}
            >
              View Full Resume
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default Experience;
