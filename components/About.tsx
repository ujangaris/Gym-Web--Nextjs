"use client";
import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import { Achievements } from "./Achievements";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas similique iusto assumenda, dolorum aspernatur corporis ",
  },
  {
    icon: <IoIosPricetag />,
    title: "excellent prices",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas similique iusto assumenda, dolorum aspernatur corporis ",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas similique iusto assumenda, dolorum aspernatur corporis ",
  },
];

export const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        {/* head about */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illo
            facilis recusandae earum saepe minus nostrum quo similique rerum
            dolore?
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};
