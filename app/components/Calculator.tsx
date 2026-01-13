"use client";

import { useState } from "react";
import { Calculator as CalculatorIcon, Info, RefreshCw, ThermometerSun } from "lucide-react";

import { CALCULATOR_RATES } from "../data/services";

type UnitType = "wall" | "ceiling";
type Horsepower = "1.0" | "1.5" | "2.0" | "2.5" | "3.0";
type ServiceType = "normal" | "chemical" | "overhaul";

export default function Calculator() {
    const [unitType, setUnitType] = useState<UnitType>("wall");
    const [hp, setHp] = useState<Horsepower>("1.0");
    const [serviceType, setServiceType] = useState<ServiceType>("normal");


    const priceRange = CALCULATOR_RATES[unitType][hp][serviceType];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 max-w-md mx-auto transform transition-all hover:scale-[1.01] duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                    <CalculatorIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Estimate Cost</h2>
            </div>

            <div className="space-y-5">
                {/* Unit Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Aircon Type</label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setUnitType("wall")}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors ${unitType === "wall"
                                ? "bg-blue-50 border-blue-500 text-blue-700"
                                : "border-gray-200 text-gray-600 hover:border-gray-300"
                                }`}
                        >
                            Wall Mounted
                        </button>
                        <button
                            onClick={() => setUnitType("ceiling")}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors ${unitType === "ceiling"
                                ? "bg-blue-50 border-blue-500 text-blue-700"
                                : "border-gray-200 text-gray-600 hover:border-gray-300"
                                }`}
                        >
                            Ceiling / Cassette
                        </button>
                    </div>
                </div>

                {/* Horsepower */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Horsepower (HP)</label>
                    <select
                        value={hp}
                        onChange={(e) => setHp(e.target.value as Horsepower)}
                        className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    >
                        <option value="1.0">1.0 HP</option>
                        <option value="1.5">1.5 HP</option>
                        <option value="2.0">2.0 HP</option>
                        <option value="2.5">2.5 HP</option>
                        <option value="3.0">3.0 HP</option>
                    </select>
                </div>

                {/* Service Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Service Type</label>
                    <div className="grid grid-cols-1 gap-2">
                        {[
                            { id: "normal", label: "Normal Service (General Cleaning)", icon: ThermometerSun },
                            { id: "chemical", label: "Chemical Wash (Deep Cleaning)", icon: RefreshCw },
                            { id: "overhaul", label: "Overhaul (Dismantle & Clean)", icon: Info },
                        ].map((st) => (
                            <button
                                key={st.id}
                                onClick={() => setServiceType(st.id as ServiceType)}
                                className={`flex items-center p-3 rounded-lg border text-left transition-all ${serviceType === st.id
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                <st.icon className={`w-5 h-5 mr-3 ${serviceType === st.id ? "text-blue-100" : "text-gray-400"}`} />
                                <span className="font-medium text-sm">{st.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-400 mb-1 font-medium">Estimated Market Rate</p>
                    <div className="text-4xl font-black text-gray-800 tracking-tight">
                        RM {priceRange[0]} - RM {priceRange[1]}
                    </div>
                    <p className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
                        <Info className="w-3 h-3" />
                        Based on average Klang Valley rates
                    </p>
                </div>
            </div>
        </div>
    );
}
