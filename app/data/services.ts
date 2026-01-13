export interface ServiceData {
    id: string;
    name: string;
    description: string;
    minPrice: number;
    maxPrice: number;
    unit: string;
    notes: string[];
}

export const SERVICES: ServiceData[] = [
    {
        id: "normal",
        name: "General Servicing",
        description: "Basic cleaning of filters, evaporator coil, and blower wheel to restore airflow and efficiency.",
        minPrice: 80,
        maxPrice: 120,
        unit: "1.0 - 1.5 HP per unit",
        notes: [
            "Cleaning of indoor filters & faceplate",
            "Blower wheel brushing",
            "Gas pressure check included",
            "Outdoor unit general dusting"
        ]
    },
    {
        id: "chemical",
        name: "Chemical Wash",
        description: "Deep cleaning using anti-bacterial chemicals to remove stubborn grime, mold, and jelly buildup.",
        minPrice: 120,
        maxPrice: 180,
        unit: "1.0 - 1.5 HP per unit",
        notes: [
            "Recommended for water leaking / low airflow",
            "Full dismantling of indoor unit (Overhaul usually cost more)",
            "Chemical cleaning of evaporator coil",
            "Drainage pipe flushing"
        ]
    },
    {
        id: "gas",
        name: "Gas Refill (Top-up)",
        description: "Refilling refrigerant gas (R22, R410A, or R32) if cooling performance has dropped.",
        minPrice: 30,
        maxPrice: 150,
        unit: "per unit",
        notes: [
            "Price varies by gas type (R22 is older, R32 is newer)",
            "Small top-up (approx 10-20psi) is cheaper",
            "Full refill from empty requires leak checking (+$$)"
        ]
    },
    {
        id: "install",
        name: "New Installation",
        description: "Professional installation of new aircon units including piping, wiring, and testing.",
        minPrice: 250,
        maxPrice: 450,
        unit: "1.0 - 2.0 HP per unit",
        notes: [
            "Includes standard 10ft copper piping",
            "Includes outdoor bracket",
            "Extra piping charged per foot (approx RM15-25/ft)",
            "Power point wiring not typically included"
        ]
    },
    {
        id: "troubleshoot",
        name: "Troubleshooting / Repair",
        description: "Diagnosis of specific problems like blinking lights, strange noises, or unit not turning on.",
        minPrice: 50,
        maxPrice: 150,
        unit: "per visit",
        notes: [
            "Inspection fee (RM50-80) usually waived if you proceed with repair",
            "Covers minor part replacements (e.g. Capacitor)",
            "Major parts (PCB/Compressor) quoted separately"
        ]
    }
];

// Matrix for the Calculator Component (Specific breakdowns)
export const CALCULATOR_RATES = {
    wall: {
        "1.0": { normal: [80, 100], chemical: [120, 150], overhaul: [250, 280] },
        "1.5": { normal: [90, 120], chemical: [140, 180], overhaul: [280, 320] },
        "2.0": { normal: [110, 140], chemical: [180, 220], overhaul: [350, 400] },
        "2.5": { normal: [130, 160], chemical: [220, 260], overhaul: [400, 450] },
        "3.0": { normal: [150, 190], chemical: [250, 320], overhaul: [450, 500] },
    },
    ceiling: {
        "1.0": { normal: [150, 180], chemical: [220, 260], overhaul: [380, 420] },
        "1.5": { normal: [160, 200], chemical: [240, 280], overhaul: [400, 450] },
        "2.0": { normal: [180, 220], chemical: [280, 330], overhaul: [450, 500] },
        "2.5": { normal: [220, 260], chemical: [320, 380], overhaul: [500, 550] },
        "3.0": { normal: [250, 300], chemical: [380, 450], overhaul: [550, 650] },
    },
};
