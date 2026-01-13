"use client";

import { useState } from "react";
import Calculator from "./components/Calculator";
import PricingTable from "./components/PricingTable";
import TechnicianWaitlistModal from "./components/TechnicianWaitlistModal";
import { CheckCircle2, ShieldCheck, AlertCircle, Wrench, Zap, Ruler, MapPin, Search } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
      {/* 1. HERO */}
      <section className="pt-20 pb-16 px-4 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            <MapPin className="w-4 h-4" /> KL & Selangor
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Aircon Service Cost Checker <br className="hidden sm:block" />
            <span className="text-blue-600">– Klang Valley</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Check typical aircon service prices in Malaysia before you book.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
            <CheckCircle2 className="w-5 h-5" />
            Based on real quotes from local technicians
          </div>
        </div>
      </section>

      {/* 2. COST CHECKER (Calculator) */}
      <section className="py-12 px-4 -mt-8">
        <div className="max-w-md mx-auto relative z-10">
          <Calculator />
        </div>
      </section>

      {/* 3. TYPICAL PRICE TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Typical Price Ranges (2025/2026)</h2>
            <p className="text-slate-500 mt-2">Standard market rates for standard units.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* 4. WHY PRICES VARY */}
      <section className="py-20 bg-slate-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why do quotes vary?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem
              icon={<Zap className="w-6 h-6 text-yellow-500" />}
              title="Horsepower (HP)"
              desc="Larger units (2.0HP+) take longer to clean and use more gas."
            />
            <FeatureItem
              icon={<Search className="w-6 h-6 text-blue-500" />}
              title="Dirt Level"
              desc="Extremely dirty units may need a chemical overhaul vs normal chemical wash."
            />
            <FeatureItem
              icon={<ShieldCheck className="w-6 h-6 text-green-500" />}
              title="Brand & Parts"
              desc="Inverter models or specific brands (Daikin/Panasonic) may use different gas."
            />
            <FeatureItem
              icon={<Ruler className="w-6 h-6 text-purple-500" />}
              title="Accessibility"
              desc="High ceilings (>10ft) or difficult outdoor unit access adds labour cost."
            />
            <FeatureItem
              icon={<Wrench className="w-6 h-6 text-slate-500" />}
              title="Service Depth"
              desc="Dismantling unit for deep cleaning costs more than surface cleaning."
            />
          </div>
        </div>
      </section>

      {/* 5. AVOID OVERCHARGING */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Avoid being overcharged</h2>
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
            <p>
              The best defense against unfair pricing is <strong>information</strong>.
              Technicians sometimes markup basic services or add "mandatory" gas refills when they aren't needed.
            </p>
            <p className="mt-4">
              Use this tool to get a baseline. If a quote is significantly higher without a clear reason (like major repairs), get a second opinion.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA: CONNECT */}
      <section className="py-24 bg-blue-900 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Need a reliable technician?</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-transform hover:scale-105 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            Connect with a recommended technician
          </button>
          <p className="mt-6 text-blue-200 text-sm font-medium">
            We’re opening recommendations soon. Stay tuned.
          </p>
        </div>
      </section>

      {/* 7. DISCLAIMER */}
      <section className="py-12 bg-slate-950 text-slate-500 text-xs border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 space-y-4 text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="w-6 h-6 text-slate-700" />
          </div>
          <p>
            <strong>Disclaimer:</strong> The Aircon Service Cost Checker is an informational tool only.
            The prices shown are estimates based on collected market data in Klang Valley.
            Actual service costs will vary depending on the specific service provider, the condition of your unit, current market rates, and other factors.
          </p>
          <p>
            We do not guarantee the accuracy of these prices and are not responsible for any disputes between you and service providers.
            Always ask for a final quotation before agreeing to any work.
          </p>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-950 pb-12 pt-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Aircon Service Cost Checker (Malaysia).
          </p>
        </div>
      </footer>

      {/* MODAL */}
      <TechnicianWaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-left">
      <div className="mb-4 bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  )
}
