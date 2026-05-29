import { motion } from "motion/react";

const categories = [
    "All Works",
    "Wedding Invitation",
    "Party Invitation",
    "Aqiqah Invitation",
    "Others"
]

function OurWorks() {
  return (
    <>
      <div className="text-[#002366]">
        <motion.div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[24px] text-[25px] font-heading">
              <h1>[03]</h1>
              <h1>Our Works</h1>
            </div>
            <h1 className="text-[100px] font-heading max-w-[850px] text-right">
              Some of our work we’ve proud of
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="text-[#002366] font-body text-[25px] max-w-[428px] ">
        <motion.div>
            <ul className="flex flex-wrap gap-x-6 gap-y-4 items-center list-none p-0 m-0">
                {categories.map((category, index) => (
                    <li key={index} className="flex items-center before:content-['•'] before:text-gray-300 before:mr-2 before:text-[30px]"><a>{category}</a></li>
                ))}
            </ul>
            
        </motion.div>
      </div>

    </>
  );
}

export default OurWorks;
