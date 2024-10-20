import React from "react";
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" text-white mt-10 px-10 remove-bg">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap justify-between ">
            {/* Course Description */}
            <div className="mb-4 text-xl w-1/3">
              <h4 className="text-lg font-semibold mb-2">About Our Course</h4>
              <p className="w-">
                Join our online programming learning course to enhance your
                coding skills and prepare for a successful career in tech.
              </p>
            </div>

            {/* Quick Access Links */}
            <div className="mb-4 text-xl w-1/3 text-center">
              <h4 className="text-lg font-semibold mb-2">Quick Access</h4>
              <ul>
                <li>
                  <a href="/" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-blue-500">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="mb-4 text-xl w-1/3 text-center">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://instagram.com/amirhossein.138363"
                  className="hover:text-orange-600"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://t.me/amirhossein_138363"
                  className="hover:text-blue-600"
                >
                  <FaTelegram size={24} />
                </a>
                <a
                  href="https://github.com/AmirHossein-topdev"
                  className="hover:text-orange-600"
                >
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com" className="hover:text-blue-600">
                  <FaLinkedin size={24} />
                </a>
              </div>
              <div className="flex justify-center mt-5">
                <img src="/images/enamad.webp" className="size-24 " alt="" />
                <img src="/images/zarinpal.svg" alt="" />
              </div>
            </div>
          </div>

          <div className=" text-center py-2 text-xl">
            <p>
              &copy; {new Date().getFullYear()} AmirHossein. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
