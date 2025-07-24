const Header = () => {
  return (
    <header className="bg-white shadow py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Job Portal</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Jobs</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
