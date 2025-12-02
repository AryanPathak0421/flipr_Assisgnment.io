import React from "react";
import { motion } from "framer-motion";
import ImgThree from "../assets/images/3.svg";
import BgCircle from "../assets/images/5.svg";
import ImgSix from "../assets/images/6.svg";



const Hero = () => {
  return (
    <section className="relative w-full h-[420px] mt-[64px] overflow-hidden">
      {/* background image */}
      <img
        src={ImgThree}
        alt="Business meeting illustration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-heroBlue/75 via-heroBlue/55 to-transparent" />

      {/* top-left decorative shape */}
      <img
        src={BgCircle}
        alt="Decorative shape"
        className="absolute -left-25 top-4 w-[380px] h-[380px] mix-blend-screen pointer-events-none select-none object-contain"
      />

      {/* bottom-right decorative shape */}
      <img
        src={ImgSix}
        alt="Decorative shape bottom right"
        className="absolute right-0 bottom-0 w-[320px] h-[320px] object-contain opacity-80 pointer-events-none select-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-6xl mx-auto h-full flex items-center px-6"
      >
        <div className="max-w-md text-white">
          <h1 className="text-[32px] md:text-[38px] font-semibold leading-snug">
            Meaningful investments in
            <br /> Main Street businesses
          </h1>

          <p className="mt-4 text-sm text-slate-100/90">
            Browse vetted investment offerings in communities all over the US.
          </p>

          <button className="mt-6 px-6 py-2 rounded bg-brandGreen text-white text-[13px] font-semibold shadow-lg hover:bg-emerald-500 transition">
            GET STARTED
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;