"use client";

import { useState } from "react";
import ServiceCard from "./components/ServiceCard";
import TechnicianWaitlistModal from "./components/TechnicianWaitlistModal";
import ReferralModal from "./components/ReferralModal";
import GlobalDisclaimer from "./components/GlobalDisclaimer";
import { ShieldCheck, MapPin, Search, Activity } from "lucide-react";
import { SERVICES } from "./data/services";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-primary/10">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-4 h-4" /> Klang Valley Focus
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Check Typical Home Service <br className="hidden md:block" />
            Costs in Malaysia
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Avoid overcharging. See realistic price ranges for common home repairs and maintenance before you book a technician.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-16 md:py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 md:mb-12 gap-4 border-b border-slate-200 pb-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Service Cost Checkers</h2>
              <p className="text-slate-500 mt-2">Select a service to view typical Klang Valley market rates.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((category) => (
              <ServiceCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-16 md:py-24 px-4 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center mb-12 md:mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">We Research</h3>
              <p className="text-slate-500 leading-relaxed">
                We collect publicly available pricing and interview local vendors to establish current market benchmarks.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">We Show Ranges</h3>
              <p className="text-slate-500 leading-relaxed">
                Instead of fixed prices, we show realistic ranges based on job complexity and unit types in Klang Valley.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">You Decide</h3>
              <p className="text-slate-500 leading-relaxed">
                Armed with market knowledge, you can negotiate with technicians confidently and avoid being overcharged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL DISCLAIMER */}
      <GlobalDisclaimer />

      {/* 5. HOMEOWNER CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Need a professional right now?</h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium px-4">
            We&apos;re currently vetting the best local technicians in Klang Valley to ensure you get fair prices and quality work.
          </p>
          <button
            onClick={() => setIsReferralModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white font-black text-xl px-12 py-6 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            Connect with a recommended technician
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-900 font-black tracking-tighter text-xl italic">
            Service<span className="text-primary italic">Checker</span>
          </div>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
            © 2026 Klang Valley Service Cost Guide
          </p>
          <div className="flex gap-8">
            <button onClick={() => setIsModalOpen(true)} className="text-slate-500 hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">
              Technician Waitlist
            </button>
          </div>
        </div>
      </footer>

      <TechnicianWaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <ReferralModal
        isOpen={isReferralModalOpen}
        onClose={() => setIsReferralModalOpen(false)}
        serviceName="home services"
      />
    </div>
  );
}
