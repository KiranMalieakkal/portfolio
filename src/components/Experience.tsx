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
    window.open("/Kiran_Malieakkal_CV.pdf", "_blank");
  };

  return (
    <>
      <>
        <div className="min-h-screen bg-[#1E2F3F] flex flex-col items-center ">
          <div className="lg:m-20 m-10">
            <p className="text-white font-libre font-extrabold lg:text-[40px] md:text-[40px] text-[24px]">
              Experience
            </p>
          </div>
          {works.map((work, index) => (
            <WorkGrid key={index} work={work} />
          ))}
          <div className="m-10">
            <button
              className=" bg-slate-900 text-white w-[200px] p-2 border-4 border-custom-quaternary"
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
