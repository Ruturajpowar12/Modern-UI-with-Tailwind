import { Play } from "lucide-react";

function App() {
  return (
    <div className="w-full h-screen bg-white">
      <nav className="flex justify-between  h-26 items-center ">
        <h1 className="ml-35 text-3xl font-bold">Appwind.</h1>

        <ul className="flex justify-between gap-15 font-semibold text-lg">
          <li>Features</li>
          <li>About</li>
          <li>Prizing</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
        <button className="mr-25 bg-purple-600 text-white h-11 w-29 text-center  rounded-lg transition-transform duration-300 hover:scale-95">
          Download
        </button>
      </nav>

      <div className=" flex  shadow-md bg-linear-to-tl from-cyan-100 to-purple-100 mx-20 mt-7 mb-8 p-10 rounded-xl pb-22">
        <div className="flex w-3/5 flex-col gap-1 p-6">
          <h1 className="text-4xl leading-13">
            Tailwind CSS <br />
            Template for{" "}
            <span className="font-bold">
              App
              <br />
              and Software Site.
            </span>
          </h1>
          <p className=" ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            ab.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Tempore, quibusdam. Odio nulla quam possimus?Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Sit obcaecati itaque porro
            labore inventore vitae!
          </p>
          <div className="flex gap-10 justify- items-center">
            <button className="transition-transform duration-300 hover:scale-95 bg-purple-600 text-white h-15 w-34 rounded-2xl mt-10">
              Download
            </button>
            <div className="bg-linear-to-bl from-cyan-200 to-purple-100 mt-10 h-15 w-60   rounded-2xl flex items-center justify-between gap-4 transition-transform duration-300 hover:scale-95">
              <button className="bg-purple-600 flex justify-center items-center text-white h-15 w-15 rounded-full ">
                <Play />
              </button>
              <p className="font-bold mr-8">Watch Video</p>
            </div>
          </div>
        </div>
        <div className="right ">
          <img
            className="ml-[120px] w-[220px] h-[400px] rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-95"
            src="../src/assets/tailwindcss-app-template.PNG"
            alt="main_content"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
