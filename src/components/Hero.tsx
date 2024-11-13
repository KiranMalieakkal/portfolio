import image from "../assets/Portofolio_Image-squared.png";
function Hero() {
  return (
    <>
      <div className=" flex justify-center items-center min-h-[calc(100vh-123.5px)] ">
        <div className="">
          <div className="-mb-5 px-10">
            <p className="font-haviland text-[64px]">Hi, I am Kiran!</p>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="-mr-14 z-10 hidden lg:block md:block">
                <img
                  src={image}
                  className=" w-[255px] h-[255px] rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col max-w-[635px] bg-red-100 leading-[2.5rem] px-[60px] py-[32px]">
              <p className="text-[40px] text-center font-libre font-light">
                Crafting seamless digital experiences by blending front-end
                finesse with back-end resilience is what I'm good at
              </p>
              <div className="w-full flex items-center justify-center p-4">
                <button className=" bg-slate-900 text-white w-1/5">
                  About Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
