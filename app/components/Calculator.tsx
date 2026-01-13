"use client";

import { useState, useMemo } from "react";
import { Calculator as CalculatorIcon, Info, Users, MapPin, ChevronDown } from "lucide-react";
import { SERVICES } from "../data/services";

type UnitType = "wall" | "cassette" | "standing";

const UNIT_TYPE_MULTIPLIERS = {
    wall: 1.0,
    cassette: 1.3,
    standing: 1.4,
};

export default function Calculator() {
    const [serviceId, setServiceId] = useState<string>("normal");
    const [units, setUnits] = useState<number>(1);
    const [unitType, setUnitType] = useState<UnitType>("wall");

    const calculation = useMemo(() => {
        const service = SERVICES.find((s) => s.id === serviceId);
        if (!service) return { min: 0, max: 0 };

        const multiplier = UNIT_TYPE_MULTIPLIERS[unitType];

        // Calculate raw prices
        let min = service.minPrice * multiplier * units;
        let max = service.maxPrice * multiplier * units;

        // Round to nearest 10 for "no precision" look
        min = Math.ceil(min / 10) * 10;
        max = Math.ceil(max / 10) * 10;

        return { min, max };
    }, [serviceId, units, unitType]);

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 max-w-md mx-auto transform transition-all hover:scale-[1.01] duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                    <CalculatorIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Check Market Prices</h2>
                    <p className="text-xs text-gray-500">For standard residential units</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Service Type Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Service Needed</label>
                    <div className="relative">
                        <select
                            value={serviceId}
                            onChange={(e) => setServiceId(e.target.value)}
                            className="w-full p-3 pr-10 appearance-none rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                        >
                            {SERVICES.map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Number of Units */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Quantity (Units)</label>
                        <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => setUnits(Math.max(1, units - 1))}
                                className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 border-r border-gray-200"
                            >
                                -
                            </button>
                            <div className="flex-1 text-center font-bold text-gray-800 bg-white py-2">
                                {units}
                            </div>
                            <button
                                onClick={() => setUnits(Math.min(10, units + 1))}
                                className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 border-l border-gray-200"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Area Placeholder */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Area / Location</label>
                        <div className="flex items-center gap-2 p-3 bg-gray-100/50 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium truncate">Klang Valley</span>
                        </div>
                    </div>
                </div>

                {/* Unit Type Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Unit Type</label>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { id: "wall", label: "Wall" },
                            { id: "cassette", label: "Cassette" },
                            { id: "standing", label: "Standing" }
                        ].map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setUnitType(type.id as UnitType)}
                                className={`p-2 rounded-lg border text-sm font-medium transition-colors ${unitType === type.id
                                        ? "bg-blue-50 border-blue-500 text-blue-700"
                                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-400 mb-1 font-medium">Estimated Price Range</p>
                    <div className="text-3xl sm:text-4xl font-black text-gray-800 tracking-tight">
                        RM {calculation.min} – RM {calculation.max}
                    </div>
                    <p className="text-xs text-gray-400 mt-3 px-4 leading-relaxed">
                        *Indicative only. Prices typically quoted by technicians in Klang Valley for {units} {unitType} unit(s).
                        Not an official quote.
                    </p>
                </div>
            </div>
        </div>
    );
}
