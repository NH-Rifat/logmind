"use client";

import { X, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { searchResults, dashboardMetrics, recentEvents, activeServices } from "../utils/data";

interface SearchResultsProps {
  showResults: boolean;
  searchQuery: string;
  selectedLog: string | null;
  setSelectedLog: (log: string | null) => void;
  onClose: () => void;
  resultsRef: React.RefObject<HTMLDivElement>;
}

export default function SearchResults({
  showResults,
  searchQuery,
  selectedLog,
  setSelectedLog,
  onClose,
  resultsRef,
}: SearchResultsProps) {
  if (!showResults) return null;

  return (
    <section
      ref={resultsRef}
      className="py-16 px-4 border-t border-white/5 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Search results: {searchQuery}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-white/5"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid gap-4">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className={cn(
                "group relative border border-white/10 rounded-2xl p-6 transition-all duration-300",
                "hover:border-blue-500/50 hover:bg-white/5 cursor-pointer",
                selectedLog === result.name
                  ? "border-blue-500 bg-white/5"
                  : ""
              )}
              onClick={() => setSelectedLog(result.name)}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "px-2 py-1 rounded text-xs font-medium",
                        result.level === "ERROR" && "bg-red-500/20 text-red-400",
                        result.level === "WARN" && "bg-yellow-500/20 text-yellow-400",
                        result.level === "INFO" && "bg-blue-500/20 text-blue-400",
                        result.level === "DEBUG" && "bg-gray-500/20 text-gray-400"
                      )}
                    >
                      {result.level}
                    </div>
                    <span className="text-white/60 text-sm">{result.source}</span>
                  </div>
                  <div className="text-sm text-white/50">{result.timestamp}</div>
                </div>

                <h3 className="font-bold text-lg mb-2">
                  {result.name}
                </h3>

                <p className="text-white/70 mb-4">
                  {result.message}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        result.status === "active" && "bg-red-500",
                        result.status === "resolved" && "bg-green-500",
                        result.status === "monitoring" && "bg-yellow-500"
                      )}
                    ></div>
                    <span
                      className={cn(
                        "text-sm capitalize",
                        result.status === "active" && "text-red-400",
                        result.status === "resolved" && "text-green-400",
                        result.status === "monitoring" && "text-yellow-400"
                      )}
                    >
                      {result.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/60">
                      {result.severity}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                  <Button
                    variant="ghost"
                    className="text-white/70 hover:text-white p-0 h-auto"
                  >
                    View Details
                  </Button>

                  <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-9 px-4">
                    Analyze
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Real-time Log Dashboard</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {dashboardMetrics.map((metric, index) => (
              <div
                key={index}
                className={cn(
                  "border rounded-lg p-4",
                  metric.color === "red" && "bg-red-500/10 border-red-500/20",
                  metric.color === "yellow" && "bg-yellow-500/10 border-yellow-500/20",
                  metric.color === "blue" && "bg-blue-500/10 border-blue-500/20",
                  metric.color === "green" && "bg-green-500/10 border-green-500/20"
                )}
              >
                <div
                  className={cn(
                    "text-2xl font-bold",
                    metric.color === "red" && "text-red-400",
                    metric.color === "yellow" && "text-yellow-400",
                    metric.color === "blue" && "text-blue-400",
                    metric.color === "green" && "text-green-400"
                  )}
                >
                  {metric.value}
                </div>
                <div className="text-white/60 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="aspect-[16/9] rounded-xl overflow-hidden relative bg-black/50">
            <div className="absolute inset-4">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="space-y-2">
                  <div className="text-xs text-white/50">Recent Events</div>
                  {recentEvents.map((event, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <span className="text-white/40">{event.time}</span>
                      <span className={cn(
                        "px-1 py-0.5 rounded text-[10px]",
                        event.level === "ERROR" && "bg-red-500/20 text-red-400",
                        event.level === "WARN" && "bg-yellow-500/20 text-yellow-400",
                        event.level === "INFO" && "bg-blue-500/20 text-blue-400"
                      )}>
                        {event.level}
                      </span>
                      <span className="text-white/60 truncate">{event.msg}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-white/50">System Health</div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">CPU</span>
                      <span className="text-green-400">45%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div className="bg-green-500 h-1 rounded-full w-[45%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Memory</span>
                      <span className="text-yellow-400">75%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div className="bg-yellow-500 h-1 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-white/50">Active Services</div>
                  {activeServices.map((service, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-white/60">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
