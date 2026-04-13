export default function Contact() {
  return (
    <section
      id="contact"
      className="gap-10 max-w-5xl mx-auto px-10 py-20 w-full"
    >
      <div className="flex flex-col gap-6">
        <span className="text-accent font-syne text-sm tracking-widest uppercase">
          04 - Contact
        </span>
        <h2 className="font-syne text-3xl md:text-4xl font-bold text-white pb-6">
          Get in touch
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left — links */}
        <div className="flex flex-col gap-4">
          <p className="text-white/60 text-sm leading-relaxed">
            Feel free to reach out for projects, questions or just to connect.
          </p>
          <a
            href="mailto:tuemail@gmail.com"
            className="flex items-center gap-3 text-white/60 text-sm hover:text-accent hover:border-accent active:text-accent transition-colors duration-200 cursor-pointer bg-white/5 border border-white/10 rounded-xl px-4 py-3"
          >
            <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
            tuemail@gmail.com
          </a>

          <a
            href="https://github.com/BloodGhost90"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/60 text-sm hover:text-accent hover:border-accent active:text-accent transition-colors duration-200 cursor-pointer bg-white/5 border border-white/10 rounded-xl px-4 py-3"
          >
            <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
            github.com/BloodGhost90
          </a>

          <a
            href="https://linkedin.com/in/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/60 text-sm hover:text-accent hover:border-accent active:text-accent transition-colors duration-200 cursor-pointer bg-white/5 border border-white/10 rounded-xl px-4 py-3"
          >
            <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
            linkedin.com/in/tuperfil
          </a>
        </div>

        {/* Right — formulario */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-white/40 text-xs tracking-widest uppercase">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white/40 text-xs tracking-widest uppercase">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-white/40 text-xs tracking-widest uppercase">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button className="bg-accent text-black font-syne font-bold px-6 py-3 rounded-md hover:bg-accent/80 transition-colors cursor-pointer">
            Send message
          </button>
        </div>
      </div>
    </section>
  );
}
