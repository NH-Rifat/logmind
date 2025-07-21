import { Suspense } from "react";
import LogMindLandingPage from "./_components/LogMindLandingPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Loading LogMind</h2>
            <p className="text-white/60">Preparing your log management platform...</p>
          </div>
        </div>
      }
    >
      <LogMindLandingPage />
    </Suspense>
  );
}
