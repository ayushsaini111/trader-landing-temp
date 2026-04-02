import DailyInsights from "../Components/DailyInsight";
import Footer from "../Components/Footer";
import JourneyLogs from "../Components/Journey";
import LetsConnect from "../Components/LetsConnect";
import MistakesAndLessons from "../Components/MistakesAndLessons";
import PerformanceTrack from "../Components/PerformanceTrack";
import StyleAndStrategy from "../Components/StyleAndStrategy";
import TradingRules from "../Components/TradingRules";
import BestAndWorst from "../Components/BestAndWorst";
import Hero from "../Components/hero";

import JsonLd from "../Components/JsonLd";
import { SEO_CONFIG } from "../lib/seo-config";
import { canonicalize } from "../utils/canonical";
import {
  getPersonSchema,
  getWebsiteSchema,
  getWebPageSchema,
} from "../utils/schema";

export const metadata = {
  title: "Divyansh Mishra | Investor & Trader",
  description:
    "Explore the trading journey of Divyansh Mishra, an investor and trader based in Kanpur, India, sharing documented daily trades, performance metrics, and a calm strategic market approach.",
  alternates: {
    canonical: canonicalize(""),
  },
};

export default function Home() {
  const url = canonicalize("");

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={getPersonSchema()} />
      <JsonLd data={getWebsiteSchema()} />
      <JsonLd
        data={getWebPageSchema({
          title: SEO_CONFIG.title,
          description: SEO_CONFIG.description,
          url: url,
        })}
      />

      <Hero />
      <div className="max-w-7xl mx-auto py-0 md:py-s160">
        <PerformanceTrack />
      </div>

      <BestAndWorst />

      <div className="max-w-7xl mx-auto md:py-s160">
        <JourneyLogs />
        <StyleAndStrategy />
      </div>

      <TradingRules />

      <div className="md:space-y-s160 bg-black">
        <MistakesAndLessons />
        <DailyInsights />
      </div>
      <div className="bg-black">
        <LetsConnect />
      </div>
      <Footer />
    </>
  );
}
