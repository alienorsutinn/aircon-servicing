"use client";

import { useState } from "react";
import { ArrowLeft, MapPin, ShieldCheck, Zap, Search, Info, AlertCircle, Activity, LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CostChecker from "./CostChecker";
import ReviewsSection from "./ReviewsSection";
import TechnicianWaitlistModal from "./TechnicianWaitlistModal";
import ReferralModal from "./ReferralModal";
import GlobalDisclaimer from "./GlobalDisclaimer";
import { ServiceCategory } from "../types";

const icons: Record<string, LucideIcon> = { Zap, Search, MapPin, Activity, ShieldCheck, Info };

interface ServicePageLayoutProps {
    category: ServiceCategory;
}

export default function ServicePageLayout({ category }: ServicePageLayoutProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/10">
            {/* NAVIGATION */}
            <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-600 font-bold hover:text-slate-900 transition-colors group">
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Hub
                    </Link>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <MapPin className="w-3 h-3" /> {category.title} Cost Guide
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 space-y-6 md:space-y-8">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-[0.2em] bg-${category.color}-500/5 border-${category.color}-500/10 text-${category.color}-600`}>
                                <MapPin className="w-4 h-4" /> Klang Valley • 2026 Guide
                            </div>

                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900">
                                How much for <br />
                                <span className={`text-${category.color}-600`}>{category.title.toLowerCase()}?</span>
                            </h1>

                            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
                                Transparent market ranges for {category.title.toLowerCase()} in Klang Valley. Built to help locals negotiate with confidence.
                            </p>
                        </div>

                        <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square group">
                                <Image
                                    src={category.heroImage}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALCULATOR SECTION */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 pointer-events-none -skew-y-3 origin-top-right"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Market Estimator</h2>
                        <p className="text-slate-400 max-w-xl mx-auto font-medium">Get a realistic range based on current vendor data.</p>
                    </div>
                    <CostChecker category={category} />
                </div>
            </section>

            {/* PRICING TABLE */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">Detailed Breakdown.</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Common jobs and their typical market rates.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {category.items.map((item) => (
                            <div key={item.id} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-300">
                                <h3 className="text-xl font-black mb-2">{item.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 h-12 overflow-hidden">{item.description}</p>
                                <div className="text-2xl font-black text-slate-900 mb-1">
                                    RM {item.minPrice} - {item.maxPrice}
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                                    {item.unit}
                                </div>
                                <ul className="space-y-2">
                                    {item.notes.map((note, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}-500/50`} />
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PRICES VARY SECTION */}
            {category.whyPricesVary && (
                <section className="py-24 bg-slate-900 overflow-hidden text-left">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="max-w-2xl mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                                {category.whyPricesVary.title}
                            </h2>
                            <p className="text-slate-400 font-medium">Several factors can push a quote toward the higher or lower end of the range.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {category.whyPricesVary.items.map((item, i) => {
                                const Icon = icons[item.icon] || Info;
                                return (
                                    <div key={i} className="space-y-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* AVOID OVERCHARGING SECTION */}
            {category.avoidOvercharging && (
                <section className="py-32 bg-white text-center border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 space-y-12">
                        <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center mx-auto">
                            <ShieldCheck className="w-10 h-10 text-primary" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">{category.avoidOvercharging.title}</h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                {category.avoidOvercharging.body}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* REVIEWS SECTION */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
                        <div className="space-y-4">
                            <div className={`text-${category.color}-600 font-black uppercase tracking-widest text-xs`}>Community feedback</div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Trusted by Klang Valley.</h2>
                        </div>
                    </div>
                    <ReviewsSection />
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter relative z-10">
                        {category.cta?.title || "Need a reliable pro?"}
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto font-medium relative z-10 px-4">
                        {category.cta?.subtext || `We're vetting top technicians in the area. Join our early access list for ${category.title.toLowerCase()}.`}
                    </p>
                    <button
                        onClick={() => setIsReferralModalOpen(true)}
                        className="w-full md:w-auto bg-white text-primary font-black text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 rounded-2xl shadow-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 relative z-10"
                    >
                        Connect with a recommended technician
                    </button>
                </div>
            </section>

            {/* GLOBAL DISCLAIMER */}
            <GlobalDisclaimer />

            {/* FOOTER */}
            <footer className="bg-slate-950 pt-20 pb-10">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <p className="text-slate-600 text-xs leading-relaxed max-w-2xl mx-auto mb-10">
                        <AlertCircle className="w-4 h-4 inline-block mb-1 mr-1" /> Indicative prices for Klang Valley based on current market research. Actual quotes may vary based on conditions.
                    </p>
                    <div className="text-white font-black tracking-tighter text-xl italic mb-4">
                        Service<span className="text-primary tracking-tighter italic">Cost</span>Checker
                    </div>
                    <p className="text-slate-700 text-[10px] font-bold tracking-widest uppercase">
                        © 2026 KLANG VALLEY HOME SERVICES
                    </p>
                </div>
            </footer>

            <TechnicianWaitlistModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <ReferralModal
                isOpen={isReferralModalOpen}
                onClose={() => setIsReferralModalOpen(false)}
                serviceName={category.title}
            />
        </div>
    );
}
