function App() {
  return (
    <div className=" h-screen w-full ">
      <nav className="   w-full flex justify-between items-center border-b-2 shadow-2xl border-gray-100 h-20 p-5">
        <div className="logo flex justify-between items-center  ml-6">
          <img
            className="h-18 w-20 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsepRSZ2Dfxh6ZdBFeZoCsm_KW5WwCFn2qw&s"
            alt="logo"
          />
          <h1 className=" font-extrabold text-3xl">Landwind</h1>
        </div>
        <div className="nav-link flex gap-10 mr-110 ">
          <a href="#" className="hover:font-bold">
            Company
          </a>
          <a href="#" className="hover:font-bold">
            Marketplace
          </a>
          <a href="#" className="hover:font-bold">
            Features
          </a>
          <a href="#" className="hover:font-bold">
            Team
          </a>
          <a href="#" className="hover:font-bold">
            Contact
          </a>
        </div>

        <div className="nav-btn flex gap-7 mr-10">
          <button className="font-bold h-10 px-4 rounded-lg hover:bg-gray-300">
            Log In
          </button>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 hover:scale-90">
            Get started
          </button>
        </div>
      </nav>

      <main className=" h-4/5  flex ">
        <div className="left  w-3/5 flex flex-col p-20">
          <h1 className=" text-6xl  font-extrabold  font-bold mb-7 mt-20  ">
            Building Digital <br /> products & brands.
          </h1>
          <p className="mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            perferendis facere labore tempora quis illo? Hic, tempore. Nesciunt
            autem facere aliquam. Quisquam corporis est iste error aspernatur,
            vitae ab eveniet?
          </p>
          <div className="btn-box flex gap-5">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg  transition-transform duration-300 hover:scale-90">
              Start 30 day free trial
            </button>
            <button className="font-bold h-10 px-4 rounded-lg hover:bg-gray-300">
              Pricing & FAQ
            </button>
          </div>
        </div>
        <div className="right w-2/5 flex justify-center items-center">
          <img
            className="object-cover"
            src="https://static.vecteezy.com/system/resources/thumbnails/047/783/141/small_2x/a-colorful-illustration-depicting-digital-marketing-concepts-featuring-a-target-with-an-arrow-hitting-the-bullseye-a-computer-monitor-a-smartphone-and-other-visual-elements-free-vector.jpg"
            alt="main-pic"
          />
        </div>
      </main>
      <footer className=" w-full text-center border-t-2 shadow-2xl border-gray-100  p-5">
        <p className="font-bold ">
          © 2026 Your Name. Designed and developed with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
