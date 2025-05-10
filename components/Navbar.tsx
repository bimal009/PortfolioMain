"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // Add more nav items as needed
  ];

  return (
    <header
      className={`top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 py-4 z-50 transition-all duration-300 ${scrolled ? "bg-purple-dark/95 shadow-lg backdrop-blur-sm" : "bg-purple-dark"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group" aria-label="Bimal Pandey - Full Stack Developer">
          <div className="w-10 h-10 relative">
            <Image
              src="/logo.svg"
              alt="Bimal Pandey Logo"
              fill
              sizes="40px"
              className="object-contain transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <div className="ml-3">
            <span className="font-bold text-xl text-white">Bimal Pandey</span>
            <span className="block text-xs text-purple-300">Full Stack Developer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main Navigation">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`px-4 py-2 mx-1 rounded-md font-medium transition-colors ${pathname === item.path
                    ? "text-white border-b-2 border-purple-400"
                    : "text-purple-200 hover:text-white hover:bg-white/10"
                    }`}
                  aria-current={pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}


          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden absolute left-0 right-0 bg-purple-dark/95 backdrop-blur-sm py-4 px-4 border-t border-white/10 shadow-lg"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <li key={item.path} className="border-b border-white/10 last:border-none">
                <Link
                  href={item.path}
                  className={`block py-3 px-4 ${pathname === item.path
                    ? "text-white font-medium bg-white/5 border-l-4 border-purple-400"
                    : "text-purple-200 hover:text-white"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/resume"
                className="block text-center bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-md font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;