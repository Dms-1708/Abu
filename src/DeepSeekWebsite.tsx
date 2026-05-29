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

function Hero(props: { bestReasoning: string; bestCost: string; bestOpen: string }) {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-8 md:pb-16">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
            ABU-Präsentation
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            DeepSeek erklärt: Modelle, Stärken und was man lokal hosten kann
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            Eine kompakte Übersicht über DeepSeek, den Vergleich mit anderen KI-Modellen und die Frage,
            welche Modelle auf einem normalen Rechner wirklich sinnvoll sind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-black px-4 py-2 text-white">Beste Reasoning: {props.bestReasoning}</span>
            <span className="rounded-full border border-black/10 bg-white px-4 py-2">Beste Kosten: {props.bestCost}</span>
            <span className="rounded-full border border-black/10 bg-white px-4 py-2">Am offensten: {props.bestOpen}</span>
          </div>
        </div>
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Kurzfazit</p>
          <div className="mt-4 space-y-4 text-sm leading-6 text-neutral-700">
            <p>DeepSeek ist besonders stark bei logischem Denken, Mathematik und Programmieren.</p>
            <p>Viele neuere Modelle sind noch nicht endgültig einzuordnen, weil sich Leistung und Preise schnell ändern.</p>
            <p>Für das lokale Hosting sind kleine bis mittlere Modelle interessant, große Modelle brauchen viel Hardware.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickOverview() {
  return (
    <section id="ueberblick" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        <OverviewCard title="Worum geht es?" text="DeepSeek ist ein KI-Modell, das vor allem bei Reasoning und Coding auffällt." />
        <OverviewCard title="Was ist wichtig?" text="Nicht nur Leistung zählt, sondern auch Kosten, Offenheit und lokale Nutzbarkeit." />
        <OverviewCard title="Was zeigt die Seite?" text="Stärken, Vergleich, lokale Hardware-Anforderungen und eine kleine Zeitleiste." />
      </div>
    </section>
  );
}

function OverviewCard(props: { title: string; text: string }) {
  return (
    <article className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{props.title}</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-700">{props.text}</p>
    </article>
  );
}

function StrengthSection(props: { strengths: Array<{ label: string; value: number; description: string }> }) {
  return (
    <section id="leistung" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <SectionHeading title="Stärken" text="Die folgenden Werte sind eine einfache Einordnung für die Präsentation." />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {props.strengths.map((item) => (
          <article key={item.label} className="rounded-[1.5rem] border border-black/10 bg-white p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold">{item.label}</h3>
              <span className="rounded-full bg-[#f7f4ee] px-3 py-1 text-sm">{item.value}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-black/10">
              <div className="h-2 rounded-full bg-black" style={{ width: `${item.value}%` }} />
            </div>
            <p className="mt-3 text-sm text-neutral-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComparisonSection(props: { models: Model[] }) {
  return (
    <section id="vergleich" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <SectionHeading title="Vergleich" text="Ein grober Vergleich zwischen DeepSeek und anderen bekannten Modellen." />
      <div className="mt-6 grid gap-4">
        {props.models.map((model) => (
          <article key={model.model} className="rounded-[1.5rem] border border-black/10 bg-white p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{model.model}</h3>
                <p className="text-sm text-neutral-500">{model.origin}</p>
              </div>
              <span className="rounded-full bg-[#f7f4ee] px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-600">
                {model.tag}
              </span>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-700">{model.text}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
              {[
                ["Reasoning", model.reasoning],
                ["Coding", model.coding],
                ["Creativity", model.creativity],
                ["Privacy", model.privacy],
                ["Openness", model.openness],
                ["Cost", model.cost],
              ].map(([label, value]) => (
                <Metric key={label as string} label={label as string} value={value as number} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Metric(props: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-[#f7f4ee] p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">{props.label}</p>
      <p className="mt-2 text-2xl font-semibold">{props.value}</p>
    </div>
  );
}

function HostingSection(props: { hosting: HostingOption[] }) {
  return (
    <section id="lokal" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <SectionHeading title="Lokal hosten" text="Was man mit unterschiedlichen Rechnern sinnvoll ausführen kann." />
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {props.hosting.map((item) => (
          <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-white p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-neutral-500">
                {item.level}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-neutral-700">
              <p><strong>Hardware:</strong> {item.hardware}</p>
              <p><strong>Geeignet für:</strong> {item.model}</p>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CriticalSection() {
  return (
    <section id="fazit" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <SectionHeading title="Einordnung" text="Warum das Ganze nicht nur nach Benchmarks beurteilt werden sollte." />
      <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-[#f3efe7] p-6 text-sm leading-7 text-neutral-700">
        <p>
          Modelle wie DeepSeek sind spannend, aber die beste Wahl hängt immer vom Einsatzzweck ab:
          gute Leistung, wenig Kosten, lokaler Betrieb oder maximale Qualität sind nicht dasselbe Ziel.
        </p>
        <p className="mt-4">
          Für die Schule oder eine Präsentation ist ein verständlicher Überblick meist wichtiger als ein perfekter technischer Tiefgang.
        </p>
      </div>
    </section>
  );
}

function TimelineSection(props: { timeline: Array<{ year: string; title: string; text: string }> }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <SectionHeading title="Zeitleiste" text="Ein kurzer Überblick über die Entwicklung." />
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {props.timeline.map((item) => (
          <article key={item.year} className="rounded-[1.5rem] border border-black/10 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">{item.year}</p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-700">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PresentationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="rounded-[2rem] border border-black/10 bg-black px-6 py-8 text-white md:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Präsentation</p>
        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">DeepSeek ist stark, aber nicht in jedem Szenario die beste Wahl.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/80">
          Für Reasoning und Coding ist DeepSeek spannend, für lokale Nutzung braucht man passende Hardware,
          und der Vergleich mit anderen Modellen hängt immer vom Einsatz ab.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 text-center text-sm text-neutral-500">
      ABU-Projekt über DeepSeek
    </footer>
  );
}

function SectionHeading(props: { title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">{props.title}</p>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{props.title}</h2>
      <p className="mt-2 text-sm leading-7 text-neutral-700">{props.text}</p>
    </div>
  );
}