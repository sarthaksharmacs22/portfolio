const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white px-6 py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-lg font-semibold">
          Sarthak
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;