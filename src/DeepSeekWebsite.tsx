import React from "react";

type Model = {
  model: string;
  origin: string;
  reasoning: number;
  coding: number;
  creativity: number;
  privacy: number;
  openness: number;
  cost: number;
  text: string;
  tag: string;
};

type HostingOption = {
  title: string;
  hardware: string;
  model: string;
  text: string;
  level: string;
};

export default function DeepSeekWebsite() {
  const strengths = [
    { label: "Mathematik", value: 92, description: "stark bei strukturierten Aufgaben" },
    { label: "Programmieren", value: 88, description: "hilfreich beim Erklären und Debuggen" },
    { label: "Logisches Denken", value: 90, description: "Kernbereich von R1 und V4-Pro" },
    { label: "Alltagsfragen", value: 82, description: "gut, aber nicht der Hauptfokus" },
  ];

  const models: Model[] = [
    {
      model: "DeepSeek V4-Pro",
      origin: "China",
      reasoning: 93,
      coding: 92,
      creativity: 76,
      privacy: 48,
      openness: 90,
      cost: 78,
      tag: "Neues Top-Modell",
      text: "Stark bei Coding, Reasoning und langen Kontexten. Noch neu, deshalb schwer endgültig einzuordnen.",
    },
    {
      model: "DeepSeek V4-Flash",
      origin: "China",
      reasoning: 84,
      coding: 83,
      creativity: 70,
      privacy: 48,
      openness: 90,
      cost: 96,
      tag: "Schnell & günstig",
      text: "Günstigere und schnellere Variante für einfache bis mittlere Aufgaben.",
    },
    {
      model: "DeepSeek R1",
      origin: "China",
      reasoning: 90,
      coding: 88,
      creativity: 72,
      privacy: 48,
      openness: 88,
      cost: 92,
      tag: "Reasoning-Fokus",
      text: "Bekannt geworden durch starke Leistungen bei Mathematik und logischem Denken.",
    },
    {
      model: "ChatGPT / GPT",
      origin: "USA",
      reasoning: 94,
      coding: 91,
      creativity: 90,
      privacy: 72,
      openness: 38,
      cost: 55,
      tag: "Allrounder",
      text: "Sehr vielseitig, kreativ und produktreif. Dafür weniger offen und je nach Modell teurer.",
    },
    {
      model: "Claude",
      origin: "USA",
      reasoning: 91,
      coding: 86,
      creativity: 88,
      privacy: 75,
      openness: 35,
      cost: 58,
      tag: "Text & Analyse",
      text: "Stark bei langen Texten, Analyse, Zusammenfassungen und sicherem Verhalten.",
    },
    {
      model: "Gemini",
      origin: "USA",
      reasoning: 88,
      coding: 84,
      creativity: 84,
      privacy: 70,
      openness: 40,
      cost: 62,
      tag: "Google-Ökosystem",
      text: "Besonders interessant durch Integration mit Google-Diensten und multimodale Funktionen.",
    },
    {
      model: "Llama",
      origin: "USA",
      reasoning: 78,
      coding: 76,
      creativity: 74,
      privacy: 82,
      openness: 90,
      cost: 86,
      tag: "Lokal & offen",
      text: "Beliebt für eigene Projekte, lokale Nutzung und Open-Source-nahe Experimente.",
    },
  ];

  const hosting: HostingOption[] = [
    {
      title: "Einfacher Laptop",
      hardware: "8–16 GB RAM, moderne CPU",
      model: "Distill 1.5B oder 7B",
      text: "Zum Ausprobieren geeignet, aber langsam. Gut, um lokale KI grundsätzlich zu verstehen.",
      level: "Basis",
    },
    {
      title: "Gaming-PC",
      hardware: "16–32 GB RAM, GPU mit 8–12 GB VRAM",
      model: "7B oder 8B quantisiert",
      text: "Für Schule, Lernen und einfache Coding-Aufgaben gut nutzbar.",
      level: "Gut",
    },
    {
      title: "Workstation",
      hardware: "64 GB RAM+, GPU mit 24 GB VRAM",
      model: "14B oder 32B quantisiert",
      text: "Deutlich angenehmer, schneller und brauchbarer für längere Aufgaben.",
      level: "Stark",
    },
    {
      title: "Server / Cloud",
      hardware: "Mehrere GPUs oder AI-Beschleuniger",
      model: "70B, R1 Vollmodell, V4-Pro",
      text: "Für sehr grosse Modelle meistens notwendig. Zuhause eher unrealistisch.",
      level: "Profi",
    },
  ];

  const timeline = [
    { year: "2023", title: "Gründung", text: "DeepSeek wird als chinesisches KI-Unternehmen gegründet." },
    { year: "2024", title: "Erste Bekanntheit", text: "Modelle für Sprache, Mathematik und Coding werden bekannter." },
    { year: "Jan. 2025", title: "DeepSeek R1", text: "R1 sorgt international für Aufmerksamkeit, besonders wegen Reasoning." },
    { year: "Apr. 2026", title: "DeepSeek V4", text: "V4-Pro und V4-Flash erweitern den Vergleich mit neueren Modellen." },
  ];

  const bestReasoning = [...models].sort((a, b) => b.reasoning - a.reasoning)[0];
  const bestCost = [...models].sort((a, b) => b.cost - a.cost)[0];
  const bestOpen = [...models].sort((a, b) => b.openness - a.openness)[0];

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <SiteHeader />
      <Hero bestReasoning={bestReasoning.model} bestCost={bestCost.model} bestOpen={bestOpen.model} />
      <QuickOverview />
      <StrengthSection strengths={strengths} />
      <ComparisonSection models={models} />
      <HostingSection hosting={hosting} />
      <CriticalSection />
      <TimelineSection timeline={timeline} />
      <PresentationSection />
      <Footer />
    </main>
  );
}

function SiteHeader() {
  const links = [
    ["Überblick", "#ueberblick"],
    ["Leistung", "#leistung"],
    ["Vergleich", "#vergleich"],
    ["Lokal hosten", "#lokal"],
    ["Fazit", "#fazit"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ee]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          DeepSeek erklärt
        </a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-black">
              {label}
            </a>
          ))}
        </nav>
        <div className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-600">
          ABU-Projekt
        </div>
      </div>
    </header>
  );
}

*** End Patch