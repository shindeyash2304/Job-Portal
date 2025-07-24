const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
        JobPortal
      </h1>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl w-full">
        <input
          type="text"
          placeholder="Search jobs, companies..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-4 text-gray-600 text-sm font-medium">
        <a href="#" className="hover:text-blue-600 transition">Home</a>
        <a href="#" className="hover:text-blue-600 transition">Jobs</a>
        <a href="#" className="hover:text-blue-600 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
