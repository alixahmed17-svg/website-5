"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

const pillars = [
  {
    label: "01 / SPEED",
    title: "Decisions in seconds, not weeks",
    body: "AI compresses work that used to take a team a month — reviewing scans, screening claims, sorting data — into a task finished before the coffee's cold.",
  },
  {
    label: "02 / SCALE",
    title: "One system, a million cases",
    body: "A doctor sees thousands of patients in a career. A well-trained model has effectively seen millions of cases, and applies that at every single consultation.",
  },
  {
    label: "03 / DISCOVERY",
    title: "Patterns no person was built to see",
    body: "Some signals are too faint, too spread out, or too buried in noise for a human eye. AI is the first tool that reliably finds them anyway.",
  },
];

const impact = [
  {
    field: "Medicine",
    stat: "Faster diagnosis",
    detail: "Imaging models flag early-stage tumors that are easy to miss on a first pass, giving doctors a second, tireless set of eyes.",
  },
  {
    field: "Agriculture",
    stat: "Higher yield, less waste",
    detail: "Satellite and sensor data let AI tell a farmer exactly which field needs water this week, instead of watering everything on a guess.",
  },
  {
    field: "Education",
    stat: "Personalized pace",
    detail: "A student stuck on fractions gets a different explanation than one who's ready to move on — at the exact moment they need it.",
  },
  {
    field: "Climate",
    stat: "Sharper forecasting",
    detail: "Weather and grid models trained on decades of data now predict storms and energy demand with a precision that saves both lives and fuel.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="max-w-5xl mx-auto px-6 pt-8 flex items-center justify-between font-mono text-xs tracking-wide uppercase text-muted">
        <span>Signal / Noise</span>
        <span>On the importance of AI</span>
      </header>

      {/* Hero */}
      <section className="grid-field">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-cobalt mb-6">
              Essay — 4 min read
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] max-w-3xl">
              The pattern was always there.
              <br />
              AI just learned to <span className="stat-underline">see it.</span>
            </h1>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
              Every field runs on patterns too large, too fast, or too faint for
              any one person to track by hand. Artificial intelligence doesn&apos;t
              replace judgment — it hands judgment better evidence, sooner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why it matters */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl mb-12">Why it matters</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 120}>
              <div className="border border-line rounded-sm p-6 h-full bg-white/40">
                <p className="font-mono text-xs text-cobalt mb-4">{p.label}</p>
                <h3 className="font-display text-xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Real world impact */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl mb-2">
            Where it&apos;s already working
          </h2>
          <p className="text-muted mb-12">Not hypothetical. Running today, quietly.</p>
        </Reveal>
        <div className="divide-y divide-line">
          {impact.map((row, i) => (
            <Reveal key={row.field} delay={i * 100}>
              <div className="grid sm:grid-cols-[160px_200px_1fr] gap-4 py-6 items-start">
                <p className="font-mono text-xs uppercase tracking-wide text-muted pt-1">
                  {row.field}
                </p>
                <p className="font-display text-lg">{row.stat}</p>
                <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The balance */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
        <div className="grid sm:grid-cols-[1fr_1.4fr] gap-10">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl">The balance</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                None of this makes AI infallible. Models inherit the bias of
                their data, fail quietly outside their training, and can be
                trusted with too much too soon. The importance of AI isn&apos;t
                that it&apos;s always right — it&apos;s that it gives people a
                faster, wider first look, so human judgment can spend its time
                on the harder call, not the busywork before it.
              </p>
              <p>
                Used well, it&apos;s a second opinion available at any scale.
                Used carelessly, it&apos;s a fast way to be confidently wrong.
                The difference is entirely in how much oversight stays in the
                loop.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row justify-between gap-6">
          <Reveal>
            <p className="font-display text-xl max-w-md">
              The tools change. The need for judgment doesn&apos;t.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-xs text-muted uppercase tracking-wide self-end">
              Signal / Noise — {new Date().getFullYear()}
            </p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
