"use client"
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  // Handle scroll effect for navbar with throttling
  useEffect(() => {
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  // Close mobile menu when user resizes window to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Enhanced navigation structure with SEO-friendly data
  const navItems = [
    {
      name: "Home",
      path: "/",
      description: "Full Stack Developer Portfolio Homepage",
      keywords: "home, portfolio, full stack developer"
    },
    {
      name: "About",
      path: "/about",
      description: "About Bimal Pandey - Full Stack Developer Experience",
      keywords: "about, experience, skills, full stack developer"
    },
    {
      name: "Projects",
      path: "/projects",
      description: "Web Development Projects and Portfolio",
      keywords: "projects, portfolio, web development, React, Node.js"
    },

  ];

  // Get current page info for enhanced SEO
  const currentPage = navItems.find(item => item.path === pathname) || navItems[0];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 px-3 sm:px-6 lg:px-8 py-3 md:py-4 z-50 transition-all duration-300 ${scrolled ? "bg-[#13091F]" : "bg-purple-dark"
          }`}
        role="banner"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Enhanced Logo Section with structured data */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Bimal Pandey - Full Stack Developer Portfolio Home"
            itemProp="url"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 relative">
              <Image
                src="/logo.svg"
                alt="Bimal Pandey - Full Stack Developer Logo"
                fill
                sizes="(max-width: 768px) 32px, 40px"
                className="object-contain transition-transform group-hover:scale-110"
                priority
                itemProp="logo"
              />
            </div>
            <div className="ml-2 md:ml-3" itemScope itemType="https://schema.org/Person">
              <span
                className="font-bold text-base md:text-xl text-white"
                itemProp="name"
              >
                Bimal Pandey
              </span>
              <span
                className="block text-xs text-purple-300 xs:block"
                itemProp="jobTitle"
              >
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation with structured data */}
          <nav
            className="hidden md:block"
            aria-label="Main Navigation"
            role="navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul className="flex items-center space-x-1" role="menubar">
              {navItems.map((item) => (
                <li key={item.path} role="none">
                  <Link
                    href={item.path}
                    className={`px-4 py-2 mx-1 rounded-md font-medium transition-colors ${pathname === item.path
                      ? "text-white border-b-2 border-purple-400"
                      : "text-purple-200 hover:text-white hover:bg-white/10"
                      }`}
                    aria-current={pathname === item.path ? 'page' : undefined}
                    role="menuitem"
                    title={item.description}
                    itemProp="url"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded p-1 transition-colors hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            type="button"
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu with better accessibility */}
        <nav
          id="mobile-menu"
          className={`md:hidden fixed top-[52px] left-0 right-0 bg-purple-dark/95 backdrop-blur-sm py-3 px-4 border-t border-white/10 shadow-lg transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
            }`}
          aria-label="Mobile Navigation Menu"
          aria-hidden={!isMenuOpen}
          role="navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <ul className="flex flex-col space-y-0.5" role="menu">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="border-b border-white/5 last:border-none"
                role="none"
              >
                <Link
                  href={item.path}
                  className={`block py-2.5 px-3 transition-colors ${pathname === item.path
                    ? "text-white font-medium bg-white/5 border-l-4 border-purple-400"
                    : "text-purple-200 hover:text-white hover:bg-white/5"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === item.path ? 'page' : undefined}
                  role="menuitem"
                  title={item.description}
                  itemProp="url"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Structured Data for Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Bimal Pandey - Full Stack Developer",
            "url": "https://bimalpandey11.com.np", // Replace with your actual domain
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://bimalpandey.com.np/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "Person",
              "@id": "https://bimalpandey.com.np/#person",
              "name": "Bimal Pandey",
              "jobTitle": "Full Stack Developer",
              "url": "https://bimalpandey.com.np",
              "sameAs": [
                "https://github.com/bimal009",
                "https://x.com/CodeWithBun",
                "https://instagram.com/bunchoo_graphics11"
              ]
            }
          })
        }}
      />
    </>
  );
};

export default Navbar;