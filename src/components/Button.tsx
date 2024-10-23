

import React from "react";

const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button className="relative py-2 px-4 rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_rgb(140,69,255)] hover:shadow-[0px_0px_16px_rgb(140,69,255)] transition-shadow duration-300">
      <div className="absolute inset-0">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to bottom, black, transparent)]"></div>
        <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to top, black, transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg"></div>
      </div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
