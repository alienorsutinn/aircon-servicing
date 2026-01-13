"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { SERVICES } from "../data/services";

interface AIDiagnosticProps {
    onDiagnosticComplete: (serviceId: string, min: number, max: number, reasoning: string) => void;
}

export default function AIDiagnostic({ onDiagnosticComplete }: AIDiagnosticProps) {
    const [problem, setProblem] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!problem.trim() || problem.length < 10) return;

        setIsAnalyzing(true);

        // Simulated LLM Processing
        // In a real app, this would be a fetch to /api/diagnose
        setTimeout(() => {
            const input = problem.toLowerCase();
            let matchedService = null;
            let reasoning = "";

            // Simple keyword matching for the demo / placeholder
            if (input.includes("leak") || input.includes("water") || input.includes("dripping")) {
                if (input.includes("aircon") || input.includes("ac")) {
                    const airconSvc = SERVICES.find(s => s.id === 'aircon')?.items.find(i => i.id === 'general-service');
                    matchedService = { id: 'general-service', min: airconSvc?.minPrice || 80, max: airconSvc?.maxPrice || 150 };
                    reasoning = "Based on your description, this sounds like a clogged drainage pipe or refrigerant issue common in aircon units. A general service/cleaning is the best first step.";
                } else {
                    const plumbingSvc = SERVICES.find(s => s.id === 'plumbing')?.items.find(i => i.id === 'leaking-pipes');
                    matchedService = { id: 'leaking-pipes', min: plumbingSvc?.minPrice || 150, max: plumbingSvc?.maxPrice || 350 };
                    reasoning = "Identified as a plumbing leak. We recommend checking the pipe joints and seals.";
                }
            } else if (input.includes("smell") || input.includes("stink") || input.includes("clog")) {
                const plumbingSvc = SERVICES.find(s => s.id === 'plumbing')?.items.find(i => i.id === 'clogged-drains');
                matchedService = { id: 'clogged-drains', min: plumbingSvc?.minPrice || 180, max: plumbingSvc?.maxPrice || 450 };
                reasoning = "Signs of a drainage blockage. This typically requires professional cleaning or clearing.";
            } else if (input.includes("light") || input.includes("trip") || input.includes("power") || input.includes("electric")) {
                const electricalSvc = SERVICES.find(s => s.id === 'electrical')?.items.find(i => i.id === 'electrical-troubleshooting');
                matchedService = { id: 'electrical-troubleshooting', min: electricalSvc?.minPrice || 100, max: electricalSvc?.maxPrice || 250 };
                reasoning = "This indicates an electrical fault or circuit trip. Troubleshooting is required to isolate the dangerous short circuit.";
            } else {
                // Fallback to most general aircon service if unclear but mentioned home
                const airconSvc = SERVICES.find(s => s.id === 'aircon')?.items.find(i => i.id === 'general-service');
                matchedService = { id: 'general-service', min: airconSvc?.minPrice || 80, max: airconSvc?.maxPrice || 150 };
                reasoning = "We've matched your problem to a standard checkup. A technician will need to verify the specific details on-site.";
            }

            onDiagnosticComplete(matchedService.id, matchedService.min, matchedService.max, reasoning);
            setIsAnalyzing(false);
        }, 2000);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    AI-Powered Service Advisor
                </p>
            </div>

            <form onSubmit={handleAnalyze} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Describe what happened</label>
                    <textarea
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        placeholder="e.g. My aircon is leaking water onto the floor and not cold anymore..."
                        className="w-full p-4 rounded-2xl border border-slate-200 bg-white/50 text-slate-900 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-lg min-h-[120px] resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isAnalyzing || problem.length < 10}
                    className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white font-black text-lg py-5 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl"
                >
                    {isAnalyzing ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            AI is Analyzing...
                        </>
                    ) : (
                        <>
                            Analyze Problem
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>

            <div className="flex items-start gap-2 text-[10px] text-slate-400 leading-tight p-4 rounded-xl bg-slate-50 border border-slate-100 italic">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-slate-300" />
                <p>
                    AI diagnostics are estimates only. The technician will provide the final diagnosis upon inspection.
                </p>
            </div>
        </div>
    );
}
