import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export const Footer = () => {

  // No need for state 🙂
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-screen-xl mx-auto lg:px-24 px-6 p-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">

          {/* Logo + About */}
          <div className="space-y-6 lg:border-r-2 border-gray-200 p-5">
            <img
              src="https://intso.co.in/wp-content/uploads/2023/06/logo-2.png"
              className="h-12"
              alt="INTSO Logo"
            />

            <p className="text-gray-500">
              INTSO is an Educational Organization popularizing academic
              competition and assisting development of competitive spirit
              among school children.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div className="flex flex-col lg:border-r-2 border-gray-200 p-5">
            <h1 className="text-[#ED1450] py-3 font-bold text-2xl">
              Quick Links
            </h1>

            <ul className="flex flex-col space-y-2 text-gray-600">

              <li><Link to="/register" className="hover:underline">School Registration</Link></li>

              <li><Link to="/studentregister" className="hover:underline">Student Registration</Link></li>

              <li><Link to="/login" className="hover:underline">Login</Link></li>

              <li><Link to="/rewards" className="hover:underline">Rewards And Recognition</Link></li>

              <li><Link to="/career" className="hover:underline">Career With Us</Link></li>

              <li><Link to="/achivercorner" className="hover:underline">Achiever Corner</Link></li>

              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>

              <li><Link to="/hotlinks" className="hover:underline">Hotlinks</Link></li>

            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="flex flex-col lg:border-r-2 border-gray-200 p-5">
            <h1 className="text-[#ED1450] py-3 font-bold text-2xl">
              Explore
            </h1>

            <ul className="flex flex-col space-y-2 text-gray-600">

              <li><Link to="/aboutus" className="hover:underline">About</Link></li>

              <li><Link to="/knowledge" className="hover:underline">Knowledge Desk</Link></li>

              <li><Link to="/examdetails" className="hover:underline">Exam Details</Link></li>

              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>

              <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>

              <li><Link to="/cordinator" className="hover:underline">Become a Coordinator</Link></li>

              <li><Link to="/content" className="hover:underline">Content</Link></li>

              <li><Link to="/membership" className="hover:underline">Memberships Associations & Certification</Link></li>

            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col p-5">
            <h1 className="text-[#ED1450] py-3 font-bold text-2xl">
              Contact Us
            </h1>

            <ul className="space-y-3 text-gray-600">

              <li className="flex gap-4">
                <LocationOnIcon className="rounded-full bg-[#ED1450] text-white p-1" />
                <span>
                  31-4-3, Chuttugunta, Maruthi Nagar, Vijayawada-520002
                  Andhra Pradesh
                </span>
              </li>

              <li className="flex gap-4">
                <CallIcon className="rounded-full bg-[#ED1450] text-white p-1" />
                <span>+91 9248 922 777</span>
              </li>

              <li className="flex gap-4">
                <EmailIcon className="rounded-full bg-[#ED1450] text-white p-1" />
                <span>info@intso.co.in</span>
              </li>

              {/* Social Icons */}
              <li className="flex gap-3 mt-3">
                <FacebookIcon className="rounded-full bg-[#ED1450] text-white p-1 cursor-pointer" />
                <TwitterIcon className="rounded-full bg-[#ED1450] text-white p-1 cursor-pointer" />
                <InstagramIcon className="rounded-full bg-[#ED1450] text-white p-1 cursor-pointer" />
                <LinkedInIcon className="rounded-full bg-[#ED1450] text-white p-1 cursor-pointer" />
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#141833] text-center mt-5">
        <span className="text-sm text-gray-400 block p-3">
          Copyright © {currentYear} | Designed & Developed By: Ozonesoft Solutions
        </span>
      </div>
    </footer>
  );
};
