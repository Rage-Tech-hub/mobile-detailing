import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ADDONS,
  CORRECTIONS,
  EMAIL,
  FAQS,
  IG,
  IG_URL,
  PACKAGES,
  PAINS,
  PHONE,
  PHONE_HREF,
  REVIEW_SLOTS,
  SMS_HREF,
  STEPS,
  WHY,
} from "./content";

/* ------------------------------------------------------------------ */
/* Placeholder mark — no logo file was found on cleanonscene.com,      */
/* Instagram or the Google profile. Replace this SVG with the real one. */
/* ------------------------------------------------------------------ */
function Mark({ className = "", gap = "var(--color-stock)" }: { className?: string; gap?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} role="img" aria-label="Clean on the Scene">
      <path d="M22 3c0 0 13.4 13.6 13.4 22.4A13.4 13.4 0 0 1 8.6 25.4C8.6 16.6 22 3 22 3Z" fill="currentColor" />
      <path
        d="M28.6 22.9a7.6 7.6 0 1 0-2.8 5.8"
        fill="none"
        stroke={gap}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="36" cy="9.5" r="3.4" fill="var(--color-stamp)" />
    </svg>
  );
}

function SectionLabel({ children, tone = "teal" }: { children: ReactNode; tone?: "teal" | "light" }) {
  return (
    <p className={`label ${tone === "teal" ? "text-teal" : "text-tealwash"}`}>
      <span className="mr-2 inline-block h-2 w-2 translate-y-[-1px] bg-stamp" aria-hidden="true" />
      {children}
    </p>
  );
}

function Price({ v, caption }: { v: string; caption: string }) {
  return (
    <div className="w-[4.5rem] shrink-0 text-right sm:w-24">
      <span className="label mb-1 block text-muted">{caption}</span>
      <span className="num block text-[1.15rem] font-semibold tracking-tight text-ink sm:text-[1.3rem]">{v}</span>
    </div>
  );
}

/* ------------------------------- FAQ ------------------------------ */
function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-ink/15">
      <summary className="flex items-start justify-between gap-5 py-4 transition-colors hover:text-teal">
        <span className="text-[1.02rem] font-semibold leading-snug tracking-tight sm:text-[1.1rem]">{q}</span>
        <span
          className="num mt-1 shrink-0 text-xl leading-none text-stamp transition-transform duration-150 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <p className="max-w-[54ch] pb-5 pr-8 text-[0.97rem] leading-relaxed text-muted">{a}</p>
    </details>
  );
}

/* ---------------------------- Quote form -------------------------- */
function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [pkg, setPkg] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const body = `Name: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nPackage: ${pkg}\n\nI'd like a price and a time to come out.`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Quote request — ${name || "website"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full border border-ink/30 bg-stock px-3 py-3 text-[1rem] text-ink placeholder:text-muted focus:border-teal focus:outline-none";

  if (sent) {
    return (
      <div className="border border-ink/25 bg-stock p-6">
        <p className="label text-teal">Request ready</p>
        <p className="mt-3 text-[1.05rem] font-semibold leading-snug">
          Your email app should be opening with your details filled in.
        </p>
        <p className="mt-2 text-[0.97rem] text-muted">
          If nothing opened, text the same details to{" "}
          <a href={SMS_HREF} className="num font-semibold text-teal underline underline-offset-4">
            {PHONE}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="label mt-5 border border-ink/30 px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-stock"
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-ink/25 bg-stock p-5 sm:p-6" data-track="form_submit">
      <div className="flex items-baseline justify-between gap-3">
        <p className="label text-teal">Quote request</p>
        <p className="label text-muted">4 fields</p>
      </div>
      <div className="tear my-4" />
      <div className="space-y-3">
        <label className="block">
          <span className="label text-muted">Name</span>
          <input
            required
            className={`${field} mt-1.5`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Jordan P."
          />
        </label>
        <label className="block">
          <span className="label text-muted">Phone</span>
          <input
            required
            type="tel"
            className={`${field} mt-1.5 num`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="404-555-0100"
          />
        </label>
        <label className="block">
          <span className="label text-muted">Vehicle</span>
          <input
            required
            className={`${field} mt-1.5`}
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            placeholder="2019 Honda Pilot"
          />
        </label>
        <label className="block">
          <span className="label text-muted">Package</span>
          <select className={`${field} mt-1.5`} value={pkg} onChange={(e) => setPkg(e.target.value)}>
            <option value="">Not sure yet — recommend one</option>
            {PACKAGES.map((p) => (
              <option key={p.id} value={`${p.name} (${p.small}/${p.large})`}>
                {p.name} — {p.small} / {p.large}
              </option>
            ))}
            <option value="Paint correction + ceramic coating">Paint correction + ceramic coating</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-stamp px-5 py-4 text-[1rem] font-extrabold tracking-tight text-ink transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
      >
        Send my quote request
      </button>
      <p className="mt-3 text-[0.85rem] leading-snug text-muted">
        Faster answer? Text{" "}
        <a href={SMS_HREF} className="num font-semibold text-teal underline underline-offset-4">
          {PHONE}
        </a>{" "}
        a photo of the car.
      </p>
    </form>
  );
}

/* --------------------------- Sticky bar --------------------------- */
function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink/25 bg-stock transition-transform duration-200 lg:hidden ${
        show ? "translate-y-0 visible" : "invisible translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={PHONE_HREF}
          data-track="call_sticky"
          className="bg-stamp px-3 py-3.5 text-center text-[0.95rem] font-extrabold tracking-tight text-ink"
        >
          Call {PHONE}
        </a>
        <a
          href={SMS_HREF}
          data-track="sms_sticky"
          className="bg-tealdk px-3 py-3.5 text-center text-[0.95rem] font-extrabold tracking-tight text-stock"
        >
          Text for a price
        </a>
      </div>
    </div>
  );
}

/* ------------------------------ Page ------------------------------ */
export default function App() {
  return (
    <div className="min-h-screen bg-stock pb-[76px] lg:pb-0">
      {/* ---------------------------- Header --------------------------- */}
      <header className="relative z-30 border-b border-ink/20 bg-stock">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <Mark className="h-9 w-9 shrink-0 text-teal" />
            <span className="leading-none">
              <span className="block text-[0.95rem] font-extrabold tracking-tight sm:text-[1.05rem]">
                CLEAN ON THE SCENE
              </span>
              <span className="label mt-1 block text-muted">Mobile detailing · Atlanta</span>
            </span>
          </a>
          <a
            href={PHONE_HREF}
            data-track="call_header"
            className="hidden bg-stamp px-4 py-2.5 text-[0.9rem] font-extrabold tracking-tight text-ink transition-transform duration-150 hover:-translate-y-0.5 sm:block"
          >
            Call {PHONE}
          </a>
          <a href={SMS_HREF} className="label text-teal underline underline-offset-4 sm:hidden">
            Text us
          </a>
        </div>
      </header>

      {/* ----------------------------- Hero ---------------------------- */}
      <section id="top" className="relative isolate overflow-hidden bg-tealdk text-stock">
        <img
          src="images/hero-bay.jpg"
          alt="A dark sedan covered in snow foam under strip lights in a detail bay"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tealdk via-tealdk/95 to-tealdk/50 md:via-tealdk/90 md:to-tealdk/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-tealdk via-tealdk/60 to-tealdk/25 md:hidden" />

        <div className="relative mx-auto max-w-[1180px] px-5 py-14 md:py-20 lg:py-24">
          <div className="max-w-[37rem]">
            <p className="rise label text-tealwash">Mobile auto detailing · Metro Atlanta</p>

            <div className="rise mt-5 inline-block bg-stamp px-3 py-1.5" style={{ animationDelay: "60ms" }}>
              <span className="num text-[0.95rem] font-semibold tracking-tight text-ink">FROM $85 · WE COME TO YOU</span>
            </div>

            <h1
              className="rise mt-6 text-[clamp(2.3rem,7.6vw,4.4rem)] font-extrabold leading-[0.96] tracking-[-0.03em]"
              style={{ animationDelay: "120ms" }}
            >
              We come to your driveway.
              <br />
              <span className="text-tealwash">The price is on this page.</span>
            </h1>

            <p className="rise mt-5 max-w-[34rem] text-[1.05rem] leading-relaxed text-tealwash/90 sm:text-[1.15rem]" style={{ animationDelay: "180ms" }}>
              Interior, exterior and paint correction done where your car already sits — home, office or the lot
              you are parked in. Every package price is published below.
            </p>

            <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <a
                href={PHONE_HREF}
                data-track="call_hero"
                className="bg-stamp px-6 py-4 text-center text-[1.05rem] font-extrabold tracking-tight text-ink transition-transform duration-150 hover:-translate-y-0.5"
              >
                Call or text {PHONE}
              </a>
              <a
                href="#prices"
                className="border border-stock/50 px-6 py-4 text-center text-[1.05rem] font-extrabold tracking-tight text-stock transition-colors duration-150 hover:bg-stock hover:text-tealdk"
              >
                See every price
              </a>
            </div>

            <div className="rise mt-10 max-w-[36rem]" style={{ animationDelay: "300ms" }}>
              <div className="tear-light" />
              <p className="label mt-4 text-tealwash">
                Published prices — Exterior $85 · Quick Detail $125 · Maintenance $150 · Premium $175
              </p>
              <div className="pending mt-3 inline-block px-2.5 py-1">
                <span className="label">Google rating + review count — owner to supply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- Body: sticky work order rail + content --------- */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-12">
        {/* Work order rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 border border-ink/25 bg-stock2/60 p-5 shadow-[5px_5px_0_0_rgba(21,23,26,0.08)]">
            <div className="flex items-baseline justify-between">
              <p className="label text-teal">Work order</p>
              <p className="label text-muted">ATL · GA</p>
            </div>
            <div className="tear my-4" />
            <p className="label text-muted">Call or text</p>
            <a
              href={PHONE_HREF}
              data-track="call_rail"
              className="num mt-1 block text-[1.3rem] font-semibold tracking-tight text-ink underline decoration-stamp decoration-2 underline-offset-4"
            >
              {PHONE}
            </a>
            <dl className="mt-5 space-y-3">
              <div>
                <dt className="label text-muted">Service area</dt>
                <dd className="text-[0.95rem] font-semibold">Metro Atlanta · inside I-285</dd>
              </div>
              <div>
                <dt className="label text-muted">Instagram</dt>
                <dd className="text-[0.95rem] font-semibold">
                  <a href={IG_URL} className="underline underline-offset-4 hover:text-teal" target="_blank" rel="noreferrer">
                    {IG}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-muted">Email</dt>
                <dd className="break-words text-[0.95rem] font-semibold">{EMAIL}</dd>
              </div>
              <div>
                <dt className="label text-muted">Hours</dt>
                <dd className="pending mt-1 inline-block px-2 py-1">
                  <span className="label">Owner to supply</span>
                </dd>
              </div>
            </dl>
            <a
              href={PHONE_HREF}
              className="mt-5 block bg-stamp px-4 py-3 text-center text-[0.95rem] font-extrabold tracking-tight text-ink transition-transform duration-150 hover:-translate-y-0.5"
            >
              Call now
            </a>
            <p className="label mt-4 text-muted">No waiting room · we bring the shop</p>
          </div>
        </aside>

        {/* Content column */}
        <main className="min-w-0 space-y-20 md:space-y-24">
          {/* --------------------- Pain → solution --------------------- */}
          <section aria-labelledby="pain-h">
            <SectionLabel>Why people call us</SectionLabel>
            <h2
              id="pain-h"
              className="mt-4 max-w-[20ch] text-[clamp(1.7rem,4.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
            >
              Three things go wrong with mobile detailing.
            </h2>
            <ul className="mt-8 border-t border-ink/20">
              {PAINS.map((p) => (
                <li key={p.n} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 border-b border-ink/20 py-6 sm:gap-x-6">
                  <span className="num pt-1 text-[0.95rem] font-semibold text-teal">{p.n}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="text-[1.15rem] font-extrabold leading-snug tracking-tight sm:text-[1.3rem]">{p.q}</h3>
                      <span className="label text-muted">{p.tag}</span>
                    </div>
                    <p className="mt-2 max-w-[58ch] text-[1rem] leading-relaxed text-muted">{p.a}</p>
                  </div>
                </li>
              ))}
            </ul>

            <figure className="relative mt-8 overflow-hidden border border-ink/20">
              <img
                src="images/beading.jpg"
                alt="Water beading tightly on freshly waxed dark paint"
                loading="lazy"
                className="h-44 w-full object-cover sm:h-56"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-tealdk via-tealdk/45 to-transparent p-4 sm:p-6">
                <p className="label text-tealwash">
                  Carnauba wax on Maintenance · HydroShield ceramic wax on Premium
                </p>
              </figcaption>
            </figure>
          </section>

          {/* ------------------------ Service menu ---------------------- */}
          <section id="prices" aria-labelledby="prices-h" className="scroll-mt-6">
            <SectionLabel>Service menu · small / large</SectionLabel>
            <h2
              id="prices-h"
              className="mt-4 max-w-[18ch] text-[clamp(1.7rem,4.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
            >
              The whole price list. Nothing hidden.
            </h2>

            <div className="mt-7 border border-ink/30 bg-stock shadow-[8px_8px_0_0_rgba(21,23,26,0.10)]">
              <div className="flex items-end justify-between gap-4 bg-ink px-4 py-3.5 text-stock sm:px-6">
                <div>
                  <p className="label text-stamp">Detail packages</p>
                  <p className="mt-1 text-[1.05rem] font-extrabold tracking-tight">Prices from cleanonscene.com</p>
                </div>
                <Mark className="hidden h-8 w-8 text-stock sm:block" gap="var(--color-ink)" />
              </div>

              <ul className="px-4 sm:px-6">
                {PACKAGES.map((p) => (
                  <li key={p.id} className="border-b border-ink/15 py-5 last:border-b-0">
                    <div className="sm:flex sm:items-start sm:justify-between sm:gap-6">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <h3 className="text-[1.25rem] font-extrabold tracking-tight sm:text-[1.4rem]">{p.name}</h3>
                          <span className="leader hidden sm:block" />
                          <span className="label text-muted">{p.time}</span>
                        </div>
                        <ul className="mt-2.5 space-y-1">
                          {p.lines.map((l) => (
                            <li key={l} className="flex gap-2 text-[0.95rem] leading-snug text-muted">
                              <span className="text-teallt" aria-hidden="true">
                                —
                              </span>
                              <span>{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-3 flex gap-4 sm:mt-0 sm:gap-5">
                        <Price v={p.small} caption="Small" />
                        <Price v={p.large} caption="Large" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Paint correction */}
              <div className="border-t-2 border-dashed border-ink/30 bg-stock2/70 px-4 py-5 sm:px-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[1.15rem] font-extrabold tracking-tight sm:text-[1.3rem]">
                    Paint correction + ceramic coating
                  </h3>
                  <span className="label text-muted">6–10+ hrs</span>
                </div>
                <p className="mt-1.5 text-[0.95rem] text-muted">
                  Includes exterior detail and clay bar for prep.
                </p>
                <ul className="mt-4 space-y-3">
                  {CORRECTIONS.map((c) => (
                    <li key={c.name} className="flex flex-wrap items-baseline">
                      <span className="text-[1rem] font-semibold tracking-tight">{c.name}</span>
                      <span className="leader" />
                      <span className="flex gap-4">
                        <Price v={c.small} caption="Small" />
                        <Price v={c.large} caption="Large" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add-ons */}
              <div className="border-t border-ink/20 px-4 py-5 sm:px-6">
                <h3 className="label text-teal">Add-ons</h3>
                <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {ADDONS.map((a) => (
                    <li key={a.name} className="flex items-baseline">
                      <span className="text-[0.97rem]">{a.name}</span>
                      <span className="leader" />
                      <span className="num text-[0.97rem] font-semibold">{a.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fine print */}
              <div className="border-t border-ink/20 bg-stock2/70 px-4 py-4 sm:px-6">
                <ul className="num space-y-1.5 text-[0.85rem] leading-relaxed text-muted">
                  <li>* Prices may vary based on the condition of the vehicle.</li>
                  <li>* +$2 per mile outside Metro Atlanta (I-285).</li>
                  <li>* +3% processing fee for credit / debit — cash preferred.</li>
                </ul>
              </div>

              {/* Orange stub */}
              <div className="flex flex-col items-center gap-3 bg-stamp px-4 py-4 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
                <p className="label text-ink">Not sure which price is yours? Text the year, make and model.</p>
                <a
                  href={SMS_HREF}
                  data-track="sms_stub"
                  className="num text-[1.05rem] font-extrabold tracking-tight text-ink underline decoration-2 underline-offset-4"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </section>

          {/* ------------------------ Social proof ---------------------- */}
          <section aria-labelledby="proof-h">
            <SectionLabel>Proof</SectionLabel>
            <h2
              id="proof-h"
              className="mt-4 max-w-[22ch] text-[clamp(1.7rem,4.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
            >
              What customers say, in their own words.
            </h2>

            <div className="pending mt-6 inline-block px-3 py-1.5">
              <span className="label">No review text supplied yet — paste real Google reviews below</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {REVIEW_SLOTS.map((s) => (
                <figure
                  key={s.id}
                  className="flex min-h-[190px] flex-col justify-between border-2 border-dashed border-hair/70 bg-stock2/50 p-4"
                >
                  <div>
                    <span className="label text-stampink">{s.label}</span>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                      Paste the review exactly as it appears on Google, with the reviewer’s first name and date.
                    </p>
                  </div>
                  <figcaption className="label mt-4 text-muted">★★★★★ · source: Google Business Profile</figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-6 border border-ink/25 bg-tealwash/60 p-5">
              <p className="label text-teal">What we can prove today</p>
              <ul className="mt-3 space-y-2 text-[0.98rem] leading-relaxed">
                <li>
                  <strong>Full price list published</strong> on our own site — packages from $85 to $1,000.
                </li>
                <li>
                  <strong>Every fee disclosed</strong> — condition, $2 per mile past I-285, 3% on cards.
                </li>
                <li>
                  <strong>Time estimate on every package</strong>, from 1.5 hours to 10+ hours.
                </li>
              </ul>
            </div>
          </section>

          {/* ------------------------ Why choose us --------------------- */}
          <section aria-labelledby="why-h">
            <SectionLabel>Why choose us</SectionLabel>
            <h2
              id="why-h"
              className="mt-4 max-w-[20ch] text-[clamp(1.7rem,4.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
            >
              You know the cost before we start.
            </h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <ul className="border-t border-ink/20">
                {WHY.map((w) => (
                  <li key={w.t} className="border-b border-ink/20 py-4">
                    <h3 className="text-[1.05rem] font-extrabold tracking-tight">{w.t}</h3>
                    <p className="mt-1.5 text-[0.97rem] leading-relaxed text-muted">{w.d}</p>
                  </li>
                ))}
              </ul>
              <figure className="overflow-hidden border border-ink/20">
                <img
                  src="images/interior.jpg"
                  alt="A freshly detailed car interior seen from the open driver door"
                  loading="lazy"
                  className="h-full min-h-[240px] w-full object-cover"
                />
              </figure>
            </div>
          </section>

          {/* ------------------------ How it works ---------------------- */}
          <section aria-labelledby="how-h">
            <SectionLabel>How it works</SectionLabel>
            <h2 id="how-h" className="mt-4 text-[clamp(1.7rem,4.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
              Three steps.
            </h2>
            <ol className="mt-7 grid gap-4 sm:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="border border-ink/25 bg-stock2/60 p-5">
                  <span className="num inline-block bg-stamp px-2 py-1 text-[0.9rem] font-semibold text-ink">{s.n}</span>
                  <h3 className="mt-4 text-[1.1rem] font-extrabold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">{s.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ------------------------ Risk reversal --------------------- */}
          <section aria-labelledby="risk-h" className="border-2 border-ink bg-stock2/60 p-5 sm:p-7">
            <SectionLabel>Risk reversal</SectionLabel>
            <h2 id="risk-h" className="mt-4 text-[clamp(1.5rem,4vw,2.2rem)] font-extrabold leading-tight tracking-[-0.02em]">
              What is in writing before we touch the car.
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "The package price, printed on this page.",
                "The time range for that package, printed next to it.",
                "The only three extra charges: condition, $2 per mile past I-285, 3% on cards.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[1rem] leading-snug">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-teal" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="pending mt-6 p-4">
              <p className="label">Satisfaction guarantee — owner approval needed</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed">
                If you offer a redo or money-back promise, put the exact wording here. Do not launch with a
                guarantee nobody has signed off on.
              </p>
            </div>
          </section>

          {/* ---------------------------- FAQ --------------------------- */}
          <section aria-labelledby="faq-h">
            <SectionLabel>Questions</SectionLabel>
            <h2 id="faq-h" className="mt-4 text-[clamp(1.7rem,4.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
              Straight answers.
            </h2>
            <div className="mt-6 border-t border-ink/20">
              {FAQS.map((f) => (
                <Faq key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
            <p className="mt-5 text-[0.95rem] text-muted">
              Still unsure? Text{" "}
              <a href={SMS_HREF} className="num font-semibold text-teal underline underline-offset-4">
                {PHONE}
              </a>{" "}
              and we will answer before you book.
            </p>
          </section>
        </main>
      </div>

      {/* ---------------------- Service area band ---------------------- */}
      <section aria-labelledby="area-h" className="relative isolate mt-20 overflow-hidden md:mt-24">
        <img
          src="images/driveway.jpg"
          alt="A driveway in Atlanta with a portable detailing setup beside an SUV"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tealdk via-tealdk/90 to-tealdk/40" />
        <div className="relative mx-auto max-w-[1180px] px-5 py-14 md:py-20">
          <SectionLabel tone="light">Service area</SectionLabel>
          <h2
            id="area-h"
            className="mt-4 max-w-[16ch] text-[clamp(1.7rem,4.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-stock"
          >
            Wherever the car is parked in Atlanta.
          </h2>
          <p className="mt-4 max-w-[46ch] text-[1.02rem] leading-relaxed text-tealwash">
            We work across Metro Atlanta, inside I-285. Past the perimeter we come out for $2 per mile. Home,
            office, apartment lot — the car does not move.
          </p>
          <p className="label mt-6 text-tealwash">Clean on the Scene · Atlanta, GA · {PHONE}</p>
        </div>
      </section>

      {/* --------------------------- Final CTA ------------------------- */}
      <section aria-labelledby="cta-h" className="bg-tealdk text-stock">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionLabel tone="light">Book it</SectionLabel>
            <h2
              id="cta-h"
              className="mt-4 text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
            >
              Call or text. We will tell you the price before we drive out.
            </h2>
            <div className="tear-light mt-7" />
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="label text-tealwash">Business</dt>
                <dd className="mt-1 text-[1.1rem] font-extrabold tracking-tight">Clean on the Scene</dd>
              </div>
              <div>
                <dt className="label text-tealwash">Call or text</dt>
                <dd className="mt-1">
                  <a
                    href={PHONE_HREF}
                    data-track="call_footer"
                    className="num text-[1.25rem] font-semibold text-stock underline decoration-stamp decoration-2 underline-offset-4"
                  >
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-tealwash">Email</dt>
                <dd className="mt-1 break-words text-[1rem] font-semibold">{EMAIL}</dd>
              </div>
              <div>
                <dt className="label text-tealwash">Instagram</dt>
                <dd className="mt-1 text-[1rem] font-semibold">
                  <a href={IG_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                    {IG}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-tealwash">Service area</dt>
                <dd className="mt-1 text-[1rem] font-semibold">Metro Atlanta, inside I-285</dd>
              </div>
              <div>
                <dt className="label text-tealwash">Hours</dt>
                <dd className="pending mt-1 inline-block px-2 py-1">
                  <span className="label">Match Google profile</span>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label text-tealwash">Address on Google profile</dt>
                <dd className="pending mt-1 inline-block px-2 py-1">
                  <span className="label">Copy exactly from the Google Business Profile</span>
                </dd>
              </div>
            </dl>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ---------------------------- Footer --------------------------- */}
      <footer className="border-t border-stock/20 bg-tealdk pb-10 text-tealwash">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="tear-light" />
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Mark className="h-8 w-8 text-stock" gap="var(--color-tealdk)" />
              <span className="leading-none">
                <span className="block text-[0.95rem] font-extrabold tracking-tight text-stock">
                  CLEAN ON THE SCENE
                </span>
                <span className="label mt-1 block">Mobile detailing · Atlanta, GA</span>
              </span>
            </div>
            <div className="label flex flex-wrap gap-x-5 gap-y-2">
              <a href={PHONE_HREF} className="text-stock underline underline-offset-4">
                {PHONE}
              </a>
              <a href={IG_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                {IG}
              </a>
              <a href="https://www.cleanonscene.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                cleanonscene.com
              </a>
            </div>
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.85rem] leading-relaxed">
            Prices, package inclusions, fees and contact details on this page are taken from cleanonscene.com.
            Items shown in dashed orange boxes are placeholders that must be supplied or approved before this
            page goes live.
          </p>
        </div>
      </footer>

      <StickyBar />
    </div>
  );
}
