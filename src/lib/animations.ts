import { MotionProps } from "framer-motion";

export const fadeUp = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: 0.8,
    delay: delay,
    // Ease değerini "easeInOut" gibi standart bir değer yap 
    // veya özel bir dizi kullan [0.16, 1, 0.3, 1]
    ease: [0.16, 1, 0.3, 1], 
  },
});