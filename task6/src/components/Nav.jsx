import logo from "../../images/logo.svg";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto bg-white">
      <div className="flex gap-6">
        <img src={logo} alt="logo" />
        <ul className="hidden md:flex gap-6 text-gray-400 font-bold">
          <li>
            <a href="#" className="hover:text-black ">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black ">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black ">
              Resources
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex gap-4">
        <button className="text-gray-600 font-bold">Login</button>
        <button className="bg-cyan-500 text-white font-bold hover:bg-cyan-200 px-4 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
