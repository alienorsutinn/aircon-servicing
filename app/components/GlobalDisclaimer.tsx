"use client";

import { Info, ShieldCheck, AlertCircle } from "lucide-react";

export default function GlobalDisclaimer() {
    return (
        <section className="bg-slate-50 border-t border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight">Standard Market Notice</h4>
                        <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                            <p>
                                The prices shown on this platform are <span className="text-slate-900 font-bold underline decoration-primary/30 underline-offset-4">indicative ranges only</span>. 
                                We collect current market data from various local providers in Klang Valley to give you a realistic starting point for your budget.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                <div className="flex gap-3">
                                    <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm">Final pricing is always agreed directly between you and your chosen service provider.</span>
                                </div>
                                <div className="flex gap-3">
                                    <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm">Actual costs vary based on job complexity, material choices, and site conditions.</span>
                                </div>
                            </div>
                            
                            <div className="pt-4 border-t border-slate-200">
                                <p className="text-xs text-slate-400">
                                    <Info className="w-3 h-3 inline-block mb-0.5 mr-1" />
                                    This site provides educational information to empower homeowners. We are not a service provider ourselves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
