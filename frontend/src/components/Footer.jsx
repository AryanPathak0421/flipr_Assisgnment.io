// import React from "react";
// import NewsletterForm from "./NewsletterForm.jsx";
// import FacebookIcon from "../assets/icons/facebook.svg";
// import TwitterIcon from "../assets/icons/twitter.svg";
// import LinkedInIcon from "../assets/icons/instagram.svg";


// const Footer = () => {
//   return (
//     <footer className="bg-footerGray pt-10 pb-6 text-[12px] text-gray-600">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-8 border-b border-gray-200 pb-8">
//           <div>
//             <h3 className="text-[14px] font-semibold mb-2">NEXT INVEST</h3>
//             <p className="text-[11px] text-gray-500">
//               Copyright © 2025 Next Invest. All rights reserved.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2 text-[13px]">Services</h4>
//             <ul className="space-y-1">
//               <li>Email Marketing</li>
//               <li>Campaigns</li>
//               <li>Branding</li>
//               <li>Offline</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2 text-[13px]">About</h4>
//             <ul className="space-y-1">
//               <li>Our Story</li>
//               <li>Benefits</li>
//               <li>Team</li>
//               <li>Careers</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2 text-[13px]">
//               Subscribe to our newsletter
//             </h4>
//             <NewsletterForm />
//           </div>
//         </div>

//         <div className="flex items-center justify-between mt-4">
//           <span className="text-[11px] text-gray-500">
//             Terms · Privacy · Disclosures
//           </span>
//           <div className="flex gap-3 text-[13px]">
//            <div className="flex gap-3 items-center">
//           <img src={FacebookIcon} alt="facebook" className="w-4 h-4" />
//           <img src={TwitterIcon} alt="twitter" className="w-4 h-4" />
//           <img src={LinkedInIcon} alt="linkedin" className="w-4 h-4" />
//         </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import NewsletterForm from "./NewsletterForm.jsx";
import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedInIcon from "../assets/icons/instagram.svg";
import CaretDown from "../assets/icons/caretDown.svg";
// import CaretDown from "../assets/icons/caretDown.svg";


const Footer = () => {
  return (
    <footer className="bg-footerGray pt-10 pb-6 text-[12px] text-gray-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 border-b border-gray-200 pb-8">
          <div>
            <h3 className="text-[14px] font-semibold mb-2">NEXT INVEST</h3>
            <p className="text-[11px] text-gray-500">
              Copyright © 2025 Next Invest. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-[13px]">Services</h4>
            <ul className="space-y-1">
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-[13px]">About</h4>
            <ul className="space-y-1">
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-brandGreen cursor-pointer">
  <img
    src={CaretDown}
    alt="dropdown icon"
    className="w-3 h-3 object-contain rotate-[180deg] invert"
  />
</div>

        </div>

        {/* UPDATED SECTION */}
        <div className="flex items-center justify-between mt-4">
          {/* Replaced Terms text with Newsletter block */}
          <div>
            <h4 className="font-semibold mb-2 text-[13px]">
              Subscribe to our newsletter
            </h4>
            <NewsletterForm />
          </div>

          <div className="flex gap-3 text-[13px]">
            <div className="flex gap-3 items-center">
              <img src={FacebookIcon} alt="facebook" className="w-4 h-4" />
              <img src={TwitterIcon} alt="twitter" className="w-4 h-4" />
              <img src={LinkedInIcon} alt="linkedin" className="w-4 h-4" />
            </div>
          </div>
        </div>
        {/* END UPDATED SECTION */}

      </div>
    </footer>
  );
};

export default Footer;
