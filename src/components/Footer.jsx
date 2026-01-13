import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-violet-600 h-1 mt-12 md:mt-14 lg:mt-16"></div>
      <div className="w-full h-14 flex items-center justify-center py-4">
        <div>
          <p className="font-poppins text-center text-sm text-gray-700">
            Portfolio Created By Mirza Felić
          </p>
          <p className="font-poppins text-center text-sm text-gray-700">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
