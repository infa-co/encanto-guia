import { useState } from "react";
import BottomNav, { type Tab } from "@/components/BottomNav";
import HomeView from "@/components/views/HomeView";
import ExperiencesView from "@/components/views/ExperiencesView";
import CheckoutView from "@/components/views/CheckoutView";

const Index = () => {
  const [tab, setTab] = useState<Tab>("inicio");

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-md px-4 pt-4 safe-bottom">
        {tab === "inicio" && <HomeView onGoToExperiences={() => setTab("experiencias")} />}
        {tab === "experiencias" && <ExperiencesView />}
        {tab === "checkout" && <CheckoutView />}
      </main>
      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
};

export default Index;
