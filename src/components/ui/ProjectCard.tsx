import Tag from "../ui/Tag";
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  url,
}: ProjectCardProps) {
  const tagsList = tags.map((tag) => <Tag key={tag} label={tag} />);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-accent active:border-accent transition-colors duration-200 cursor-pointer">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col gap-3">
          <h1 className="font-syne text-xl font-bold mb-1.5 text-white/90">
            {title}
          </h1>
          <p className="font-syne text-white/60 text-sm leading-relaxed mb-0.5">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">{tagsList}</div>
        </div>
      </div>
    </a>
  );
}
