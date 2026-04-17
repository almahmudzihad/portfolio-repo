"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Navbar() {
  const pathname = usePathname();
  

  const navLinks = [
    
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow-sm border-b sticky top-0 z-50">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-500">
          Zihad.dev
        </Link>

        {/* Desktop Menu */}
        <ul className=" flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`hover:text-blue-500 transition ${
                  pathname === link.path ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        
        

      </div>

      
    </nav>
  );
}