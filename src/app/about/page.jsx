export default function About() {
  return (
    <main className="bg-white text-gray-800">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          About Me 👨‍💻
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          I am a passionate Frontend Developer focused on building modern, responsive,
          and user-friendly web applications using React and Next.js.
        </p>
      </section>

      {/* DETAILS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-6">

          <h2 className="text-2xl font-bold">Who I Am</h2>
          <p className="text-gray-600">
            I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            I love writing clean code and continuously improving my skills in web development.
          </p>

          <h2 className="text-2xl font-bold">What I Do</h2>
          <p className="text-gray-600">
            I build frontend applications using React and Next.js. I work with APIs,
            create responsive UI, and develop full portfolio and dashboard projects.
          </p>

          <h2 className="text-2xl font-bold">My Goal</h2>
          <p className="text-gray-600">
            My goal is to become a professional full-stack developer and work on real-world
            projects in a software company or as a freelancer.
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

            {["React", "Next.js", "JavaScript", "Tailwind CSS", "API Integration", "Git & GitHub"].map(
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
      <section className="bg-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Let’s Work Together 🚀
        </h2>

        <p className="mb-6">
          I am open to freelance work and internship opportunities.
        </p>

        <a
          href="/contact"
          className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Contact Me
        </a>
      </section>

    </main>
  );
}