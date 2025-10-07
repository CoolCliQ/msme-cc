import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import WavyDivider from "@/components/ui/WavyDivider";

const Footer: React.FC = () => {
  return (
    <>
      <WavyDivider
        color="oklch(21% 0.034 264.665)" // match next section bg
        height={80}
        flip
      />
      <footer className="bg-white text-neutral-800 pt-12 pb-6 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          {/* Top section: Brand + Links + Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">Aligarh</h1>
              <p className="text-gray-500 text-sm">
                Helping businesses grow with digital solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-400 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="font-semibold mb-4 text-gray-900">Quick Links</h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources / Extras */}
            <div>
              <h2 className="font-semibold mb-4 text-gray-900">Resources</h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="font-semibold mb-4 text-gray-900">Subscribe</h2>
              <p className="text-gray-500 text-sm mb-3">
                Get the latest updates and offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Aligarh. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
