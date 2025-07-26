"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
  glowColor = "bg-blue-500",
}: {
  className?: string;
  children?: React.ReactNode;
  glowColor?: string;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-gradient-to-br from-[#FFE0B2] via-[#FFD180] to-[#FFAB40] p-4 h-[280px] w-full rounded-xl border border-white/20 cursor-pointer relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1/2">
        <Illustration mouseEnter={mouseEnter} glowColor={glowColor} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-between p-2">
        {children}
      </div>
    </motion.div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={cn("text-sm text-neutral-700 leading-relaxed", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3 className={cn("font-bold text-xl text-neutral-900 mb-2", className)}>
      {children}
    </h3>
  );
};

export const Illustration = ({ 
  mouseEnter, 
  glowColor = "bg-blue-500" 
}: { 
  mouseEnter: boolean;
  glowColor?: string;
}) => {
  const stars = 54;
  const columns = 12;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, mouseEnter ? 2000 : 4000);

    return () => clearInterval(interval);
  }, [mouseEnter]);

  return (
    <div
      className="h-32 p-1 w-full opacity-40"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 8) * 0.1;
        const staticDelay = starIdx * 0.02;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} glowColor={glowColor} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} glowColor={glowColor} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  const warmColors = ["#B388FF", "#FFA200", "#FF80AB"];
  const randomColor = warmColors[Math.floor(Math.random() * warmColors.length)];
  
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 1.8, 1.5, 1.2] : 1,
        background: isGlowing ? randomColor : "#D1C4E9",
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-[#D1C4E9] h-[1px] w-[1px] rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ 
  delay, 
  glowColor = "bg-blue-500" 
}: { 
  delay: number;
  glowColor?: string;
}) => {
  const getGlowClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "bg-orange-500": "bg-orange-500 shadow-orange-400",
      "bg-yellow-500": "bg-yellow-500 shadow-yellow-400",
      "bg-pink-500": "bg-pink-500 shadow-pink-400",
      "bg-coral-500": "bg-red-400 shadow-red-300",
      "bg-amber-500": "bg-amber-500 shadow-amber-400",
      "bg-rose-500": "bg-rose-500 shadow-rose-400",
    };
    return colorMap[color] || "bg-blue-500 shadow-blue-400";
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full blur-[1px] shadow-2xl",
        getGlowClass(glowColor)
      )}
    />
  );
};