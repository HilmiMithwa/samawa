import { motion } from "motion/react";
import React from "react";

const pricingSections = [
  {
    category: "Design & Contents",
    features: [
      {
        name: "Custom Design",
        basic: "check",
        standard: "check",
        premium: "check",
      },
      {
        name: "Cover + Countdown",
        basic: "check",
        standard: "check",
        premium: "check",
      },
      {
        name: "Couple Profile",
        basic: "check",
        standard: "check",
        premium: "check",
      },
      {
        name: "Gallery",
        basic: "10 Photos",
        standard: "20 Photos",
        premium: "Unlimited",
      },
      {
        name: "Google Maps",
        basic: "check",
        standard: "check",
        premium: "check",
      },
      { name: "Music", basic: "1 Song", standard: "Custom", premium: "Custom" },
      { name: "Love Story", basic: "-", standard: "check", premium: "check" },
      { name: "Video Gallery", basic: "-", standard: "-", premium: "check" },
      {
        name: "Animation/Parallax",
        basic: "-",
        standard: "-",
        premium: "check",
      },
    ],
  },
  {
    category: "Interactive Feature",
    features: [
      {
        name: "RSVP Online",
        basic: "check",
        standard: "check",
        premium: "check",
      },
      {
        name: "Wishes & Prayers",
        basic: "check",
        standard: "check",
        premium: "Unlimited",
      },
      {
        name: "Digital Gift",
        basic: "check",
        standard: "check",
        premium: "Multi Account",
      },
      {
        name: "Realtime Dashboard",
        basic: "-",
        standard: "check",
        premium: "check",
      },
      { name: "QR Invitation", basic: "-", standard: "-", premium: "check" },
      { name: "Guest Filter", basic: "-", standard: "-", premium: "check" },
    ],
  },
  {
    category: "Technical & Support",
    features: [
      {
        name: "Responsive Design",
        basic: "check",
        standard: "check",
        premium: "check",
      },
      { name: "Revision", basic: "2x", standard: "2x", premium: "Unlimited" },
      {
        name: "Process Time",
        basic: "2-3 Days",
        standard: "2-3 Days",
        premium: "1-2 Days",
      },
      { name: "Custom Domain", basic: "-", standard: "-", premium: "check" },
    ],
  },
];

const RenderCell = ({ value }) => {
  if (value === "check") {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-[#002366] flex items-center justify-center text-white text-xs font-bold">
          ✓
        </div>
      </div>
    );
  }
  return <span className="text-gray-500 font-medium">{value}</span>;
};

function PricingTable() {
  return (
    <>
      <div className="text-[#002366] py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-between font-body gap-[340px] items-center ">
            <h1 className="text-[100px] font-heading max-w-[825px] font-light">
              The best prices that we can offer
            </h1>
            <div className="flex gap-[24px] text-[25px] font-heading text-right">
              <h1>[04]</h1>
              <h1>Price List</h1>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full text-[#002366] font-price py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full grid grid-cols-4 gap-6 items-end mb-8 px-4">
            <div></div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-left">Basic</h3>
              <p className="text-xs text-[#002366] text-left mt-1">
                one time purchase - forever active
              </p>
              <div className="text-5xl font-bold text-left my-6">99k</div>
              <button className="w-full py-2.5 border-2 border-[#002366] text-[#002366] font-semibold rounded-xl hover:bg-[#002366] hover:text-white transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-[#002366] text-white rounded-2xl p-6 shadow-md text-center transform scale-105">
              <h3 className="text-2xl font-bold text-left">Standard</h3>
              <p className="text-xs text-blue-200 text-left mt-1">
                one time purchase - forever active
              </p>
              <div className="text-5xl font-bold text-left my-6">149k</div>
              <button className="w-full py-2.5 bg-white text-[#002366] font-semibold rounded-xl hover:bg-gray-100 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-left">Premium</h3>
              <p className="text-xs text-[#002366] text-left mt-1">
                one time purchase - forever active
              </p>
              <div className="text-5xl font-bold text-left my-6">199k</div>
              <button className="w-full py-2.5 border-2 border-[#002366] text-[#002366] font-semibold rounded-xl hover:bg-[#002366] hover:text-white transition-all">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full table-fixed border-collapse text-left text-[16px]">
              <thead>
                <tr className="invisible h-0">
                  <th className="w-1/4">Features</th>
                  <th className="w-1/4">Basic</th>
                  <th className="w-1/4">Standard</th>
                  <th className="w-1/4">Premium</th>
                </tr>
              </thead>

              <tbody>
                {pricingSections.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr>
                      <td
                        colSpan={4}
                        className="pt-10 pb-4 font-price  text-xl font-bold border-b border-gray-200"
                      >
                        {section.category}
                      </td>
                    </tr>

                    {section.features.map((feature, fIdx) => (
                      <tr
                        key={fIdx}
                        className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors"
                      >
                        {/* Nama Fitur */}
                        <td className="py-4 font-medium text-[#002366]  flex items-center gap-2">
                          {feature.name}
                          <span className="text-gray-300 text-xs cursor-pointer">
                            ⓘ
                          </span>
                        </td>

                        <td className="py-4 text-center">
                          <RenderCell value={feature.basic} />
                        </td>
                        <td className="py-4 text-center bg-blue-50/20">
                          <RenderCell value={feature.standard} />
                        </td>
                        <td className="py-4 text-center">
                          <RenderCell value={feature.premium} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default PricingTable;
