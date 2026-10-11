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

const policies = ["Terms & Conditions", "Privacy & Policy", "Refund Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#43003D] text-white">
      <div className="mx-auto w-[90%] py-10 sm:py-12">
        <div className="flex flex-col justify-between gap-10 lg:flex-row xl:gap-16">
          <div className="max-w-md space-y-5">
            <h2 className="text-3xl font-bold text-[#FFD700] sm:text-4xl md:text-5xl">
              Dazzling Diva
            </h2>

            <div className="space-y-3 text-sm text-gray-200 md:text-[15px]">
              <div className="flex items-start gap-3">
                <FiMapPin size={16} className="mt-1 shrink-0" />
                <p>
                  29 SE 2nd Ave, Miami Florida 33131,
                  <br className="hidden sm:block" />
                  United States
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiMail size={16} className="shrink-0" />
                <p className="break-all">info@dazzingdiva.com</p>
              </div>

              <h3 className="pt-2 text-2xl font-bold text-white md:text-3xl">
                (+92) 3942 7879
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-20">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-lg font-bold uppercase text-[#FFD700] sm:mb-5">
                  {section.title}
                </h3>

                <ul className="space-y-3 text-gray-200">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-[#FFD700]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <p className="text-center text-sm text-gray-200 md:text-base lg:text-left">
              Copyright ©{" "}
              <span className="font-semibold text-orange-500">Orbixon</span>{" "}
              2026. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xl md:gap-8 md:text-2xl">
              <FaFacebookF className="cursor-pointer transition hover:text-[#FFD700]" />
              <FaTwitter className="cursor-pointer transition hover:text-[#FFD700]" />
              <FaInstagram className="cursor-pointer transition hover:text-[#FFD700]" />
            </div>

            <div className="flex flex-col items-center gap-3 text-sm text-gray-200 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:text-base lg:gap-8">
              {policies.map((policy) => (
                <a key={policy} href="#" className="transition hover:text-[#FFD700]">
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