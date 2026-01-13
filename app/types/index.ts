export type UnitType = "wall" | "cassette" | "standing" | "point" | "visit" | "fixture";

export interface ServiceItem {
    id: string;
    name: string;
    description: string;
    minPrice: number;
    maxPrice: number;
    unit: string;
    notes: string[];
}

export interface PricingRate {
    [key: string]: [number, number]; // [min, max]
}

export interface ServiceCategory {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
    heroImage: string;
    thumbnailImage?: string;
    items: ServiceItem[];
    calculatorRates?: {
        [type: string]: {
            [capacity: string]: {
                [service: string]: [number, number];
            };
        };
    };
    whyPricesVary?: {
        title: string;
        items: { icon: string; title: string; body: string }[];
    };
    avoidOvercharging?: {
        title: string;
        body: string;
    };
    cta?: {
        title: string;
        subtext: string;
    };
}
