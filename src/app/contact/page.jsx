"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple demo alert (later you can connect email service)
    alert("Message sent successfully 🚀");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-white text-gray-800">

      {/* HEADER */}
      <section className="text-center py-20 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Contact Me 📩</h1>
        <p className="text-gray-600">
          Feel free to reach out for freelance work, internships, or collaboration.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-2xl mx-auto px-6 pb-20">

        <form
          onSubmit={handleSubmit}
          className="space-y-4 border p-6 rounded-xl shadow-sm"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full border p-3 rounded-lg outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message 🚀
          </button>

        </form>

      </section>

      {/* EXTRA CONTACT INFO */}
      <section className="text-center pb-20 text-gray-600 text-sm">
        <p>Email: youremail@gmail.com</p>
        <p>GitHub: github.com/your-username</p>
      </section>

    </main>
  );
}