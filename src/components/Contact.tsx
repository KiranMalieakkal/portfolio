function Contact() {
  return (
    <>
      <div className="min-h-screen bg-[#1E2F3F] flex flex-col items-center p-5 ">
        <div className="flex flex-col w-[80%] border-8 bg-yellow-50 border-red-100 p-10 mt-auto mb-auto h-[80%]">
          <div className="flex items-center justify-center">
            <p className="uppercase font-oswald text-[40px] text-gray-400 tracking-widest">
              get in touch
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className=" font-merriweather text-base text-black tracking-wide">
              I'm always excited to connect with fellow developers, potential
              collaborators, or anyone interested in tech! Feel free to reach
              out through any of these channels - I'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-col ml-auto mr-auto">
            <div className="flex flex-row space-x-2 items-center justify-center hover:scale-105 transition-all duration-300 p-2 rounded-lg">
              <div className="p-2 bg-red-100  rounded-full">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/mail.png"
                  alt="mail"
                />
              </div>
              <a href="mailto:kiranmalieakkal18@gmail.com" className=" w-[80%]">
                <p className=" font-oswald text-[20px] text-gray-400 tracking-widest hover:text-red-200 hover:underline transition-all duration-300">
                  kiranmalieakkal18@gmail.com
                </p>
              </a>
            </div>
            <div className="flex flex-row space-x-2 items-center justify-center hover:scale-105 transition-all duration-300 p-2 rounded-lg">
              <div className="p-2 bg-red-100 rounded-full">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/mail.png"
                  alt="mail"
                />
              </div>
              <a
                href="https://github.com/KiranMalieakkal"
                className="hover:text-yellow-600 transition-all duration-300 w-[80%]"
                target="_blank"
              >
                <p className=" font-oswald text-[20px] text-gray-400 tracking-widest hover:text-red-200 hover:underline transition-all duration-300">
                  github.com/KiranMalieakkal
                </p>
              </a>
            </div>
            <div className="flex flex-row space-x-2 items-center justify-center hover:scale-105 transition-all duration-300 p-2 rounded-lg">
              <div className="p-2 bg-red-100 rounded-full">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/mail.png"
                  alt="mail"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/kiran-malieakkal-2a66541a5/"
                className="hover:text-yellow-600 transition-all duration-300 w-[80%]"
                target="_blank"
              >
                <p className=" font-oswald text-[20px] text-gray-400 tracking-widest hover:text-red-200 hover:underline transition-all duration-300">
                  linkedin.com/in/kiran-malieakkal
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#1E2F3F] uppercase tracking-[0.4em] text-white text-[12px] mt-auto text-center">
          <p>COPYRIGHT © 2024 · KIRAN MALIEAKKAL</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
