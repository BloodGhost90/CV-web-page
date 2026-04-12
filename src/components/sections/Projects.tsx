import ProjectCard from "../ui/ProjectCard";
import SabsRestaurant from "../../assets/sabs-restaurant.jpg";
import PersonalPortfolio from "../../assets/personal-portfolio.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="gap-10 max-w-5xl mx-auto px-10 py-20 w-full"
    >
      {/* Header */}
      <div className="flex flex-col gap-6">
        <span className="text-accent font-syne text-sm tracking-widest uppercase">
          03 - Projects
        </span>
        <h2 className="font-syne text-3xl md:text-4xl font-bold text-white pb-6">
          What I have built
        </h2>
      </div>

      {/* ProjectsCard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          image={SabsRestaurant}
          title="Sab's Restaurante"
          description="Full-stack restaurant menu app with a Strapi CMS. Handled full deployment — server config, HTTPS and VPS setup."
          tags={[
            "React",
            "Tailwind CSS",
            "Strapi",
            "Node.js",
            "Nginx",
            "PM2",
            "Hetzner",
          ]}
          url="https://restaurantesabs.es"
        />
        <ProjectCard
          image={PersonalPortfolio}
          title="Personal Portfolio"
          description="Personal CV website built to showcase my projects and skills. Designed and developed from scratch."
          tags={["React", "Tailwind CSS", "TypeScript", "Vite", "i18n"]}
          url="#"
        />
      </div>
    </section>
  );
}
