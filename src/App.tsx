import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout";

const Home = lazy(() => import("@/pages/home"));
const TaxiMakkah = lazy(() => import("@/pages/taxi-makkah"));
const TaxiJeddah = lazy(() => import("@/pages/taxi-jeddah"));
const TaxiMadinah = lazy(() => import("@/pages/taxi-madinah"));
const TaxiTaif = lazy(() => import("@/pages/taxi-taif"));
const AirportJeddah = lazy(() => import("@/pages/airport-jeddah"));
const AirportJeddahMakkah = lazy(() => import("@/pages/airport-jeddah-makkah"));
const MakkahMadinah = lazy(() => import("@/pages/makkah-madinah"));
const HotelsMakkah = lazy(() => import("@/pages/hotels-makkah"));
const Ziyarat = lazy(() => import("@/pages/ziyarat"));
const TrainStations = lazy(() => import("@/pages/train-stations"));
const HotelsMadinah = lazy(() => import("@/pages/hotels-madinah"));
const FAQ = lazy(() => import("@/pages/faq"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-pulse text-primary text-xl font-bold">جاري التحميل...</div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taxi-makkah" element={<TaxiMakkah />} />
        <Route path="/taxi-jeddah" element={<TaxiJeddah />} />
        <Route path="/taxi-madinah" element={<TaxiMadinah />} />
        <Route path="/taxi-taif" element={<TaxiTaif />} />
        <Route path="/airport-jeddah" element={<AirportJeddah />} />
        <Route path="/airport-jeddah-makkah" element={<AirportJeddahMakkah />} />
        <Route path="/makkah-madinah" element={<MakkahMadinah />} />
        <Route path="/hotels-makkah" element={<HotelsMakkah />} />
        <Route path="/ziyarat" element={<Ziyarat />} />
        <Route path="/train-stations" element={<TrainStations />} />
        <Route path="/hotels-madinah" element={<HotelsMadinah />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
