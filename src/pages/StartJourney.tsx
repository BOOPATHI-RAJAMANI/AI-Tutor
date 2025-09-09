import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Award,
  Briefcase,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

/* ----------------------------- Config / Data ---------------------------- */

const MILESTONES = [
  {
    id: 1,
    title: "1st Year Basics",
    description: "Build strong fundamentals",
    icon: BookOpen,
    tip: "Focus on mathematics, coding, and communication.",
  },
  {
    id: 2,
    title: "Explore Departments",
    description: "Choose your passion field",
    icon: Users,
    tip: "Explore labs, attend seminars, talk to mentors.",
  },
  {
    id: 3,
    title: "Learn Subjects",
    description: "Deep dive into core subjects",
    icon: Target,
    tip: "Follow notes, online courses, and group studies.",
  },
  {
    id: 4,
    title: "Gain Skills",
    description: "Workshops, coding, internships",
    icon: Lightbulb,
    tip: "Hackathons, internships, and certifications help you grow.",
  },
  {
    id: 5,
    title: "Final Year Projects",
    description: "Innovate & create real solutions",
    icon: Award,
    tip: "Pick real-world problems and collaborate with peers.",
  },
  {
    id: 6,
    title: "Placements",
    description: "Prepare for interviews & jobs",
    icon: Briefcase,
    tip: "Mock interviews, aptitude tests, resume building.",
  },
  {
    id: 7,
    title: "Success",
    description: "Graduation & future growth",
    icon: Star,
    tip: "Keep learning and networking for lifelong growth.",
  },
] as const;

/** Milestone positions in % of width/height of the SVG viewbox */
const POSITIONS_PCT: Array<{ x: number; y: number }> = [
  { x: 8, y: 78 },
  { x: 24, y: 64 },
  { x: 40, y: 50 },
  { x: 56, y: 36 },
  { x: 72, y: 24 },
  { x: 86, y: 16 },
  { x: 96, y: 10 },
];

const VIEWBOX = { w: 1100, h: 520 }; // logical canvas for path calculations
const ROAD_WIDTH = 64;

/* ------------------------------ Small Utils ----------------------------- */

function pctToPx(
  pct: Array<{ x: number; y: number }>,
  width: number,
  height: number
) {
  return pct.map((p) => ({
    x: (p.x / 100) * width,
    y: (p.y / 100) * height,
  }));
}

function buildPathD(points: Array<{ x: number; y: number }>): string {
  return points.reduce(
    (acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : acc + ` L ${p.x} ${p.y}`),
    ""
  );
}

/* ----------------------------- Floating Bits ---------------------------- */

const Float: React.FC<
  React.PropsWithChildren<{ delay?: number; dur?: number; className?: string }>
> = ({ children, delay = 0, dur = 8, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0.25, y: -12 }}
    animate={{ opacity: [0.25, 0.7, 0.25], y: [-12, 12, -12] }}
    transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

/* ----------------------------- Main Component --------------------------- */

const StartJourney: React.FC = () => {
  // layout / responsiveness
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [box, setBox] = useState({ w: VIEWBOX.w, h: VIEWBOX.h });

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      // keep an aspect similar to VIEWBOX, but fit width
      const width = r.width;
      const height = Math.min(r.width * (VIEWBOX.h / VIEWBOX.w), 520);
      setBox({ w: width, h: height });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // derived geometry
  const points = useMemo(
    () => pctToPx(POSITIONS_PCT, box.w, box.h),
    [box.w, box.h]
  );
  const pathD = useMemo(() => buildPathD(points), [points]);

  // motion state
  const boyX = useMotionValue(points[0]?.x ?? 0);
  const boyY = useMotionValue(points[0]?.y ?? 0);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  // runner loop (x/y animation between points)
  useEffect(() => {
    let mounted = true;

    const run = async () => {
      while (mounted) {
        for (let i = 0; i < points.length; i++) {
          setActive(i);
          setPaused(true);

          // brief milestone pause (still bobbing subtly)
          await new Promise((r) => setTimeout(r, i === 0 ? 300 : 1200));
          setPaused(false);

          const target = points[(i + 1) % points.length];
          // duration proportional to distance (constant speed)
          const dx = target.x - boyX.get();
          const dy = target.y - boyY.get();
          const dist = Math.hypot(dx, dy);
          const dur = Math.max(0.9, Math.min(1.6, dist / 350)); // clamp 0.9–1.6s

          const ax = animate(boyX, target.x, {
            duration: dur,
            ease: "easeInOut",
          });
          const ay = animate(boyY, target.y, {
            duration: dur,
            ease: "easeInOut",
          });

          await Promise.all([ax.finished, ay.finished]);
        }
      }
    };

    run();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [box.w, box.h]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(99,102,241,0.25),transparent)]" />

      {/* floating decor (minimal, premium) */}
      <Float className="absolute left-6 top-24 text-slate-300/30 text-4xl">🎓</Float>
      <Float className="absolute right-10 top-40 text-slate-300/25 text-4xl" delay={1.5}>
        💡
      </Float>
      <Float className="absolute left-10 bottom-24 text-slate-300/25 text-3xl" delay={0.8}>
        📘
      </Float>
      <Float className="absolute right-24 bottom-16 text-slate-300/25 text-4xl" delay={2.2}>
        ✨
      </Float>

      {/* Heading */}
      <header className="text-center pt-12 pb-6">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 drop-shadow"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Your Roadmap to Success
        </motion.h1>
        <p className="mt-3 text-slate-300/80">
          Follow the milestones • Learn • Build • Succeed
        </p>
      </header>

      {/* Roadmap */}
      <div ref={wrapRef} className="relative mx-auto w-full max-w-6xl px-4" style={{ height: 560 }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${box.w} ${box.h}`}
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Road edge glow (subtle) */}
          <path
            d={pathD}
            fill="none"
            stroke="#0ea5a2"
            strokeWidth={ROAD_WIDTH + 6}
            opacity="0.25"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
          {/* Road base */}
          <path
            d={pathD}
            fill="none"
            stroke="#0b1220"
            strokeWidth={ROAD_WIDTH}
            strokeLinecap="round"
          />
          {/* Center dashes */}
          <path
            d={pathD}
            fill="none"
            stroke="#a5b4fc"
            strokeOpacity="0.75"
            strokeWidth={4}
            strokeDasharray="14 14"
            strokeLinecap="round"
          />

          {/* Milestones */}
          {MILESTONES.map((m, i) => {
            const p = points[i];
            const isActive = i === active;
            const Icon = m.icon;
            return (
              <g key={m.id} pointerEvents="all" style={{ cursor: "pointer" }} onClick={() => setSelected(i)}>
                {/* halo */}
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={isActive ? 30 : 22}
                  fill="none"
                  stroke={isActive ? "#22d3ee" : "#64748b"}
                  strokeWidth={isActive ? 6 : 3}
                  opacity={isActive ? 0.9 : 0.55}
                  animate={isActive ? { r: [26, 32, 26] } : {}}
                  transition={{ duration: 1.4, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                />
                {/* node */}
                <circle cx={p.x} cy={p.y} r={18} fill={isActive ? "#14b8a6" : "#334155"} />
                {/* icon */}
                <foreignObject x={p.x - 14} y={p.y - 14} width={28} height={28}>
                  <div className="w-7 h-7 rounded-full grid place-items-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                </foreignObject>
                {/* labels */}
                <text
                  x={p.x}
                  y={p.y + 44}
                  fill={isActive ? "#e2e8f0" : "#94a3b8"}
                  fontSize="13"
                  fontWeight={700}
                  textAnchor="middle"
                >
                  {m.title}
                </text>
                <text
                  x={p.x}
                  y={p.y + 62}
                  fill={isActive ? "#cbd5e1" : "#94a3b8"}
                  fontSize="11.5"
                  textAnchor="middle"
                >
                  {m.description}
                </text>
              </g>
            );
          })}

          {/* Runner (absolute coordinates bound to motion values) */}
          <motion.image
            href="/OIP-removebg-preview.png"
            width="54"
            height="54"
            x={-27}
            y={-27}
            animate={{
              // subtle bobbing while moving
              scaleY: paused ? 1 : [1, 0.98, 1],
            }}
            transition={{ duration: 0.5, repeat: paused ? 0 : Infinity, ease: "easeInOut" }}
            style={{
              x: boyX,
              y: boyY,
              filter: "drop-shadow(0 8px 18px rgba(20,184,166,0.35))",
            }}
          />

          {/* Light trail behind runner */}
          <motion.circle
            style={{ x: boyX, y: boyY }}
            r={10}
            fill="#22d3ee"
            opacity={0.25}
            animate={{ r: [8, 14, 8], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            filter="url(#softGlow)"
          />
        </svg>
      </div>

      {/* CTA */}
      <div className="text-center mt-6 pb-14">
        <Button
          asChild
          className="px-7 py-6 text-base bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          <Link to="/year-selection">
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Tip Dialog */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-md bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl">
          {selected !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-teal-500/90 text-white">
                    {React.createElement(MILESTONES[selected].icon, { className: "w-5 h-5" })}
                  </div>
                  {MILESTONES[selected].title}
                </DialogTitle>
                <DialogDescription className="text-slate-600">
                  {MILESTONES[selected].description}
                </DialogDescription>
              </DialogHeader>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <p className="text-slate-700">💡 {MILESTONES[selected].tip}</p>
              </div>
              <DialogClose asChild>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg">
                  Got it
                </Button>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StartJourney;
