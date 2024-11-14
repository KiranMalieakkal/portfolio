function TopNav() {
  return (
    <>
      <nav className="border-t-4 border-custom-primary max-h-[123.5px]">
        <div className="flex flex-row p-4">
          <div className="lg:flex justify-around items-center grow hidden ">
            <div>
              <a className="tracking-widest">HOME</a>
            </div>
            <div>
              <a className="tracking-widest">ABOUT</a>
            </div>
            <div>
              <a className="tracking-widest">EXPERIENCE</a>
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
            <div>
              <a className="tracking-widest">BLOG</a>
            </div>
            <div>
              <a className="tracking-widest">PROJECTS</a>
            </div>
            <div>
              <a className="tracking-widest">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default TopNav;
