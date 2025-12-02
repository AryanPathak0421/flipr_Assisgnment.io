import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
} from "chart.js";
import ChartImg from "../assets/images/16.svg";
import GrowthIcon from "../assets/images/subtract.svg";
import SemiCircleImg from "../assets/images/14.svg";
import DotsImg from "../assets/images/15.svg";
import BgShape from "../assets/images/1.svg";




ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const StatsSection = () => {
  const data = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "",
        data: [1, 2.5, 3.5, 5, 6.5, 8],
        borderWidth: 2,
        fill: true,
        tension: 0.35
      }
    ]
  };

  const options = {
    plugins: { 
        legend: { 
            display: false 
        } 
    },
    scales: {
      x: { 
        grid: { 
            display: false 
        } 
    },
      y: {
        grid: { 
            color: "#E2ECF5" 
        },
        ticks: {
             stepSize: 2 
            }
      }
    }
  };

  return (
   <section className="relative py-16 bg-[#EAF5FF] overflow-hidden">
<img
  src={BgShape}
  alt="Decorative shape"
  className="absolute -left-25 bottom-6 w-90 h-80 object-contain pointer-events-none select-none opacity-100"
/>

      <img
        src={SemiCircleImg}
        alt="Decorative semi circle"
        className="pointer-events-none select-none absolute right-11 -top-2 w-24 md:w-28"
      />

      <img
        src={DotsImg}
        alt="Decorative dots"
        className="pointer-events-none select-none absolute right-16 bottom-14 w-5 md:w-7"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <img
            src={GrowthIcon}
            alt="Growth icon"
            className="w-10 h-10 mb-4"
          />

          <p className="text-[12px] text-brandGreen font-semibold mb-2">
            PERFORMANCE
          </p>
          <h2 className="text-[24px] font-semibold mb-3 text-brandDark">
            $7M+ paid out to investors
          </h2>
          <p className="text-[13px] text-gray-600 mb-2">
            Next Invest has already paid out over $7M in cash returns to
            investors.
          </p>
          <p className="text-[13px] text-gray-600">
            Earn potential cash payments through unique revenue-share and debt
            financing investments.
          </p>
        </div>

        {/* CHART CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <img
            src={ChartImg}
            alt="Chart illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
