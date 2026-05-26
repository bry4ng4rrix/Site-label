"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const METRICS = [
  { value: "50", label: "postes opérationnels" },
  { value: "FR/EN", label: "bilingue certifié" },
  { value: "24h/24", label: "disponibilité" },
  { value: "100%", label: "reporting client" },
];

type AgentStatus = "DISPONIBLE" | "EN APPEL" | "PAUSE";

type Agent = {
  id: number;
  name: string;
  status: AgentStatus;
  duration: string;
};

const INITIAL_AGENTS: Agent[] = [
  { id: 1,  name: "Haja R.",    status: "EN APPEL",   duration: "04:32" },
  { id: 2,  name: "Miora T.",   status: "EN APPEL",   duration: "11:08" },
  { id: 3,  name: "Faniry A.",  status: "DISPONIBLE", duration: "" },
  { id: 4,  name: "Vola M.",    status: "EN APPEL",   duration: "02:17" },
  { id: 5,  name: "Rado B.",    status: "PAUSE",      duration: "03:00" },
  { id: 6,  name: "Tiana J.",   status: "EN APPEL",   duration: "07:44" },
  { id: 7,  name: "Lalao S.",   status: "DISPONIBLE", duration: "" },
  { id: 8,  name: "Fara N.",    status: "EN APPEL",   duration: "01:55" },
  { id: 9,  name: "Noro H.",    status: "EN APPEL",   duration: "09:21" },
  { id: 10, name: "Zo R.",      status: "PAUSE",      duration: "01:00" },
  { id: 11, name: "Soa T.",     status: "DISPONIBLE", duration: "" },
  { id: 12, name: "Bodo M.",    status: "EN APPEL",   duration: "05:38" },
];

const STATUS_COLORS: Record<AgentStatus, string> = {
  "EN APPEL":   "#22c55e",
  "DISPONIBLE": "var(--brand-lt)",
  "PAUSE":      "var(--gold)",
};

export default function CallCenterHighlight() {
  const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1);
      setAgents(prev =>
        prev.map(agent => {
          if (Math.random() < 0.12) {
            const statuses: AgentStatus[] = ["EN APPEL", "DISPONIBLE", "PAUSE"];
            const next = statuses[Math.floor(Math.random() * statuses.length)];
            return { ...agent, status: next, duration: next === "EN APPEL" ? "00:01" : "" };
          }
          return agent;
        })
      );
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const enAppel   = agents.filter(a => a.status === "EN APPEL").length;
  const dispo     = agents.filter(a => a.status === "DISPONIBLE").length;
  const pause     = agents.filter(a => a.status === "PAUSE").length;

  return (
    <section className="py-24 px-6 grid-bg" style={{ backgroundColor: "var(--ink)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — texte & métriques */}
          <div>
            <p className="label-tag mb-4" style={{ color: "var(--gold)" }}>CALL CENTER · 50 POSTES</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Madagascar n'est pas<br />
              <span style={{ color: "var(--gold)" }}>un plan B.</span><br />
              C'est un avantage.
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-10 max-w-md">
              Même fuseau horaire que Paris. Maîtrise parfaite du français et de l'anglais.
              Coûts jusqu'à 60% inférieurs à l'Europe. 50 postes opérationnels, reporting temps réel.
            </p>

            {/* Métriques */}
            <div className="grid grid-cols-2 gap-px bg-white/10 mb-10">
              {METRICS.map((m, i) => (
                <div key={i} className="py-6 px-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="font-display text-3xl mb-1" style={{ color: "var(--gold)" }}>
                    {m.value}
                  </div>
                  <div className="label-tag text-white/40 text-[10px]">{m.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/services/callcenter"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            >
              Découvrir l'offre Call Center →
            </Link>
          </div>

          {/* Right — Dashboard animé */}
          <div
            className="rounded-sm overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            {/* Header dashboard */}
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <span className="label-tag text-white/40 text-[10px]">TABLEAU DE BORD — AGENTS EN DIRECT</span>
              <span className="flex items-center gap-1.5 text-[10px] text-white/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot inline-block" />
                LIVE
              </span>
            </div>

            {/* Stats bar */}
            <div
              className="grid grid-cols-3 divide-x text-center py-3"
              style={{ divideColor: "rgba(255,255,255,0.06)" }}
            >
              <div>
                <div className="font-display text-xl text-green-400">{enAppel}</div>
                <div className="label-tag text-[9px] text-white/30">EN APPEL</div>
              </div>
              <div>
                <div className="font-display text-xl" style={{ color: "var(--brand-lt)" }}>{dispo}</div>
                <div className="label-tag text-[9px] text-white/30">DISPONIBLE</div>
              </div>
              <div>
                <div className="font-display text-xl" style={{ color: "var(--gold)" }}>{pause}</div>
                <div className="label-tag text-[9px] text-white/30">PAUSE</div>
              </div>
            </div>

            {/* Agent list */}
            <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
              {agents.map(agent => (
                <div
                  key={agent.id}
                  className="flex items-center justify-between px-5 py-2.5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full pulse-dot inline-block"
                      style={{ backgroundColor: STATUS_COLORS[agent.status] }}
                    />
                    <span className="text-white/60 text-xs">{agent.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {agent.duration && (
                      <span className="text-white/20 text-[10px] font-mono">{agent.duration}</span>
                    )}
                    <span
                      className="label-tag text-[9px] px-2 py-0.5 rounded-sm"
                      style={{
                        color: STATUS_COLORS[agent.status],
                        backgroundColor: `${STATUS_COLORS[agent.status]}15`,
                      }}
                    >
                      {agent.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-3 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <span className="text-white/20 text-[10px]">
                + {50 - INITIAL_AGENTS.length} agents • Simulation en temps réel
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
