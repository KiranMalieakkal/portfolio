export interface Work {
  period: string;
  position: string;
  descriptions: string[];
  tech: string[];
}

function WorkGrid({ work }: { work: Work }) {
  console.log(work);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="grid lg:grid-cols-11 md:grid-cols-11 grid-rows-10  lg:w-[50%] md:w-[80%] w-[80%] ">
          <div className="lg:col-span-2 md:col-span-2 row-span-1 text-center  lg:block flex items-center justify-center">
            <p className="text-gray-400 font-libre text-base font-semibold">
              {work?.period}
            </p>
          </div>
          <div className="row-span-1 flex lg:hidden md:hidden items-center justify-center mb-2  ">
            <div className="bg-white w-[1px] h-full "></div>
          </div>
          <div className="lg:block md:block lg:col-span-2 md:col-span-2 hidden py-3 pr-6 pl-3">
            <div className="bg-white h-[1px] "></div>
          </div>
          <div className="flex flex-col lg:col-span-7 md:col-span-7 row-span-8 items-center justify-center text-center lg:text-start md:text-start lg:items-start md:items-start">
            <p className="text-gray-400 font-libre text-base font-semibold uppercase tracking-widest">
              {work?.position}
            </p>
            {work.descriptions.map((description, index) => (
              <p key={index} className="text-white w-[80%] p-4">
                {description}
              </p>
            ))}
            <div className="flex flex-wrap ">
              {work?.tech.map((tech, index) => (
                <div
                  key={index}
                  className="bg-[#253F57] py-[4px] px-[15px] rounded-full text-white mr-[10px] mb-[10px] transition-transform duration-500 ease-in-out transform hover:translate-y-[-15px] "
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkGrid;
