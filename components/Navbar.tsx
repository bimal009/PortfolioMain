"use client"
import { Menu } from "lucide-react";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

  // Close mobile menu when user resizes window to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // Add more nav items as needed
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-3 sm:px-6 lg:px-8 py-3 md:py-4 z-50 transition-all duration-300 ${scrolled ? "bg-purple-dark/95 shadow-lg backdrop-blur-sm" : "bg-purple-dark"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section - simplified for mobile */}
        <Link href="/" className="flex items-center group" aria-label="Bimal Pandey - Full Stack Developer">
          <div className="w-8 h-8 md:w-10 md:h-10 relative">
            <Image
              src="/logo.svg"
              alt="Bimal Pandey Logo"
              fill
              sizes="(max-width: 768px) 32px, 40px"
              className="object-contain transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <div className="ml-2 md:ml-3">
            <span className="font-bold text-base md:text-xl text-white">Bimal Pandey</span>
            <span className="block text-xs text-purple-300 xs:block">Full Stack Developer</span>
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

        {/* Mobile Menu Button - made slightly smaller */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu - fixed positioning with proper transition */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-[52px] left-0 right-0 bg-purple-dark/95 backdrop-blur-sm py-3 px-4 border-t border-white/10 shadow-lg transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
          }`}
        aria-label="Mobile Navigation"
      >
        <ul className="flex flex-col space-y-0.5">
          {navItems.map((item) => (
            <li key={item.path} className="border-b border-white/5 last:border-none">
              <Link
                href={item.path}
                className={`block py-2.5 px-3 ${pathname === item.path
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;