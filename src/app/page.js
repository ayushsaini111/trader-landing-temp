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

export default function Home() {
    return (
        <>
        <Hero/>
            <div className="max-w-7xl mx-auto py-0 md:pb-s160">
                <PerformanceTrack />
            </div>

            <BestAndWorst />

            <div className="max-w-7xl mx-auto md:py-s160">
                <JourneyLogs />
                <StyleAndStrategy />
            </div>

            <TradingRules />

            <div data-nav="white" className="md:space-y-s160 bg-black">
                <MistakesAndLessons />
                <DailyInsights />
            </div>
        <div data-nav="white" className="bg-black">

                <LetsConnect />
        </div>
                <Footer />
        </>
    );
}
