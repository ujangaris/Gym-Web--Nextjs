"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "training course",
  },
  {
    number: 879,
    icon: FaClock,
    text: "working hours",
  },
  {
    number: 150,
    icon: ImUsers,
    text: "happy customers",
  },
  {
    number: 9,
    icon: FaTrophy,
    text: "international awards",
  },
];
export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section>
      <div className="container mx-auto">
        <div className="">
          {stats.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="border border-action/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  {/* circle inner & count number */}
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full"
                  >
                    {isInView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};