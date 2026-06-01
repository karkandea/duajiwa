import { useState } from "react";
import { Search, Heart, Eye, Star, ChevronDown, Menu, X } from "lucide-react";

const TEMPLATES = [
  {
    id: 1,
    title: "Sakura Garden",
    designer: "Dua Jiwa Studio",
    style: "Floral · Soft",
    price: "Rp 89.000",
    likes: 243,
    views: "4.1k",
    rating: 4.9,
    src: "/templates/sakura-garden.jpg",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "Minimalist Ivory",
    designer: "Dua Jiwa Studio",
    style: "Minimal · Elegant",
    price: "Rp 79.000",
    likes: 187,
    views: "3.2k",
    rating: 4.8,
    src: "/templates/minimalist-ivory.jpg",
    tag: "New",
  },
];

const CATEGORIES = [
  "All",
  "Floral",
  "Minimalist",
  "Rustic",
  "Modern",
  "Javanese",
  "Sundanese",
  "Batak",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-display text-rose-600 tracking-tight leading-none">
            dua<span className="text-stone-800">jiwa</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
          <a href="#" className="hover:text-rose-600 transition-colors">
            Explore
          </a>
          <a href="#" className="hover:text-rose-600 transition-colors">
            Designers
          </a>
          <a href="#" className="hover:text-rose-600 transition-colors">
            How It Works
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-stone-600 hover:text-rose-600 transition-colors px-4 py-2">
            Sign in
          </button>
          <button className="text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full transition-colors">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-stone-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-rose-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-stone-600">
          <a href="#">Explore</a>
          <a href="#">Designers</a>
          <a href="#">How It Works</a>
          <hr className="border-rose-100" />
          <a href="#">Sign in</a>
          <button className="w-full bg-rose-600 text-white py-2.5 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-rose-500 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full mb-6">
            ✦ Wedding Invitation Templates
          </span>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.1] text-stone-900 mb-6">
            Beautiful templates for your{" "}
            <span className="text-rose-600 italic">most special day</span>
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-md">
            Discover handcrafted digital wedding invitations. Customize,
            download, and send — in minutes.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm">
              <Heart size={16} fill="white" /> Browse Templates
            </button>
            <button className="flex items-center gap-2 border border-stone-200 hover:border-rose-300 text-stone-700 font-semibold px-7 py-3.5 rounded-full transition-colors text-sm">
              How It Works <ChevronDown size={14} />
            </button>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <div className="flex -space-x-2">
              {["FF6B6B", "FF8E53", "FFCC5C", "88D8B0"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  style={{ background: `#${c}` }}
                />
              ))}
            </div>
            <p className="text-sm text-stone-500">
              <span className="font-semibold text-stone-800">2,400+</span>{" "}
              couples trusted us
            </p>
          </div>
        </div>

        <div className="relative hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-xl aspect-video overflow-hidden rounded-2xl border border-rose-100 bg-stone-100 shadow-xl">
            <video
              className="h-full w-full object-cover"
              src="/video-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Wedding invitation preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <section className="sticky top-16 z-40 bg-white border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            type="text"
            placeholder="Search wedding templates..."
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-full text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`whitespace-nowrap text-xs font-medium px-4 py-2 rounded-full border transition-colors ${
                cat === "All"
                  ? "bg-rose-600 text-white border-rose-600"
                  : "bg-white text-stone-600 border-stone-200 hover:border-rose-300 hover:text-rose-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateCard({ template }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[3/4] bg-gradient-to-br from-rose-50 to-amber-50 overflow-hidden">
        {template.src ? (
          <img
            src={template.src}
            alt={template.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="text-5xl">💌</span>
            <p className="text-xs text-stone-400 font-medium">
              {template.title}
            </p>
          </div>
        )}

        {template.tag && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-rose-600 border border-rose-100">
            {template.tag}
          </span>
        )}

        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="bg-white text-stone-800 text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-rose-600 hover:text-white transition-colors">
            Preview
          </button>
          <button className="bg-rose-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-rose-700 transition-colors">
            Get Template
          </button>
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-rose-50"
        >
          <Heart
            size={14}
            className={liked ? "text-rose-600 fill-rose-600" : "text-stone-400"}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-stone-800 text-sm leading-tight">
            {template.title}
          </h3>
          <span className="text-sm font-bold text-rose-600 whitespace-nowrap">
            {template.price}
          </span>
        </div>

        <p className="text-xs text-stone-400 mb-3">{template.style}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">DJ</span>
            </div>
            <span className="text-xs text-stone-500">{template.designer}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-400">
            <span className="flex items-center gap-1">
              <Heart size={11} /> {template.likes}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={11} /> {template.views}
            </span>
            <span className="flex items-center gap-1 text-amber-500">
              <Star size={11} fill="currentColor" /> {template.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display text-3xl text-stone-800">
            Featured Templates
          </h2>
          <p className="text-stone-400 text-sm mt-1">
            {TEMPLATES.length} templates available
          </p>
        </div>
        <select className="text-sm text-stone-600 border border-stone-200 rounded-full px-4 py-2 focus:outline-none focus:border-rose-300 bg-white">
          <option>Popular</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {TEMPLATES.map((t) => (
          <TemplateCard key={t.id} template={t} />
        ))}

        {Array.from({ length: Math.max(0, 10 - TEMPLATES.length) }).map(
          (_, i) => (
            <div
              key={`empty-${i}`}
              className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-stone-50 to-rose-50 border border-dashed border-stone-200 flex flex-col items-center justify-center gap-2 text-stone-300"
            >
              <span className="text-3xl">+</span>
              <span className="text-xs">Coming soon</span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl text-stone-700">
          dua<span className="text-rose-600">jiwa</span>
        </span>
        <p className="text-xs text-stone-400">
          © 2026 Duajiwa. Crafted with ♥ for Indonesian couples.
        </p>
        <div className="flex gap-5 text-xs text-stone-400">
          <a href="#" className="hover:text-rose-600 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-rose-600 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-rose-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <TemplateGrid />
      <Footer />
    </div>
  );
}
