import React from "react";

const OfferingCard = ({ offering }) => {
  const {
    tag,
    imageUrl,
    title,
    location,
    description,
    totalPrice,
    getPrice,
    securityType,
    investmentMultiple,
    maturity,
    minInvestment
  } = offering || {};

  const formattedGetPrice =
    typeof getPrice === "number"
      ? `₹${getPrice.toLocaleString()}`
      : "$57,990";

  const formattedTotalPrice =
    typeof totalPrice === "number"
      ? `raised of ₹${totalPrice.toLocaleString()}`
      : "raised of $1,000,000";

  const formattedMinInv =
    typeof minInvestment === "number"
      ? `₹${minInvestment.toLocaleString()}`
      : "$100";

  return (
    <div className="bg-white rounded shadow-[0_18px_35px_rgba(30,30,60,0.12)] overflow-hidden text-[12px]">
      {/* image */}
      <div className="relative h-44 w-full">
        <img
          src={imageUrl}
          alt={title || "Offering"}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-[3px] rounded-full bg-black/70 text-[10px] text-white uppercase tracking-wide">
            {tag || "House"}
          </span>
          <span className="px-2 py-[3px] rounded-full bg-white text-[10px] text-gray-800 uppercase tracking-wide">
            Family Business
          </span>
        </div>
      </div>

      {/* content */}
      <div className="p-4 space-y-2">
        <div>
          <h3 className="font-semibold text-[14px] text-brandDark">
            {title || "Oxalis"}
          </h3>
          <p className="text-[11px] text-gray-500">
            {location || "Brooklyn, NY"}
          </p>
        </div>

        <p className="text-[11px] text-gray-600 leading-relaxed">
          {description ||
            "A recognized leader in language immersion & early education, opening second school."}
        </p>

        <p className="text-[11px] text-gray-600 mt-1">
          <span className="font-semibold text-brandGreen">
            {formattedGetPrice}{" "}
          </span>
          <span className="text-gray-500">{formattedTotalPrice}</span>
        </p>

        <div className="border-t border-gray-200 pt-3 mt-2 grid grid-cols-2 gap-y-2">
          <div>
            <p className="text-[10px] text-gray-400">Security Type</p>
            <p className="font-medium text-[11px]">
              {securityType || "Revenue Sharing Note"}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400">Investment Multiple</p>
            <p className="font-medium text-[11px]">
              {investmentMultiple || "1.4x"}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400">Maturity</p>
            <p className="font-medium text-[11px]">
              {maturity || "48 Months"}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400">Min. Investment</p>
            <p className="font-medium text-[11px]">{formattedMinInv}</p>
          </div>
        </div>

        <div className="pt-3">
          <button className="w-full py-2 rounded bg-brandPink text-white text-[12px] font-semibold tracking-wide hover:bg-brandPink/90 transition">
            VIEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;
