function TopNav() {
  return (
    <>
      <nav className="border-t-4 border-custom-primary">
        <div className="flex flex-row p-4">
          <div className="flex justify-around items-center grow ">
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

          <div className="flex flex-col grow-0">
            <p className="font-libre text-[53px] font-extrabold -mb-4 p-0">
              Kiran Malieakkal
            </p>
            <p className="font-facultyglyphic font-bold text-center mt-0">FULLSTACK DEVELOPER</p>
          </div>
          <div className="flex justify-around items-center grow ">
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
