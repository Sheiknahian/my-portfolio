'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const NavbarTabs = () => {
    const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Projects page
    if (pathname === "/Projects") {
      setActive("/Projects");
      return;
    }

    // Home page sections
    const sections = ["about", "skills", "contact", ""];

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Filter', entries.filter((entry) => entry.isIntersecting));
        let isHome = entries.filter((entry) => entry.isIntersecting)
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (isHome = []) {
            setActive("")
        }
        if (visibleSection) {
          setActive(`#${visibleSection.target.id}`);
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);
    
    return (
        <div className="flex gap-10 font-semibold items-center text-white">
            <Link
                href="/#about"
                className={`relative text-white transition-colors duration-300 ${
                    active === "#about" ? "text-sky-500" : ""
                }`}
                >
                About

                <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                    active === "#about" ? "w-full" : "w-0"
                    }`}
                />
            </Link>
            
            <Link
                href="/#skills"
                className={`relative text-white transition-colors duration-300 ${
                    active === "#skills" ? "text-sky-500" : ""
                }`}
                >
                Skills

                <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                    active === "#skills" ? "w-full" : "w-0"
                    }`}
                />
            </Link>
            
            <Link
                href="/Projects"
                className={`relative text-white transition-colors duration-300 ${
                    active === "Projects" ? "text-sky-500" : ""
                }`}
                >
                About

                <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                    active === "/Projects" ? "w-full" : "w-0"
                    }`}
                />
            </Link>
            
            <Link
                href="/#contact"
                className={`relative text-white transition-colors duration-300 ${
                    active === "#contact" ? "text-sky-500" : ""
                }`}
                >
                Contact

                <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                    active === "#contact" ? "w-full" : "w-0"
                    }`}
                />
            </Link>
            
        </div>
    )
}

export default NavbarTabs