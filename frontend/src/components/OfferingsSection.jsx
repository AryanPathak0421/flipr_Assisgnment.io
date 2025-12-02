import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import OfferingCard from "./OfferingCard.jsx";
import Img10 from "../assets/images/10.svg";
import Img11 from "../assets/images/11.svg";
import Img9 from "../assets/images/9.svg";
import Img8 from "../assets/images/8.svg";
import Img7 from "../assets/images/7.svg";
import Img12 from "../assets/images/12.svg";
import Shape from "../assets/images/shape.svg";
// import Shape from "../assets/images/shape.svg";



const sampleOfferings = [
  {
    tag: "House",
    imageUrl: Img10,
title: "Oxalis",

    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    totalPrice: 1000000,
    getPrice: 57990,
    securityType: "Revenue Sharing Note",
    investmentMultiple: "1.4x",
    maturity: "48 Months",
    minInvestment: 100
  },
  {
    tag: "House",
    imageUrl:Img12,
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    totalPrice: 1000000,
    getPrice: 57990,
    securityType: "Revenue Sharing Note",
    investmentMultiple: "1.4x",
    maturity: "48 Months",
    minInvestment: 100
  },
  {
    tag: "House",
    imageUrl:Img8,
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    totalPrice: 1000000,
    getPrice: 57990,
    securityType: "Revenue Sharing Note",
    investmentMultiple: "1.4x",
    maturity: "48 Months",
    minInvestment: 100
  },
  {
    tag: "House",
    imageUrl:Img11,
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    totalPrice: 1000000,
    getPrice: 57990,
    securityType: "Revenue Sharing Note",
    investmentMultiple: "1.4x",
    maturity: "48 Months",
    minInvestment: 100
  },
  {
    tag: "House",
    imageUrl:Img7,
    title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    totalPrice: 1000000,
    getPrice: 57990,
    securityType: "Revenue Sharing Note",
    investmentMultiple: "1.4x",
    maturity: "48 Months",
    minInvestment: 100
  },
  {
    tag: "House",
    imageUrl:Img9,
        title: "Oxalis",
    location: "Brooklyn, NY",
    description:
      "A recognized leader in language immersion & early education, opening second school.",
    totalPrice: 1000000,
    getPrice: 57990,
    securityType: "Revenue Sharing Note",
    investmentMultiple: "1.4x",
    maturity: "48 Months",
    minInvestment: 100
  }
];

const OfferingsSection = () => {
  const [offerings, setOfferings] = useState([]);

  useEffect(() => {
    axios
      .get("/offerings")
      .then((res) => setOfferings(res.data))
      .catch((err) => {
        console.error("Error fetching offerings", err);
        setOfferings([]); // fallback to sample below
      });
  }, []);

  // if DB has data → use it, else use 6 sample ones
  const dataToShow = offerings.length > 0 ? offerings : sampleOfferings;

  return (
    <section id="offerings" className="py-16 bg-white relative">
      {/* left abstract shape */}
<img
  src={Shape}
  alt="Decorative shape"
  className="hidden md:block absolute left-0 bottom-80 w-40 h-40 object-contain opacity-120 pointer-events-none select-none"
/>


      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[26px] font-semibold text-brandDark">
            Offerings open for investment
          </h2>
          <p className="text-[13px] text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore pre-vetted investment opportunities available in a growing
            number of industry categories.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {dataToShow.map((o, index) => (
            <OfferingCard key={o._id || index} offering={o} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="px-8 py-2 border border-brandPink text-brandPink text-[12px] font-medium rounded-full hover:bg-brandPink hover:text-white transition">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
