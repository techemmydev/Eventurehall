import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div>
      <motion.div
        className="w-5 h-5 border-2 border-t-2 border-t-white border-white/50 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
