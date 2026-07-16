import React, { useState } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

const HERO_AVATARS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face",
    delay: "0s", duration: "3.8s",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face",
    delay: "0.4s", duration: "4.2s",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=160&h=160&fit=crop&crop=face",
    delay: "0.8s", duration: "3.5s",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=face",
    delay: "1.2s", duration: "4.6s",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face",
    delay: "0.6s", duration: "3.2s",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=face",
    delay: "1.5s", duration: "4.0s",
  },
];

const OFFERS = [
  {
    id: 1,
    badge: "Offer or multiple alternative",
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    badge: "The impact of AI force digital experiences",
    title: "We talk about our weight",
  },
  {
    id: 3,
    badge: "Drive Social content via. digital",
    title: "Piloting digital confidence",
    hasGraphic: true,
  },
];

const TESTIMONIAL_AVATARS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=120&h=120&fit=crop&crop=face",
  },
];

const FOOTER_COLS = [
  { title: "Company", links: ["Home", "About", "Services", "Contact", "Blog"] },
  { title: "Terms & Policies", links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Legal"] },
  { title: "Follow Us", links: ["Twitter", "LinkedIn", "Instagram", "Dribbble"] },
  { title: "Get in Touch", links: ["hello@elementrum.co", "+91 9559427594", "123 Market St, SF", "Mon–Fri 9am–6pm"] },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function CircleImage({ src, alt = "", className = "", style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover shadow-lg border-2 border-white ${className}`}
      style={style}
    />
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold tracking-tight text-gray-900 select-none">
          Elementrum
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((l) => (
            <li
              key={l}
              className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors font-medium"
            >
              {l}
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition-all hover:scale-105 font-medium">
            Get Started
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 border-t border-gray-100" : "max-h-0"}`}>
        <ul className="px-4 py-4 flex flex-col gap-3 bg-white">
          {NAV_LINKS.map((l) => (
            <li
              key={l}
              className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer py-2 border-b border-gray-50 last:border-0 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </li>
          ))}
          <li>
            <button className="w-full mt-2 bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors font-medium">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      {/* Purple blob top-right */}
      <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-purple-400 opacity-10 blur-3xl pointer-events-none" />
      {/* Purple decorative left line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block">
        <svg width="36" height="110" viewBox="0 0 36 110">
          <path d="M0 15 Q20 55 0 95" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      {/* Purple dots top-right */}
      <div className="absolute right-4 sm:right-8 top-1/4">
        <svg width="28" height="72" viewBox="0 0 28 72">
          <circle cx="14" cy="12" r="7" fill="#a855f7" opacity="0.7" />
          <circle cx="14" cy="40" r="5" fill="#a855f7" opacity="0.4" />
          <circle cx="14" cy="63" r="3" fill="#a855f7" opacity="0.25" />
        </svg>
      </div>

      {/* Headline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] text-gray-900 tracking-tight">
          The{" "}
          <span className="relative inline-block">
            <span className="text-emerald-500 italic">thinkers</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-400 rounded-full" />
          </span>{" "}
          and
          <br className="hidden sm:block" />
          {" "}doers were{" "}
          <span className="relative inline-block">
            <span className="text-yellow-400">changing</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-300 rounded-full" />
          </span>
          <br className="hidden sm:block" />
          {" "}the{" "}
          <span className="relative inline-block">
            <span className="italic underline decoration-wavy decoration-red-400">status</span>
          </span>{" "}
          Quo with
        </h1>

        <p className="mt-5 sm:mt-6 text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          We are a team of strategists, designers and communicators. Together, we
          belive that progress only happens when you refuse play things safe.
        </p>

        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-all hover:scale-105 shadow-md">
            Discover More
          </button>
          <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-7 py-3 rounded-full text-sm font-semibold hover:border-gray-600 hover:bg-gray-50 transition-all hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating Avatar Cluster — flex row on mobile, absolute cluster on lg */}
      <div className="mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
        {/* Mobile / tablet: simple flex row with stagger */}
        <div className="flex items-end justify-center gap-2 sm:gap-3 lg:hidden flex-wrap">
          {HERO_AVATARS.map((av, i) => (
            <img
              key={av.id}
              src={av.src}
              alt={`Team member ${av.id}`}
              className="rounded-full object-cover shadow-lg border-2 border-white animate-float"
              style={{
                width: i === 2 ? "80px" : i === 0 || i === 4 ? "68px" : "56px",
                height: i === 2 ? "80px" : i === 0 || i === 4 ? "68px" : "56px",
                animationDelay: av.delay,
                animationDuration: av.duration,
                marginBottom: i % 2 === 0 ? "0px" : "12px",
              }}
            />
          ))}
        </div>

        {/* Desktop: absolute positioned cluster */}
        <div className="hidden lg:block relative max-w-2xl mx-auto h-48">
          {[
            { left: "0%", top: "30%", size: 72 },
            { left: "13%", top: "5%", size: 60 },
            { left: "26%", top: "20%", size: 88 },
            { left: "43%", top: "0%", size: 56 },
            { left: "57%", top: "18%", size: 72 },
            { left: "71%", top: "40%", size: 52 },
          ].map((pos, i) => (
            <img
              key={i}
              src={HERO_AVATARS[i].src}
              alt={`Team member ${i + 1}`}
              className="absolute rounded-full object-cover shadow-lg border-2 border-white animate-float"
              style={{
                left: pos.left,
                top: pos.top,
                width: pos.size,
                height: pos.size,
                animationDelay: HERO_AVATARS[i].delay,
                animationDuration: HERO_AVATARS[i].duration,
              }}
            />
          ))}
          {/* Connector lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 200">
            <line x1="40" y1="90" x2="110" y2="35" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="110" y1="35" x2="210" y2="65" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="210" y1="65" x2="310" y2="20" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="310" y1="20" x2="415" y2="55" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="415" y1="55" x2="510" y2="95" stroke="#e5e7eb" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TOMORROW SECTION
───────────────────────────────────────────── */
function TomorrowSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Red triangle decorations — hidden on mobile */}
      <div className="absolute bottom-6 left-6 hidden sm:block">
        <div className="w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[46px] border-b-red-400 opacity-75" />
      </div>
      <div className="absolute bottom-14 left-20 hidden sm:block">
        <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-red-300 opacity-55" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 w-full text-center md:text-left order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Tomorrow should
            <br />
            be better than{" "}
            <span className="relative inline-block">
              today
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded-full" />
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
            We are a team of strategists, designers and communicators. Together, we belive that progress only happens when you refuse play things safe.
          </p>
          <button className="mt-6 inline-flex items-center gap-1.5 text-gray-900 text-sm font-semibold border-b-2 border-gray-900 pb-0.5 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Read more <span>→</span>
          </button>
        </div>

        {/* Circle image */}
        <div className="flex-shrink-0 relative order-1 md:order-2">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-gray-100 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=640&fit=crop"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:-left-4 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 whitespace-nowrap">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-xs font-bold text-gray-700">+240 Team Members</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SEE HOW SECTION
───────────────────────────────────────────── */
function SeeHowSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Wavy red background accent */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 hidden md:block">
        <svg viewBox="0 0 1200 60" className="w-full">
          <path
            d="M0 30 Q150 0 300 30 Q450 60 600 30 Q750 0 900 30 Q1050 60 1200 30"
            stroke="#ef4444"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            See how we{" "}
            <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg">can</span>
            <br />
            help you{" "}
            <span className="relative inline-block">
              progress
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded-full" />
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
            We add a layer of fearless insights nad action that allows change makers to accelerate theirs 
            progess in areas such as brand , design digital , comms and social research.
          </p>
          <button className="mt-6 inline-flex items-center gap-1.5 text-gray-900 text-sm font-semibold border-b-2 border-gray-900 pb-0.5 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
            Read more <span>→</span>
          </button>
        </div>

        {/* Circle image */}
        <div className="flex-shrink-0 relative">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-gray-100 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=640&h=640&fit=crop"
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Purple accent blob */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-500 blur-xl opacity-40 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OFFERS SECTION
───────────────────────────────────────────── */
function OffersSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-10 sm:mb-14">
          What we{" "}
          <span className="relative inline-block">
            <span className="text-emerald-500 italic">can</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-400 rounded-full" />
          </span>
          <br />
          <span className="relative inline-block">
            offer
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded-full" />
          </span>{" "}
          you!
        </h2>

        <div>
          {OFFERS.map((offer, idx) => (
            <div key={offer.id}>
              <div className="flex items-center justify-between py-5 sm:py-6 group cursor-pointer">
                {/* Left badge — hidden on small screens */}
                <div className="hidden sm:block w-36 lg:w-44 flex-shrink-0 pr-4">
                  <span className="text-xs text-gray-400 leading-snug">{offer.badge}</span>
                </div>

                {/* Title + optional graphic */}
                <div className="flex-1 flex items-center gap-3 sm:px-4">
                  <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight">
                    {offer.title}
                  </span>
                  {offer.hasGraphic && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                      <svg viewBox="0 0 60 60" className="w-full h-full">
                        <circle cx="30" cy="30" r="28" fill="#FEF3C7" />
                        <circle cx="22" cy="22" r="10" fill="#F59E0B" opacity="0.85" />
                        <circle cx="38" cy="35" r="7" fill="#F97316" opacity="0.75" />
                        <circle cx="28" cy="40" r="5" fill="#FBBF24" opacity="0.65" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Arrow button */}
                <div className="flex-shrink-0 ml-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-200">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-white transition-colors"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS SECTION
───────────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What our customer
            <br />
            says{" "}
            <span className="relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded-full" />
            </span>
          </h2>
        </div>

        {/* Layout: scattered avatars + central card */}
        <div className="relative">
          {/* On mobile: stacked avatars row + card below */}
          {/* On desktop: side avatars with central card */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

            {/* Left avatars (desktop) / top row (mobile) */}
            <div className="flex lg:flex-col items-center gap-3 lg:gap-4 lg:w-24 lg:mr-8">
              {TESTIMONIAL_AVATARS.slice(0, 3).map((av, i) => (
                <CircleImage
                  key={av.id}
                  src={av.src}
                  alt={`Client ${av.id}`}
                  className="animate-float"
                  style={{
                    width: i === 1 ? "52px" : "42px",
                    height: i === 1 ? "52px" : "42px",
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3.5 + i * 0.4}s`,
                  }}
                />
              ))}
            </div>

            {/* Central testimonial card */}
            <div className="flex-1 w-full max-w-xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-10">
                {/* Opening quote */}
                <div className="text-5xl text-emerald-400 font-serif leading-none mb-3 select-none">"</div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Elementrum delivered the site within the time-frame as requested.
                  After launch, the client found a{" "}
                  <strong className="text-gray-900">50% increase in traffic</strong>{" "}
                  in these days since it launch. They also had an impressive ability to use
                  technologies that the company hadn't used before, which proved
                  to be easy to use and reliable.
                </p>
                <div className="text-4xl text-emerald-400 font-serif text-right leading-none mt-2 select-none">"</div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4" />

                {/* Reviewer row */}
                <div className="flex flex-wrap items-center gap-3">
                  <CircleImage
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face"
                    alt="Reviewer"
                    className="w-11 h-11"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900">Sarah Mitchell</p>
                    <p className="text-xs text-gray-400">Head of Product, Novex Inc.</p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right avatars (desktop) / bottom row (mobile) */}
            <div className="flex lg:flex-col items-center gap-3 lg:gap-4 lg:w-24 lg:ml-8">
              {TESTIMONIAL_AVATARS.slice(3).map((av, i) => (
                <CircleImage
                  key={av.id}
                  src={av.src}
                  alt={`Client ${av.id}`}
                  className="animate-float"
                  style={{
                    width: i === 1 ? "52px" : "42px",
                    height: i === 1 ? "52px" : "42px",
                    animationDelay: `${1.2 + i * 0.5}s`,
                    animationDuration: `${3.2 + i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER / NEWSLETTER SECTION
───────────────────────────────────────────── */
function FooterSection() {
  return (
    <footer className="bg-[#d4f5e2] relative overflow-hidden">
      {/* Purple blob — positioned differently per breakpoint */}
      <div className="absolute top-8 right-4 sm:right-8 lg:right-16 z-10 pointer-events-none">
        <svg width="52" height="90" viewBox="0 0 60 100" className="w-10 sm:w-12 lg:w-14">
          <ellipse cx="30" cy="28" rx="22" ry="26" fill="#a855f7" opacity="0.85" />
          <ellipse cx="30" cy="74" rx="14" ry="20" fill="#a855f7" opacity="0.5" />
        </svg>
      </div>
      {/* Small dots bottom-left */}
      <div className="absolute bottom-16 left-4 sm:left-8 pointer-events-none hidden sm:block">
        <svg width="20" height="60" viewBox="0 0 20 60">
          <circle cx="10" cy="10" r="4" fill="#a855f7" opacity="0.3" />
          <circle cx="10" cy="30" r="3" fill="#a855f7" opacity="0.2" />
          <circle cx="10" cy="47" r="2" fill="#a855f7" opacity="0.15" />
        </svg>
      </div>

      {/* Newsletter block */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-10 sm:pb-12 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto leading-relaxed">
          Stay updated with the latest news and product announcements from our team.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 bg-white rounded-full px-5 py-3 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
          />
          <button className="w-full sm:w-auto bg-gray-900 text-white text-sm px-6 py-3 rounded-full hover:bg-gray-700 transition-all hover:scale-105 font-semibold shadow-md whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer links grid */}
      <div className="border-t border-emerald-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-extrabold text-gray-800 uppercase tracking-widest mb-3 sm:mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li
                      key={link}
                      className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors break-words"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 pt-6 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <span>© 2024 daerenium. All rights reserved.</span>
            <span className="text-gray-400">Designed with ❤️ by daerenium team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT COMPONENT
───────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <TomorrowSection />
        <SeeHowSection />
        <OffersSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </div>
  );
}
