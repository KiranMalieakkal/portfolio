function TopNav() {
  return (
    <>
      <nav
        className="border-t-4 border-custom-primary max-h-[123.5px]"
        id="home"
      >
        <div className="flex flex-row p-4">
          <div className="lg:flex justify-around items-center grow hidden ">
            <div className="hover:border-4 p-2 hover:border-red-100 hover:scale-105 transition-all duration-300 border-4 border-transparent">
              <a href="#home" className="tracking-widest">
                HOME
              </a>
            </div>
            <div className="hover:border-4 p-2 hover:border-red-100 hover:scale-105 transition-all duration-300 border-4 border-transparent">
              <a href="#about" className="tracking-widest ">
                ABOUT
              </a>
            </div>
            <div className="hover:border-4 p-2 hover:border-red-100 hover:scale-105 transition-all duration-300 border-4 border-transparent">
              <a href="#experience" className="tracking-widest">
                EXPERIENCE
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:grow-0 grow items-center justify-center">
            <p className="font-libre lg:text-[53px] md:text-[53px] text-[40px] font-extrabold -mb-4 p-0 text-center">
              Kiran Malieakkal
            </p>
            <p className="font-facultyglyphic font-bold text-center mt-0">
              FULLSTACK DEVELOPER
            </p>
          </div>
          <div className="lg:flex justify-around items-center grow hidden ">
            <div className="hover:border-4 p-2 hover:border-red-100 hover:scale-105 transition-all duration-300 border-4 border-transparent">
              <a
                href="https://kiranmalieakkal.wordpress.com"
                className="tracking-widest"
                target="_blank"
              >
                BLOG
              </a>
            </div>
            <div className="hover:border-4 p-2 hover:border-red-100 hover:scale-105 transition-all duration-300 border-4 border-transparent">
              <a href="#projects" className="tracking-widest">
                PROJECTS
              </a>
            </div>
            <div className="hover:border-4 p-2 hover:border-red-100 hover:scale-105 transition-all duration-300 border-4 border-transparent">
              <a href="#contact" className="tracking-widest">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default TopNav;
