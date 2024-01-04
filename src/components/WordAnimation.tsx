import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  <span className="text-red-500">personal</span>,
  <span className="text-blue-500">products</span>,
  <span className="text-yellow-500">business</span>,
  <span className="text-green-500">portfolio</span>,
];

const WordAnimation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.span
        key={currentWordIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative font-bold "
      >
        <span className="absolute">{words[currentWordIndex]}</span>
      </motion.span>
    </AnimatePresence>
  );
};

export default WordAnimation;
