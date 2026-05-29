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

function Hero({ bestReasoning, bestCost, bestOpen }: { bestReasoning: string; bestCost: string; bestOpen: string }) {
  return (
    <section id="top" className="border-b border-black/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            China · KI · Modellvergleich
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl">
            Was DeepSeek wirklich spannend macht.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Eine sachliche Übersicht zu DeepSeek, seiner Leistung, dem Vergleich mit anderen KI-Modellen und der Frage, ob man DeepSeek auch lokal auf dem eigenen Computer betreiben kann.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#vergleich" className="rounded-full bg-neutral-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-neutral-700">
              Modelle vergleichen
            </a>
            <a href="#lokal" className="rounded-full border border-black/15 bg-white px-6 py-3 text-center text-sm font-medium transition hover:bg-neutral-100">
              Lokal hosten ansehen
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-sm">
          <div className="rounded-[1.5rem] bg-[#202020] p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-neutral-400">Kurzprofil</p>
                <h2 className="mt-1 text-2xl font-semibold">DeepSeek</h2>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-200">China</span>
            </div>
            <div className="mt-6 space-y-5">
              <ProfileLine label="Stark bei" value="Reasoning, Mathe, Coding" />
              <ProfileLine label="Bekannt durch" value="DeepSeek R1" />
              <ProfileLine label="Neu im Vergleich" value="DeepSeek V4-Pro & V4-Flash" />
              <ProfileLine label="Kritisch" value="Datenschutz, Zensur, Transparenz" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <StatCard label="Beste Logik" value={bestReasoning} />
            <StatCard label="Bester Preis" value={bestCost} />
            <StatCard label="Offenheit" value={bestOpen} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-5">
      <span className="text-sm text-neutral-400">{label}</span>
      <span className="max-w-[220px] text-right text-sm font-medium text-neutral-100">{value}</span>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[#fbfaf7] p-4">
      <div className="text-xs uppercase tracking-wide text-neutral-500">{label}</div>
      <div className="mt-2 text-sm font-semibold leading-5">{value}</div>
    </div>
  );
}

function QuickOverview() {
  const cards = [
    {
      title: "Was ist DeepSeek?",
      text: "Ein chinesisches KI-Unternehmen, das Sprachmodelle entwickelt. Diese Modelle können schreiben, erklären, programmieren und Aufgaben logisch lösen.",
    },
    {
      title: "Warum wurde es bekannt?",
      text: "DeepSeek R1 wurde international diskutiert, weil es starke Reasoning-Leistung mit guter Preis-Leistung verbindet.",
    },
    {
      title: "Warum ist es politisch relevant?",
      text: "DeepSeek zeigt, dass China bei künstlicher Intelligenz nicht nur mitnutzt, sondern eigene leistungsfähige Modelle entwickelt.",
    },
  ];

  return (
    <section id="ueberblick" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionTitle eyebrow="Überblick" title="DeepSeek in einfachen Worten" text="Für die Präsentation reicht eine klare Einordnung: DeepSeek ist technisch interessant, wirtschaftlich relevant und gesellschaftlich kritisch zu betrachten." />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-4 leading-7 text-neutral-600">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function StrengthSection({ strengths }: { strengths: { label: string; value: number; description: string }[] }) {
  return (
    <section id="leistung" className="border-y border-black/10 bg-[#ebe6dc]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle eyebrow="Leistung" title="Wo DeepSeek besonders auffällt" text="Die Diagramme sind bewusst vereinfacht. Sie zeigen keine exakten Benchmarks, sondern helfen dabei, die Stärken für eine Präsentation verständlich zu visualisieren." />
        <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm">
          <div className="space-y-7">
            {strengths.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-end justify-between gap-5">
                  <div>
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-sm text-neutral-500">{item.description}</div>
                  </div>
                  <div className="text-sm font-medium text-neutral-600">{item.value}/100</div>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full rounded-full bg-neutral-900" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection({ models }: { models: Model[] }) {
  return (
    <section id="vergleich" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionTitle eyebrow="Vergleich" title="DeepSeek vs. andere KI-Modelle" text="Kein Modell ist überall am besten. Der Vergleich zeigt, wo DeepSeek stark wirkt und wo andere Modelle Vorteile haben." />

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {models.slice(0, 3).map((model) => (
          <FeaturedModel key={model.model} model={model} />
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full text-left text-sm">
            <thead className="border-b border-black/10 bg-[#f0ede7] text-neutral-700">
              <tr>
                <th className="px-5 py-4 font-semibold">Modell</th>
                <th className="px-5 py-4 font-semibold">Land</th>
                <th className="px-5 py-4 font-semibold">Logik</th>
                <th className="px-5 py-4 font-semibold">Code</th>
                <th className="px-5 py-4 font-semibold">Kreativität</th>
                <th className="px-5 py-4 font-semibold">Vertrauen</th>
                <th className="px-5 py-4 font-semibold">Offenheit</th>
                <th className="px-5 py-4 font-semibold">Preis</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.model} className="border-b border-black/10 last:border-b-0">
                  <td className="px-5 py-5 align-top">
                    <div className="font-semibold">{model.model}</div>
                    <div className="mt-1 text-xs leading-5 text-neutral-500">{model.text}</div>
                  </td>
                  <td className="px-5 py-5 align-top text-neutral-700">{model.origin}</td>
                  <ScoreCell value={model.reasoning} />
                  <ScoreCell value={model.coding} />
                  <ScoreCell value={model.creativity} />
                  <ScoreCell value={model.privacy} />
                  <ScoreCell value={model.openness} />
                  <ScoreCell value={model.cost} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-500">
        Hinweis: Die Werte sind didaktisch vereinfacht und dienen der verständlichen Einordnung. Echte Benchmarks ändern sich je nach Version, Test und Zeitpunkt.
      </p>
    </section>
  );
}

function FeaturedModel({ model }: { model: Model }) {
  return (
    <article className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#ebe6dc] px-3 py-1 text-xs font-medium text-neutral-700">{model.tag}</span>
        <span className="text-sm text-neutral-500">{model.origin}</span>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{model.model}</h3>
      <p className="mt-3 min-h-16 leading-7 text-neutral-600">{model.text}</p>
      <div className="mt-6 grid grid-cols-3 gap-3">
        <SmallMetric label="Logik" value={model.reasoning} />
        <SmallMetric label="Code" value={model.coding} />
        <SmallMetric label="Preis" value={model.cost} />
      </div>
    </article>
  );
}

function SmallMetric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-[#f7f4ee] p-3">
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function ScoreCell({ value }: { value: number }) {
  return (
    <td className="px-5 py-5 align-top">
      <div className="flex min-w-20 items-center gap-2">
        <span className="w-8 text-sm font-medium text-neutral-700">{value}</span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
          <div className="h-full rounded-full bg-neutral-900" style={{ width: `${value}%` }} />
        </div>
      </div>
    </td>
  );
}

function HostingSection({ hosting }: { hosting: HostingOption[] }) {
  return (
    <section id="lokal" className="border-y border-black/10 bg-[#202020] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">Lokal hosten</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Kann DeepSeek auf dem eigenen PC laufen?
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Ja, aber meistens nur in kleineren Varianten. Die grossen Modelle brauchen sehr viel Speicher, starke Grafikkarten oder Cloud-Server.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-neutral-300">
              In der Praxis nutzt man lokal oft komprimierte Distill-Modelle über Tools wie Ollama oder LM Studio. Das volle R1-Modell oder V4-Pro sind für normale Laptops nicht realistisch.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {hosting.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">{item.level}</span>
                </div>
                <p className="text-sm text-neutral-400">{item.hardware}</p>
                <div className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                  <p><span className="font-medium text-white">Modell:</span> {item.model}</p>
                  <p><span className="font-medium text-white">Einschätzung:</span> {item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CriticalSection() {
  const points = [
    { title: "Datenschutz", text: "Welche Daten werden gespeichert, wo werden sie verarbeitet und wer kann darauf zugreifen?" },
    { title: "Zensur", text: "Bei sensiblen politischen Themen können Antworten eingeschränkt oder einseitig sein." },
    { title: "Transparenz", text: "Nicht alle Informationen zu Training, Kontrolle und staatlichem Einfluss sind leicht überprüfbar." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionTitle eyebrow="Kritische Fragen" title="Was sollte man hinterfragen?" text="Technisch starke KI ist nicht automatisch unproblematisch. Genau deshalb ist DeepSeek ein gutes Thema für eine ABU-Präsentation." />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight">{point.title}</h3>
            <p className="mt-4 leading-7 text-neutral-600">{point.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimelineSection({ timeline }: { timeline: { year: string; title: string; text: string }[] }) {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle eyebrow="Entwicklung" title="Kurze Timeline" text="Die wichtigsten Stationen von DeepSeek im Überblick." />
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
          {timeline.map((item) => (
            <article key={item.year} className="rounded-[1.5rem] border border-black/10 bg-[#fbfaf7] p-6">
              <div className="text-sm font-medium uppercase tracking-wide text-neutral-500">{item.year}</div>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PresentationSection() {
  return (
    <section id="fazit" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">Fazit</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Kurz gesagt</h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-neutral-700">
              DeepSeek zeigt, dass China im Bereich künstliche Intelligenz schnell aufgeholt hat. R1 wurde vor allem wegen Reasoning und Mathematik bekannt. V4 erweitert den Vergleich mit stärkerem Coding und grossem Kontextfenster. Gleichzeitig bleiben Datenschutz, Zensur und Transparenz wichtige offene Fragen.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3">
              <ConclusionPoint label="Chance" text="Mehr Wettbewerb und günstigere KI" />
              <ConclusionPoint label="Stärke" text="Reasoning, Mathe und Coding" />
              <ConclusionPoint label="Risiko" text="Daten, Kontrolle und Neutralität" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConclusionPoint({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl bg-[#f7f4ee] p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">{label}</div>
      <div className="mt-2 text-sm font-semibold leading-5">{text}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 px-5 py-8 text-center text-sm text-neutral-500 md:px-8">
      DeepSeek erklärt · Schulprojekt / ABU · Vergleichswerte didaktisch vereinfacht
    </footer>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{text}</p>
    </div>
  );
}
