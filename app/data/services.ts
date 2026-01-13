import { ServiceCategory } from "../types";

export const SERVICES: ServiceCategory[] = [
    {
        id: "aircon",
        title: "Aircon Servicing",
        slug: "/aircon-service-cost-checker-klang-valley",
        description: "Professional cleaning, gas refills, and overhaul services for residential and commercial units.",
        icon: "Wind",
        color: "blue",
        heroImage: "/technician-hero.png",
        thumbnailImage: "/Users/alienorsutin/.gemini/antigravity/brain/9157b003-be08-4888-923a-a7ae828bfd89/aircon_card_thumb_1768291921479.png",
        items: [
            {
                id: "normal",
                name: "General Aircon Servicing",
                description: "Basic cleaning of filters, evaporator coil, and blower wheel to restore airflow.",
                minPrice: 80,
                maxPrice: 150,
                unit: "per unit (1.0 - 2.0 HP)",
                notes: ["Filter cleaning", "Gas pressure check", "Internal dusting"]
            },
            {
                id: "chemical",
                name: "Chemical Wash",
                description: "Deep cleaning with specialized chemicals to remove stubborn mold and grime.",
                minPrice: 150,
                maxPrice: 300,
                unit: "per unit (1.0 - 2.0 HP)",
                notes: ["Anti-bacterial flush", "Full casing wash", "Drainage pipe clearing"]
            },
            {
                id: "gas",
                name: "Gas Refill (R22 / R410A)",
                description: "Topping up refrigerant gas to restore cooling performance.",
                minPrice: 100,
                maxPrice: 250,
                unit: "per top-up",
                notes: ["Leak check included", "R22, R410A, or R32", "Price depends on PSI level"]
            },
            {
                id: "install",
                name: "Aircon Installation",
                description: "Professional mounting and connection of new indoor and outdoor units.",
                minPrice: 250,
                maxPrice: 600,
                unit: "per set (1.0 - 2.0 HP)",
                notes: ["Includes basic piping", "Bracket included", "Testing & Commissioning"]
            },
            {
                id: "repair",
                name: "Troubleshooting / Minor Repair",
                description: "Diagnosis of issues like blinking lights, no cooling, or strange noises.",
                minPrice: 80,
                maxPrice: 200,
                unit: "per visit",
                notes: ["Inspection fee waived if repair done", "Minor part replacement", "Circuit check"]
            }
        ],
        calculatorRates: {
            wall: {
                "1.0": { normal: [80, 110], chemical: [150, 180], overhaul: [250, 300] },
                "1.5": { normal: [90, 130], chemical: [180, 220], overhaul: [300, 350] },
                "2.0": { normal: [110, 150], chemical: [220, 280], overhaul: [350, 450] },
            },
            ceiling: {
                "1.0": { normal: [150, 200], chemical: [250, 300], overhaul: [400, 500] },
                "2.0": { normal: [200, 250], chemical: [300, 380], overhaul: [500, 600] },
            }
        },
        whyPricesVary: {
            title: "Why do aircon prices vary?",
            items: [
                { icon: "Activity", title: "Horsepower (HP)", body: "Larger units (2.0HP+) require more chemical solution and longer labor hours than standard 1.0HP units." },
                { icon: "Search", title: "Dirt & Grime Level", body: "Units that haven't been serviced for years may require a full chemical overhaul vs a surface wash." },
                { icon: "ShieldCheck", title: "Brand & Type", body: "Ceiling cassettes and certain premium brands have complex dismantling procedures compared to wall-mounted units." },
                { icon: "MapPin", title: "Unit Accessibility", body: "Outdoor units mounted on high ledges or hard-to-reach areas add significant labor time and safety complexity." }
            ]
        },
        avoidOvercharging: {
            title: "Your best defense against overcharging.",
            body: "Knowledge is power. Technicians often add 'mandatory' gas refills or mark up basic labor. Our tool gives you the baseline you need to negotiate with confidence in KL and Selangor."
        },
        cta: {
            title: "Connect with a recommended technician",
            subtext: "We’re onboarding technicians in Klang Valley."
        }
    },
    {
        id: "plumbing",
        title: "Plumbing Services",
        slug: "/plumbing-service-cost-checker-klang-valley",
        description: "Reliable plumbing repairs, leak detection, and fixture installations for homes and offices.",
        icon: "Droplets",
        color: "emerald",
        heroImage: "/plumbing-hero.png",
        thumbnailImage: "/Users/alienorsutin/.gemini/antigravity/brain/9157b003-be08-4888-923a-a7ae828bfd89/plumbing_card_thumb_1768291944784.png",
        items: [
            {
                id: "leak",
                name: "Leaking Pipe Repair",
                description: "Fixing dripping taps, burst pipes, or toilet tanks leaks.",
                minPrice: 80,
                maxPrice: 250,
                unit: "per case",
                notes: ["Minor gasket replace", "Pipe joint tightening", "Material costs excluded"]
            },
            {
                id: "clog",
                name: "Clogged Drain / Toilet",
                description: "Clearing blockages in sinks, toilets, or floor drains with professional tools.",
                minPrice: 100,
                maxPrice: 300,
                unit: "per case",
                notes: ["Mechanical plunging", "Sewer snake cleaning", "Siphon clearing"]
            },
            {
                id: "heater",
                name: "Water Heater Repair",
                description: "Fixing heating issues, water pressure problems, or electrical safety trips.",
                minPrice: 150,
                maxPrice: 400,
                unit: "per unit",
                notes: ["Electrical check", "Thermostat test", "Heating element check"]
            },
            {
                id: "newpipe",
                name: "New Pipe Installation",
                description: "Full or partial repiping for kitchen, bathroom, or outdoor points.",
                minPrice: 200,
                maxPrice: 600,
                unit: "per point",
                notes: ["PVC or Copper", "Include hacking if needed", "Basic testing"]
            },
            {
                id: "emergency",
                name: "Emergency Plumbing",
                description: "Urgent assistance for burst main pipes or total sewage blockages.",
                minPrice: 150,
                maxPrice: 500,
                unit: "per visit",
                notes: ["24/7 availability", "Quick response team", "Priority dispatch price"]
            }
        ],
        calculatorRates: {
            standard: {
                "Minor": { leak: [80, 150], clog: [100, 180], heater: [150, 250], newpipe: [200, 300], emergency: [150, 300] },
                "Major": { leak: [180, 250], clog: [200, 300], heater: [300, 400], newpipe: [400, 600], emergency: [350, 600] },
            }
        },
        whyPricesVary: {
            title: "Why do plumbing prices vary?",
            items: [
                { icon: "Activity", title: "Emergency & Hours", body: "Calls after 8PM or on holidays typically incur a premium of 50-100% on basic labor." },
                { icon: "Search", title: "Hacking & Access", body: "Hidden pipes behind walls or under tiles require hacking and restoration, which adds to the cost." },
                { icon: "ShieldCheck", title: "Safety & Compliance", body: "Water heater repairs require electrical safety knowledge. Incorrect wiring can be life-threatening." },
                { icon: "MapPin", title: "Material Quality", body: "Using branded copper pipes or high-grade PVC vs standard materials will impact the final quote." }
            ]
        },
        avoidOvercharging: {
            title: "Expert advice for plumbing jobs.",
            body: "Avoid 'open-ended' quotes for leaks. A professional plumber in Klang Valley should be able to give an indicative range after a 5-minute inspection. Never pay the full amount before the leak is confirmed fixed."
        },
        cta: {
            title: "Connect with a recommended plumber",
            subtext: "We’re currently onboarding trusted plumbers in Klang Valley."
        }
    },
    {
        id: "electrical",
        title: "Electrical Services",
        slug: "/electrical-service-cost-checker-klang-valley",
        description: "Safe and professional electrical wiring, troubleshooting, and socket installations for residential and commercial properties.",
        icon: "Zap",
        color: "amber",
        heroImage: "/electrical-hero.png",
        thumbnailImage: "/Users/alienorsutin/.gemini/antigravity/brain/9157b003-be08-4888-923a-a7ae828bfd89/electrical_card_thumb_1768291967295.png",
        items: [
            {
                id: "powertrip",
                name: "Power Trip / Short Circuit",
                description: "Identifying and resolving the root cause of electrical outages or tripping breakers.",
                minPrice: 100,
                maxPrice: 300,
                unit: "per visit",
                notes: ["Faulty appliance isolation", "Leakage current test", "DB box check"]
            },
            {
                id: "socket",
                name: "Socket / Switch Replacement",
                description: "Replacing old, burnt, or malfunctioning power sockets and light switches.",
                minPrice: 80,
                maxPrice: 200,
                unit: "per point",
                notes: ["Standard 13A socket included", "Labor & testing", "Bulk discounts available"]
            },
            {
                id: "lighting",
                name: "Lighting Installation",
                description: "Professional mounting and wiring of new light fixtures or ceiling fans.",
                minPrice: 100,
                maxPrice: 350,
                unit: "per unit",
                notes: ["Surface or concealed", "Bracket installation", "Functional test"]
            },
            {
                id: "dbwiring",
                name: "DB Board / Wiring Check",
                description: "Comprehensive inspection of your electrical distribution board and main internal wiring.",
                minPrice: 200,
                maxPrice: 600,
                unit: "per visit",
                notes: ["Load balance check", "Earthing test", "Safety certification check"]
            },
            {
                id: "emergency",
                name: "Emergency Electrical Repair",
                description: "Urgent response for total power loss, burning smells, or dangerous electrical sparks.",
                minPrice: 150,
                maxPrice: 500,
                unit: "per visit",
                notes: ["24/7 service availability", "Priority dispatch", "Safe isolation and fix"]
            }
        ],
        calculatorRates: {
            standard: {
                "Minor": { powertrip: [100, 180], socket: [80, 120], lighting: [100, 150], dbwiring: [200, 300], emergency: [150, 250] },
                "Major": { powertrip: [200, 300], socket: [150, 200], lighting: [200, 350], dbwiring: [400, 600], emergency: [350, 600] },
            }
        },
        whyPricesVary: {
            title: "Why do electrical prices vary?",
            items: [
                { icon: "ShieldCheck", title: "Safety Risks", body: "Working on live circuits or high-voltage DB boards requires specialized safety equipment and higher labor premiums." },
                { icon: "Search", title: "Inspection Complexity", body: "Pinpointing a phantom short circuit in a large house can take hours of systematic isolation vs a simple part swap." },
                { icon: "Zap", title: "Compliance & Parts", body: "Using SIRIM-approved components and ensuring wiring meets current ST (Suruhanjaya Tenaga) regulations." },
                { icon: "Activity", title: "Emergency Dispatch", body: "Urgent calls for power restoration after-hours or on weekends incur significantly higher call-out fees." }
            ]
        },
        avoidOvercharging: {
            title: "Don't gamble with electrical safety.",
            body: "Cheap labor often means bypassed safety mechanisms. In Klang Valley, ensure your electrician is ST-certified for major works. A small savings on labor can lead to expensive fire damage if wiring isn't up to code."
        },
        cta: {
            title: "Connect with a certified electrician",
            subtext: "We're currently vetting certified electrical pros in Klang Valley."
        }
    }
];
