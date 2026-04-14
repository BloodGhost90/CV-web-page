import MeStickerLaptop from "../../assets/MeSticker.png";

export default function Hero() {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-between items-center mx-auto pt-20 pb-5 px-10 gap-10 md:gap-32 max-w-5xl">
      {/* Left Side */}
      <div className="flex-1">
        <h1 className="font-syne text-2xl md:text-5xl font-bold">
          <span className="text-accent">Java</span> Developer & <br />
          <span className="text-accent">React</span> learner
        </h1>
        <p className="text-wrap py-4 text-white/60 text-sm/6">
          Daily Java programer, exploring the front-end side with React and
          Tailwind. I like to resolve real life problems with clean code.
        </p>
        {/* Buttons container */}
        <div className="flex justify-center md:justify-start gap-2">
          <a
            href="#projects"
            className="bg-accent text-black rounded-md font-syne px-5 py-2 hover:bg-accent/80 hover:scale-105 active:bg-accent/80 active:scale-105 transition-all duration-200 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent text-white/60 rounded-md font-syne px-5 py-2 border-2 hover:border-accent hover:text-accent acvtive:border-accent active:text-accent transition-colors duration-200 cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 justify-center items-center">
        <img
          src={MeStickerLaptop}
          alt="Profile Picture"
          className="w-32 h-32 md:w-64 md:h-64 mb-4"
        />
      </div>
    </section>
  );
}
