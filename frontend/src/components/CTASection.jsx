import React from "react";
import LogoTwo from "../assets/images/2.svg";
import Shape from "../assets/images/shape.svg"; // <-- added

const CTASection = () => {
  return (
    <section className="py-16 bg-white relative">
      {/* right abstract shape */}
      <img
        src={Shape}
        alt="decorative shape"
        className="hidden md:block absolute right-0 top-8 w-40 h-40 object-contain opacity-100 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-[24px] font-semibold text-brandDark mb-3">
            Looking to raise capital for your growing business?
          </h2>
          <p className="text-[13px] text-gray-600 mb-5">
            Whether expanding or opening a brand-new concept, we make it easy
            to raise money from thousands of local investors.
          </p>
          <button className="px-6 py-2 rounded bg-brandGreen text-white text-[12px] font-semibold hover:bg-brandGreen/90 transition">
            APPLY ONLINE
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={LogoTwo}
            alt="Invest illustration"
            className="max-h-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
