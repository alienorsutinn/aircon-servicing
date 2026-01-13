"use client";

import { useState, useMemo } from "react";
import { Calculator as CalculatorIcon, Info, ChevronDown } from "lucide-react";
import { ServiceCategory } from "../types";

interface CostCheckerProps {
    category: ServiceCategory;
}

export default function CostChecker({ category }: CostCheckerProps) {
    const [serviceId, setServiceId] = useState<string>(category.items[0].id);
    const [units, setUnits] = useState<number>(1);

    // Dynamically handle different types and capacities based on the service
    const unitTypeOptions = category.calculatorRates ? Object.keys(category.calculatorRates) : [];
    const [unitType, setUnitType] = useState<string>(unitTypeOptions[0] || "");

    const capacityOptions = category.calculatorRates && unitType ? Object.keys(category.calculatorRates[unitType]) : [];
    const [capacity, setCapacity] = useState<string>(capacityOptions[0] || "");

    const calculation = useMemo(() => {
        if (!category.calculatorRates || !unitType || !capacity) {
            const service = category.items.find((s) => s.id === serviceId);
            if (!service) return { min: 0, max: 0 };
            return {
                min: service.minPrice * units,
                max: service.maxPrice * units
            };
        }

        const rate = category.calculatorRates[unitType]?.[capacity]?.[serviceId];
        if (!rate) return { min: 0, max: 0 };

        let min = rate[0] * units;
        let max = rate[1] * units;

        // UX Rule: No precision, round to nearest 10
        min = Math.ceil(min / 10) * 10;
        max = Math.ceil(max / 10) * 10;

        return { min, max };
    }, [category, serviceId, units, unitType, capacity]);

    return (
        <div className="glass rounded-[2rem] shadow-premium p-8 md:p-10 border border-white/50 max-w-lg mx-auto transition-all duration-500 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-8 text-slate-900 border-b border-slate-100 pb-6">
                <div className={`p-4 rounded-2xl bg-${category.color}-500/10`}>
                    <CalculatorIcon className={`w-7 h-7 text-${category.color}-600`} />
                </div>
                <div>
                    <h2 className="text-2xl font-black tracking-tight">{category.title} Checker</h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Klang Valley • 2026</p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Sub-service Selector */}
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Service Type</label>
                    <div className="group relative">
                        <select
                            value={serviceId}
                            onChange={(e) => setServiceId(e.target.value)}
                            className="w-full p-4 pr-12 appearance-none rounded-2xl border border-slate-200 bg-white/50 text-slate-900 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-semibold text-lg hover:border-slate-300"
                        >
                            {category.items.map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors pointer-events-none" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Units or Severity Selector */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">
                            {category.id === 'aircon' ? 'How many units?' : 'Quantity / Scope'}
                        </label>
                        <div className="flex items-center rounded-2xl border border-slate-200 bg-white/50 p-1 group hover:border-slate-300 transition-all">
                            <button
                                onClick={() => setUnits(Math.max(1, units - 1))}
                                className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-600 transition-colors font-bold text-xl"
                            >
                                −
                            </button>
                            <div className="flex-1 text-center font-black text-slate-800 text-xl">
                                {units}
                            </div>
                            <button
                                onClick={() => setUnits(Math.min(10, units + 1))}
                                className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-600 transition-colors font-bold text-xl"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {category.calculatorRates && (
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">
                                {category.id === 'aircon' ? 'Unit Type' : 'Job Scale'}
                            </label>
                            <div className="relative group">
                                <select
                                    value={unitType}
                                    onChange={(e) => setUnitType(e.target.value)}
                                    className="w-full p-4 pr-12 appearance-none rounded-2xl border border-slate-200 bg-white/50 text-slate-900 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-semibold hover:border-slate-300"
                                >
                                    {unitTypeOptions.map((opt) => (
                                        <option key={opt} value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors pointer-events-none" />
                            </div>
                        </div>
                    )}
                </div>

                {category.calculatorRates && capacityOptions.length > 1 && (
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">
                            {category.id === 'aircon' ? 'Capacity (HP)' : 'Complexity Level'}
                        </label>
                        <div className="relative group">
                            <select
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                className="w-full p-4 pr-12 appearance-none rounded-2xl border border-slate-200 bg-white/50 text-slate-900 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-semibold hover:border-slate-300"
                            >
                                {capacityOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors pointer-events-none" />
                        </div>
                    </div>
                )}

                {/* Result Area */}
                <div className="mt-10 pt-10 border-t border-slate-100/50">
                    <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                        {/* Decorative background element */}
                        <div className={`absolute -right-8 -top-8 w-32 h-32 bg-${category.color}-500/20 rounded-full blur-3xl`}></div>

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 relative z-10 text-center">Typical cost in Klang Valley</p>
                        <div className="text-4xl sm:text-5xl font-black tracking-tighter relative z-10 text-center mb-6">
                            RM <span className="text-white">{calculation.min}</span> <span className="text-slate-500 font-light mx-1">–</span> <span className="text-white">{calculation.max}</span>
                        </div>

                        <div className="mt-6 flex items-start gap-2 text-[10px] text-slate-400 leading-tight relative z-10 p-4 rounded-xl bg-white/5 border border-white/10">
                            <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-300" />
                            <p>
                                Estimates for {units} {unitType || 'selected'} items. Prices vary by technician and accessibility. Always ask for a fixed quote before work begins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
