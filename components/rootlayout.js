import { Inter } from "next/font/google";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
 
const inter = Inter({
  subsets: ["latin"],
});
 
export default function RootLayout({ children }) {
  const router = useRouter();
 
  return (
    <div className={inter.className}>
      {/* <AnimatePresence mode="wait"> */}
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          {children}
        </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
}