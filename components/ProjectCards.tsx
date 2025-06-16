// components/ProjectCards.tsx

import Image from "next/image";
import Link from "next/link";

export const ProjectCards = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-black/20 hover:bg-black/30 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
        >
          <div className="relative w-full h-48">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2">{project.des}</p>
            <div className="flex flex-wrap mt-4 gap-2">
              {project.iconLists.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  alt="tech"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  href: string;
};
