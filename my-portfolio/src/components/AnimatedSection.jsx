import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

/**
 * Wraps children in a scroll-triggered fade+slide-up animation.
 * Respects prefers-reduced-motion via CSS — the motion lib also
 * skips animations when the user preference is set.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px 0px' });

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = { opacity: 0, ...offsets[direction] };
  const animate = inView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
