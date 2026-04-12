import Tag from "../ui/Tag";

export default function Skills() {
  return (
    <section
      id="skills"
      className="gap-10 max-w-5xl mx-auto px-10 py-20 w-full"
    >
      <div className="flex flex-col gap-6">
        <span className="text-accent font-syne text-sm tracking-widest uppercase">
          02 - Skills
        </span>
        <h2 className="font-syne text-3xl md:text-4xl font-bold text-white pb-4">
          Technical Stack
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <span className="uppercase font-bold text-white/30 text-sm leading-relaxed">
          Backend
        </span>
        <div className="flex flex-wrap gap-2 ">
          <Tag label="Java" main />
          <Tag label="REST APIs" />
          <Tag label="SQL" />
          <Tag label="PostgresSQL" />
          <Tag label="SQLlite" />
        </div>
        <span className="uppercase font-bold text-white/30 text-sm leading-relaxed">
          Frontend
        </span>
        <div className="flex flex-wrap gap-2">
          <Tag label="React" main />
          <Tag label="Tailwind CSS" main />
          <Tag label="JavaScript" />
          <Tag label="HTLM/CSS" />
          <Tag label="Vite" />
        </div>
        <span className="uppercase font-bold text-white/30 text-sm leading-relaxed">
          Tools
        </span>
        <div className="flex flex-wrap gap-2">
          <Tag label="Git" />
          <Tag label="GitHub" />
          <Tag label="VsCode" />
          <Tag label="Postman" />
          <Tag label="IntelliJ IDEA" />
        </div>
      </div>
    </section>
  );
}
