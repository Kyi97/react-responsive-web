

function Footer() {
  return (
    <footer className="bg-gray-200 py-10 mt-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo Section */}
        <div className="w-full md:w-1/4 text-gray-800 mb-6 md:mb-0">
          <h2 className="font-bold text-xl">LOGO</h2>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-6 md:mb-0">
          <a href="#" className="hover:text-gray-800">
            Home
          </a>
          <a href="#" className="hover:text-gray-800">
            Discovery
          </a>
          <a href="#" className="hover:text-gray-800">
            Photos
          </a>
          <a href="#" className="hover:text-gray-800">
            Contact
          </a>
          <a href="#" className="hover:text-gray-800">
            About
          </a>
          <a href="#" className="hover:text-gray-800">
            Help
          </a>
          <a href="#" className="hover:text-gray-800">
            Terms
          </a>
          <a href="#" className="hover:text-gray-800">
            Guidelines
          </a>
          <a href="#" className="hover:text-gray-800">
            Testimonials
          </a>
          <a href="#" className="hover:text-gray-800">
            Advertise
          </a>
          <a href="#" className="hover:text-gray-800">
            Integrations
          </a>
          <a href="#" className="hover:text-gray-800">
            Careers
          </a>
        </div>

        {/* Subscription Section */}
        <div className="w-full md:w-1/4">
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Stay in touch with the latest updates"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-sm text-gray-600"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto flex justify-center mt-10 space-x-6 text-gray-600">
        <a href="#" className="hover:text-gray-800">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-gray-800">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-gray-800">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-gray-800">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
