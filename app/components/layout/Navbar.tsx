"use client";

import { useState,useEffect} from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import AnnouncementBar from "./AnouncementBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);


useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // scrolling down → hide
      setHidden(true);
    } else {
      // scrolling up → show
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);


  const closeMenu = () => setOpen(false);

  return (
    <>
    
      <header
  className={clsx(
    `
    sticky top-0 z-[9999]
    backdrop-blur-sm bg-[var(--white)]/80
    border-b border-[var(--gray-200)]
    transition-transform duration-300
    `,
    hidden && "-translate-y-full"
  )}
>



        
        <div className="px-6 md:px-10 flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/egbodo-paul-logo-2.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-lead gap-10 tracking-tighter">
            <Link
              href="/"
              className={clsx(
                "nav-link text-[var(--gray-600)] hover:text-[var(--gray-800)]",
                pathname === "/" && "is-active text-[var(--gray-900)]"
              )}
            >
              Home
            </Link>

            <Link
              href="/services"
              className={clsx(
                "nav-link text-[var(--gray-600)] hover:text-[var(--gray-800)]",
                pathname === "/services" && "is-active text-[var(--gray-900)]"
              )}
            >
              Services
            </Link>

            <Link
              href="/case-studies"
              className={clsx(
                "nav-link text-[var(--gray-600)] hover:text-[var(--gray-800)]",
                pathname === "/case-studies"  &&
                "is-active text-[var(--gray-900)]"
              )}
            >
              Case Studies
            </Link>

            <Link
              href="/pricing"
              className={clsx(
                "nav-link text-[var(--gray-600)] hover:text-[var(--gray-800)]",
                pathname === "/pricing" &&
                "is-active text-[var(--gray-900)]"
              )}
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className={clsx(
                "nav-link text-[var(--gray-600)] hover:text-[var(--gray-800)]",
                pathname === "/about" &&
                "is-active text-[var(--gray-900)]"
              )}
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-[10001] flex flex-col gap-[6px]"
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                "h-[2px] w-6 transition",
                open ? "rotate-45 translate-y-[8px]" : "",
                "bg-[var(--burger-line-1)]"
              )}
            />
            <span
              className={clsx(
                "h-[2px] w-6 transition",
                open ? "opacity-0" : "",
                "bg-[var(--burger-line-2)]"
              )}
            />
            <span
              className={clsx(
                "h-[2px] w-6 transition",
                open ? "-rotate-45 -translate-y-[8px]" : "",
                "bg-[var(--burger-line-3)]"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-[10000] bg-[var(--white)] transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="
            absolute top-6 right-6
            text-5xl font-light
            text-[var(--close-btn)]
            hover:opacity-70 transition
          "
        >
          ×
        </button>

        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl tracking-tight">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/case-studies" onClick={closeMenu}>Case Studies</Link>
          <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn-primary mt-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
