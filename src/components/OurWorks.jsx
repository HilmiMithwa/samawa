import { motion } from "motion/react";

const categories = [
  "All Works",
  "Wedding Invitation",
  "Party Invitation",
  "Aqiqah Invitation",
  "Others",
];

function OurWorks() {
  return (
    <>
      <div className="text-[#002366] px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <div className="flex gap-[24px] text-xl md:text-[25px] font-heading">
              <h1>[03]</h1>
              <h1>Our Works</h1>
            </div>
            <h1 className="text-4xl md:text-[100px] font-heading max-w-[850px] text-left md:text-right font-light leading-tight">
              Some of our work we’ve proud of
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="text-[#002366] font-body text-lg md:text-[25px] max-w-full md:max-w-[428px] px-6 md:px-0 mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ul className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-4 items-center list-none p-0 m-0">
            {categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center before:content-['•'] before:text-gray-300 before:mr-2 before:text-[20px] md:before:text-[30px]"
              >
                <a className="cursor-pointer hover:text-amber-600 transition-colors">{category}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div>
        <motion.div>
          
        </motion.div>
      </div>
    </>
  );
}

export default OurWorks;