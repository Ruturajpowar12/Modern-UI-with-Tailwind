import React from "react";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24  ">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-indigo-600 font-semibold mb-4">
            Electron Developers
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build desktop apps
            <span className="text-indigo-600"> with web technologies</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Create cross-platform desktop applications using JavaScript, HTML,
            and CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">
              Download Now
            </button>

            <button className="border px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Hero"
            className="rounded-xl shadow-lg w-full transition-transform duration-300 hover:scale-101  hover:shadow-indigo-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
