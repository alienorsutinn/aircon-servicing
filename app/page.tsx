import Calculator from "./components/Calculator";
import PricingTable from "./components/PricingTable";
import { CheckCircle2, ShieldCheck, MapPin, AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-lg p-1.5">
                <span className="text-white font-bold text-lg leading-none">KL</span>
              </div>
              <span className="text-lg font-bold text-slate-800 tracking-tight">AirconRates</span>
            </div>
            <div className="text-sm font-medium text-slate-500 hidden sm:block">
              Updated for 2026
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">

            {/* Hero Text */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold border border-blue-200">
                <MapPin className="w-3.5 h-3.5" />
                Klang Valley & Selangor
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Stop Overpaying for <br className="hidden md:block" />
                <span className="text-blue-600">Aircon Servicing</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                Instantly check fair market rates for chemical wash, gas top-up, and normal servicing. Don't get quoted high prices again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Verified Market Data</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Unbiased Estimates</span>
                </div>
              </div>
            </div>

            {/* Component */}
            <div className="w-full md:w-[420px] relative z-10 mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 blur-2xl opacity-10 rounded-3xl"></div>
              <Calculator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Info Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Typical Aircon Service Rates</h2>
            <p className="text-lg text-slate-600">
              We aggregated 2025/2026 pricing from 50+ service providers in Klang Valley.
              These are estimates for standard residential units.
            </p>
          </div>

          <div className="mb-16">
            <PricingTable />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why prices vary</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Technicians often quote a base price, but the final cost depends on the condition of your unit and logistics.
              </p>
              <ul className="space-y-4">
                {[
                  "Gas Type: R22 (older) is becoming rarer and more expensive than R32/R410A.",
                  "Accessibility: High ceilings (>10ft) may require scaffolding (+RM50-100).",
                  "Location: Technician transport fees apply if outside their coverage area."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Types Explained</h3>
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" /> Normal Service
                  </h4>
                  <p className="text-sm text-slate-600">Basic cleaning of filters and cover. Recommended every 3-4 months.</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" /> Chemical Wash
                  </h4>
                  <p className="text-sm text-blue-800/80">Deep cleaning with chemicals to remove mold/jelly. Recommended once a year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer / Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-6 text-yellow-500/90 font-medium">
            <AlertCircle className="w-4 h-4" />
            <span className="text-yellow-100">Disclaimer</span>
          </div>
          <p className="max-w-2xl mx-auto mb-8 leading-relaxed opacity-80">
            The prices shown on this website are estimates based on market research in the Klang Valley area as of 2025/2026.
            Actual costs may vary depending on the specific condition of your unit, location logistics, and the service provider you choose.
            We are not a service provider and do not guarantee these rates.
          </p>
          <div className="text-slate-600">
            © {new Date().getFullYear()} AirconRates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
