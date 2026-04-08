import StatCard from "../ui/StatCard";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-10 py-20 items-center"
    >
      {/* Left Side */}
      <div className="flex flex-col gap-6">
        <span className="text-accent font-syne text-sm tracking-widest uppercase">
          01 - About Me
        </span>
        <h2 className="font-syne text-3xl md:text-4xl font-bold text-white">
          Who I am
        </h2>
        <div className="flex flex-col gap-4 text-white/60 text-sm leading-relaxed">
          <p>
            Hi, I'm Damian — a Software Developer working at a large
            international company where I build and maintain robust backend
            applications using Java.
          </p>
          <p>
            I'm currently studying a Computer Science degree at an online
            university, with the goal of growing into a Software Engineer role.
          </p>
          <p>
            In my free time I enjoy learning new technologies. Right now I'm
            focused on React and Tailwind CSS, expanding my vision towards
            fullstack development and understanding how frontend and backend fit
            together.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard value="Java" label="Main Language" />
        <StatCard value="React" label="Learning" />
        <StatCard value="+1" label="Projects Delivered" />
        <StatCard value="∞" label="Desire to learn" />
      </div>
    </section>
  );
}
