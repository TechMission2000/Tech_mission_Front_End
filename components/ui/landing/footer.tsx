
import React from "react";

// --- Icon Components for Social Links ---
const TwitterIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const FacebookIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427.465C9.792 2.013 10.146 2 12.315 2zm-1.161 1.043c-2.43.002-3.131.01-4.242.06-1.112.05-1.766.23-2.28.43-1.03.41-1.84 1.22-2.25 2.25-.2 1.03-.41 1.84-.43 2.28-.05 1.112-.06 1.812-.06 4.242s.01 3.13.06 4.242c.02.44.23 1.25.43 2.28.41 1.03 1.22 1.84 2.25 2.25.44.2 1.17.41 2.28.43 1.112.05 1.812.06 4.242.06s3.13-.01 4.242-.06c1.112-.05 1.766-.23 2.28-.43 1.03-.41 1.84-1.22 2.25-2.25.2-1.03.41-1.84.43-2.28.05-1.112.06-1.812.06-4.242s-.01-3.13-.06-4.242c-.02-.44-.23-1.25-.43-2.28-.41-1.03-1.22-1.84-2.25-2.25-.44-.2-1.17-.41-2.28-.43-1.112-.05-1.812-.06-4.242-.06zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Main Footer Component ---
function Footer() {
  const linkStyles =
    "text-zinc-600 hover:text-blue-600 transition-colors duration-200";

  return (
    <footer className="font-sans bg-[#F8FAFC]">
      <div
        style={{
          backgroundImage: `url(/footerbg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
      >
        {/* Newsletter Section */}
        <div style={{
          backgroundImage: `url(/subscribe.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
          className="relative mb-24 p-8 rounded-2xl bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-14 -right-16 w-60 h-60 rounded-full border-[6px] border-gray-300/50" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-[7px] border-slate-100/30" />

          <div

            className="relative z-10 flex flex-col mx-auto text-center  items-center gap-8"
          >
            <h2
              className="text-3xl text-center font-bold  lg:text-left"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Contact Us For The Service <br className="hidden sm:block" /> You
              Want To Use
            </h2>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full sm:w-auto bg-white/20 border border-white/50 rounded-lg px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-auto bg-white/20 border border-white/50 rounded-lg px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#16192C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-zinc-800">Logo</h3>
            <p className="mt-4 text-zinc-600 max-w-xs">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full border border-zinc-300 text-zinc-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-blue-600 border border-blue-600 text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-zinc-300 text-zinc-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-blue-600 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/about" className={linkStyles}>
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className={linkStyles}>
                  Features
                </a>
              </li>
              <li>
                <a href="/work" className={linkStyles}>
                  Works
                </a>
              </li>
              <li>
                <a href="/careers" className={linkStyles}>
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-600 uppercase tracking-wider text-sm">
              Help
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/contact" className={linkStyles}>
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className={linkStyles}>
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className={linkStyles}>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className={linkStyles}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-600 uppercase tracking-wider text-sm">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className={linkStyles}>
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className={linkStyles}>
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="/blogs" className={linkStyles}>
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className={linkStyles}>
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div style={{ backgroundImage: "url(/copyrightbg.png)", backgroundSize: "cover", backgroundPosition: "center" }} className="mt-16 py-8 border-t border-zinc-200 text-center text-zinc-500">
        <p>© {new Date().getFullYear()} all Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
