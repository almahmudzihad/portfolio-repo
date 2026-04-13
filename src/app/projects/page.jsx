import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "App Store Dashboard",
      description:
        "A React app where users can browse apps, install them, and track installed apps using dashboard analytics.",
      tech: ["React", "API", "Tailwind"],
      live: "https://apps-store-zihad.netlify.app/",
      github: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind"],
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "E-commerce UI",
      description:
        "Simple e-commerce frontend with product listing and cart UI.",
      tech: ["React", "CSS"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* HEADER */}
      <section className="text-center py-20 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">My Projects 🚀</h1>
        <p className="text-gray-600">
          Here are some of the projects I built while learning React & Next.js.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-xl p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">
              {project.title}
            </h2>

            <p className="text-sm text-gray-600 mb-3">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <Link
                href={project.live}
                target="_blank"
                className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Live
              </Link>

              <Link
                href={project.github}
                target="_blank"
                className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
              >
                Code
              </Link>
            </div>
          </div>
        ))}

      </section>
    </main>
  );
}