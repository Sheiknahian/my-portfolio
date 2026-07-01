"use client";
import react, { useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ target, duration = 2, isInt = true}) {
  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let rounded;
  if (isInt) {
    rounded = useTransform(() => Math.round(count.get()));
  }
  else{
    rounded = useTransform(() => count.get().toFixed(1))
  }
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, target, { duration });

    return () => controls.stop();
  }, [isInView, count, target, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}