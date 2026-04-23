import { motion } from 'framer-motion';

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface Nebula {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  xPath: [number, number, number, number];
  yPath: [number, number, number, number];
}

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const STARS: Star[] = Array.from({ length: 65 }, (_, i) => ({
  id: i,
  left: `${rand(0, 100)}%`,
  top: `${rand(0, 100)}%`,
  size: rand(0.8, 2.8),
  duration: rand(2, 6),
  delay: rand(0, 7),
  opacity: rand(0.3, 0.9),
}));

const NEBULA_COLORS = [
  'rgba(59,130,246,0.9)',
  'rgba(139,92,246,0.9)',
  'rgba(45,212,191,0.85)',
  'rgba(99,102,241,0.9)',
  'rgba(30,64,175,0.8)',
  'rgba(168,85,247,0.85)',
  'rgba(14,165,233,0.85)',
  'rgba(109,40,217,0.8)',
];

const NEBULA: Nebula[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${rand(0, 100)}%`,
  top: `${rand(0, 100)}%`,
  size: rand(100, 240),
  duration: rand(28, 50),
  delay: rand(0, 10),
  opacity: rand(0.06, 0.16),
  color: NEBULA_COLORS[i],
  xPath: [0, rand(-90, 90), rand(-90, 90), 0],
  yPath: [0, rand(-90, 90), rand(-90, 90), 0],
}));

export function BokehBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {STARS.map((star) => (
        <motion.div
          key={`s${star.id}`}
          className="absolute rounded-full bg-white"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
          animate={{ opacity: [star.opacity, star.opacity * 0.08, star.opacity] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {NEBULA.map((n) => (
        <motion.div
          key={`n${n.id}`}
          className="absolute rounded-full blur-3xl"
          style={{
            left: n.left,
            top: n.top,
            width: n.size,
            height: n.size,
            background: `radial-gradient(circle, ${n.color}, transparent)`,
            opacity: n.opacity,
            mixBlendMode: 'screen',
          }}
          animate={{ x: n.xPath, y: n.yPath, scale: [1, 1.25, 0.85, 1] }}
          transition={{ duration: n.duration, delay: n.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
}
