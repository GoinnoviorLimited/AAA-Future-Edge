import { Link } from "react-router-dom";
import logo from "../../../../public/flogo.png";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
      <footer className="container mx-auto px-5 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <img
            className="w-[180px] lg:w-[250px] mb-6 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            src={logo}
            alt="Future Edge Logo"
          />
          <p className="text-gray-400">
            AAA has adopted the highest standards of IT service and consultancy
            quality, enabling clients across industries to transform into truly
            digital, data-driven enterprises.
          </p>
          <div className="flex gap-5 mt-6">
            <Link
              to="https://www.facebook.com/groups/796711704378134/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare className="text-2xl hover:text-blue-500 transition duration-300" />
            </Link>
            <Link
              to="/"
              onClick={() => alert("Coming soon!")}
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/riadmahmud/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl hover:text-blue-300 transition duration-300" />
            </Link>
            <Link
              to="/"
              onClick={() => alert("Coming soon!")}
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
            </Link>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Solutions</h3>
          <div className="space-y-3">
            <Link
              to="/IT-Strategy"
              className="hover:text-orange-500 transition duration-300"
            >
              IT Strategy
            </Link>{" "}
            <br />
            <Link
              to="/HR-Strategy"
              className="hover:text-orange-500 transition duration-300"
            >
              HR Strategy
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <div className="space-y-3">
            <Link
              to="/IT-Services"
              className="hover:text-orange-500 transition duration-300"
            >
              IT Services
            </Link>
            <br />
            <Link
              to="/HR-Services"
              className="hover:text-orange-500 transition duration-300"
            >
              HR Services
            </Link>
            <br />
            <Link
              to="/Career-Counselling"
              className="hover:text-orange-500 transition duration-300"
            >
              Career Counselling
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MdLocationOn className="text-2xl text-orange-500" />
              <p>House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail className="text-2xl text-orange-500" />
              <p>riadmahmud@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <BsTelephoneFill className="text-2xl text-orange-500" />
              <p>+8801922000025</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center py-5 bg-gray-800">
        <p className="text-sm text-gray-500">
          © 2024 Design & Developed By{" "}
          <a
            href="https://360dsoul.com/"
            target="_blank"
            className="text-orange-500 hover:underline"
          >
            360D Soul Ltd.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
