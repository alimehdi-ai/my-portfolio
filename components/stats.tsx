import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const funStats = [
  { stat: 24, suffix: "h", label: "Response Time", lessThan: true },
  { stat: 100, suffix: "%", label: "Client Satisfaction" },
  { stat: 50, suffix: "+", label: "Projects Delivered" },
  { stat: 5, suffix: "+", label: "Years of Experience" },
  { stat: 10000, suffix: "+", label: "Users Served" },
  { stat: 99.9, suffix: "%", label: "Uptime" }
];

const FunStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 pt-8">
      {funStats.map((item, idx) => (
        <motion.div
          key={idx}
          className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {item.lessThan && "< "}
            {inView ? (
              <CountUp
                start={0}
                end={item.stat}
                duration={2}
                decimals={item.stat % 1 !== 0 ? 1 : 0}
              />
            ) : (
              0
            )}
            {item.suffix}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Stats() {
  return (
    <section>
      <FunStats />
    </section>
  );
}
