"use client";

import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-10 ">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <Image
          src="/icons/number-bg.png"
          width={1000}
          height={500}
          alt="Wave Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 pt-10 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-foreground">
          {/* Support Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="hover:text-orange-300 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/covid"
                  className="hover:text-orange-300 transition-colors"
                >
                  Our COVID-19 Response
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="hover:text-orange-300 transition-colors"
                >
                  Cancellation options
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="hover:text-orange-300 transition-colors"
                >
                  Safety information
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-300 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-orange-300 transition-colors"
                >
                  Community Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-orange-300 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-orange-300 transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-orange-300 transition-colors"
                >
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/partnerships"
                  className="hover:text-orange-300 transition-colors"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-orange-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-300 transition-colors"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Social</h3>
            <div className="flex space-x-3">
              <Link
                href="https://facebook.com"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          <div className="mb-4 md:mb-0">
            <p>
              © {new Date().getFullYear()} Travel Tour. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src="/icons/jcb.svg?height=30&width=50"
              alt="Visa"
              width={50}
              height={30}
            />
            <Image
              src="/icons/jcb.svg?height=30&width=50"
              alt="Mastercard"
              width={50}
              height={30}
            />
            <Image
              src="/icons/jcb.svg?height=30&width=50"
              alt="Discover"
              width={50}
              height={30}
            />
            <Image
              src="/icons/jcb.svg?height=30&width=50"
              alt="PayPal"
              width={50}
              height={30}
            />
            <Image
              src="/icons/jcb.svg?height=30&width=50"
              alt="JCB"
              width={50}
              height={30}
            />
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
