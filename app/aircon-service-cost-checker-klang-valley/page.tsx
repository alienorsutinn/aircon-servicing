import { SERVICES } from "../data/services";
import ServicePageLayout from "../components/ServicePageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aircon Service Cost Checker Malaysia (Klang Valley) – 2026 Guide",
    description: "Check typical aircon service prices in Malaysia. See cost ranges for servicing, chemical wash, gas refill and installation in Klang Valley before you book.",
};

export default function AirconSEOPage() {
    const category = SERVICES.find((s) => s.id === "aircon");

    if (!category) {
        return <div>Service not found</div>;
    }

    return <ServicePageLayout category={category} />;
}
