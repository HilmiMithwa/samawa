import { motion } from "motion/react"; 

function AboutUs() {
  return (
    <div className="px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row justify-between font-body items-start md:items-center py-16 md:py-[160px] gap-6 md:gap-0">
          <div className="flex gap-[24px] text-xl md:text-[25px] font-heading">
            <h1>[01]</h1>
            <h1>About Us</h1>
          </div>
          <p className="text-lg md:text-[30px] text-left md:text-right max-w-[822px]">
            Setiap kisah cinta itu unik, dan cara Anda membagikannya pun harus
            terasa istimewa. Kami adalah tim kreatif di balik pembuatan undangan
            digital premium yang berfokus pada keindahan visual dan detail
            estetika.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;