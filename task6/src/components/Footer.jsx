import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="flex items-start justify-center md:justify-start">
          <img src={logo} alt="logo" className="w-24 object-contain" />
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold mb-3">Features</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">
              Link Shortening
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Branded Links
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">Analytics</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">Blog</li>
            <li className="hover:text-cyan-400 cursor-pointer">Developers</li>
            <li className="hover:text-cyan-400 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Our Team</li>
            <li className="hover:text-cyan-400 cursor-pointer">Careers</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 items-start mt-6 md:mt-0">
          <img
            src="/images/icon-facebook.svg"
            alt="Facebook"
            className="hover:opacity-70 cursor-pointer"
          />
          <img
            src="/images/icon-twitter.svg"
            alt="Twitter"
            className="hover:opacity-70 cursor-pointer"
          />
          <img
            src="/images/icon-pinterest.svg"
            alt="Pinterest"
            className="hover:opacity-70 cursor-pointer"
          />
          <img
            src="/images/icon-instagram.svg"
            alt="Instagram"
            className="hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
