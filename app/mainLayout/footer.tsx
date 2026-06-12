import { FiMapPin, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const footerLinks = [
    {
      title: "Shopping",
      links: ["Wishlist", "Cart", "Shop by Category"],
    },
    {
      title: "Information",
      links: ["Track My Order", "Corporate Enquires", "FAQs"],
    },
    {
      title: "Account",
      links: ["My Account", "My Orders"],
    },
];

const policies = [
    "Teams & Condition",
    "Privacy & Policy",
    "Refund Policy",
];

export default function Footer() {
    return (
        <footer className="bg-[#43003D] text-white">
            <div className="w-[90%] mx-auto py-10">
              {/* Top Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Left */}
                <div className="space-y-5">
                  <h2 className="text-[#FFD700] text-4xl md:text-5xl font-bold">
                    Dazzling Diva
                  </h2>

                  <div className="space-y-3 text-sm md:text-[15px] text-gray-200">
                    <div className="flex items-start gap-3">
                      <FiMapPin size={16} className="mt-1 shrink-0" />
                      <p>
                        29 SE 2nd Ave, Miami Florida 33131,
                        <br className="hidden sm:block" />
                        United States
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiMail size={16} />
                      <p>info@dazzingdiva.com</p>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white pt-2">
                      (+92) 3942 7879
                    </h3>
                  </div>
                </div>

                {/* Right Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-30">
                  {footerLinks.map((section) => (
                    <div key={section.title} >
                      <h3 className="text-[#FFD700] font-bold text-lg uppercase mb-5">
                        {section.title}
                      </h3>

                      <ul className="space-y-3 text-gray-200">
                        {section.links.map((link) => (
                          <li key={link}>
                            <a
                              href="#"
                              className="hover:text-[#FFD700] transition"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20 mt-10 pt-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  {/* Copyright */}
                  <p className="text-gray-200 text-sm md:text-base text-center lg:text-left">
                    Copyright ©{" "}
                    <span className="text-orange-500 font-semibold">
                      Orbixon
                    </span>{" "}
                    2026. All rights reserved.
                  </p>

                  {/* Social */}
                  <div className="flex items-center gap-8 text-xl md:text-2xl">
                    <FaFacebookF className="cursor-pointer hover:text-[#FFD700] transition" />
                    <FaTwitter className="cursor-pointer hover:text-[#FFD700] transition" />
                    <FaInstagram className="cursor-pointer hover:text-[#FFD700] transition" />
                  </div>

                  {/* Policies */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-8 text-gray-200 text-sm md:text-base">
                    {policies.map((policy) => (
                      <a
                        key={policy}
                        href="#"
                        className="hover:text-[#FFD700] transition"
                      >
                        {policy}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </footer>
    );
}