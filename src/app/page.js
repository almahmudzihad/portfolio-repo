import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Zihad</span> 👋
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Frontend Developer (React & Next.js) building modern, responsive and fast web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </div>

      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-600">
            I am a passionate frontend developer who loves building clean UI, modern web apps,
            and learning new technologies like React and Next.js.
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

            {["React", "Next.js", "JavaScript", "Tailwind CSS", "API", "Git", "Firebase", "MongoDB"].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-4 border rounded-lg hover:shadow-md transition"
                >
                  {skill}
                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Amazing 🚀
        </h2>

        <p className="mb-6">
          I am available for freelance work and internships.
        </p>

        <Link
          href="/contact"
          className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Hire Me
        </Link>
      </section>

    </main>
  );
}