const ScearchBar = ({toggleAddUser}) => {
    return (
        <section className="flex justify-center mb-7">
        <div className="w-10/12 flex text-xl gap-4 justify-center items-center">
          <div className="flex w-full justify-start border-2 items-center gap-5 px-4 py-3 text-sm rounded-md">
            <i className="fa-solid fa-magnifying-glass text-2xl text-white"></i>
            <input name="ScearchBar" type="text" placeholder="Search Contact" className="bg-transparent focus:outline-none w-full text-lg text-white" />
          </div>
          <div className="cursor-pointer" onClick={toggleAddUser}><i className="fa-brands fa-creative-commons-sampling-plus text-5xl text-white"></i></div>
        </div>
      </section>
    );
  }
  
  export default ScearchBar;
  