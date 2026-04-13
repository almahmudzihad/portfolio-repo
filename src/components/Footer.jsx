import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20 border-t">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-blue-500 mb-2">
            Zihad.dev
          </h2>
          <p className="text-sm">
            Frontend Developer (React & Next.js) building modern web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>

          <div className="flex flex-col gap-3 text-sm">
            
            <a
              href="https://github.com/almahmudzihad"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 hover:translate-x-1 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/almahmudzihad"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 hover:translate-x-1 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
             href="mailto:amzihad@gmail.com"
              
              className="flex items-center gap-2 hover:text-blue-500 hover:translate-x-1 transition"
            >
              <FaEnvelope /> Email
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Zihad. All rights reserved.
      </div>
    </footer>
  );
}