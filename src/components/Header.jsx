import React from "react";

const Header = () => {
  return (
    <section className="px-4 py-4 md:px-8">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-red-300">LOGO</div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-xs font-semibold text-black">
            HOME
          </div>
          <div className="hidden sm:block text-xs font-semibold text-gray-400">
            DISCOVERY
          </div>
          <div className="hidden sm:block text-xs font-semibold text-gray-400">
            PHOTOS
          </div>
          <div className="hidden sm:block text-xs font-semibold text-gray-400">
            CONTACT
          </div>
          <img
            src="https://images.hdqwalls.com/download/selena-gomez-vanity-fair-2024-ng-400x400.jpg"
            alt="profile photo"
            className="w-8 h-8 rounded-full ml-4 md:ml-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
