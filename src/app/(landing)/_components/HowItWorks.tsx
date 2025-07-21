"use client";

import { Search, Layers, Zap, Clock, DollarSign, RefreshCw, Sparkles, Check, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { howItWorksSteps, platformAdvantages, aiFeatures } from "../utils/data";

interface HowItWorksProps {
  sectionRef: React.RefObject<HTMLElement>;
  onSectionClick: (sectionId: string) => void;
}

const iconMap = {
  Search,
  Layers,
  Zap,
  Clock,
  DollarSign,
  RefreshCw,
  Sparkles,
};

export default function HowItWorks({ sectionRef, onSectionClick }: HowItWorksProps) {
  return (
    <section
      ref={sectionRef}
      id="how"
      className="py-16 px-4 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          How it works
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          Our platform simplifies log management with AI-powered insights, 
          real-time monitoring, and intelligent search across all your applications
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-24 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5">
            <div className="h-full bg-white/10 relative">
              <div className="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute top-1/2 left-5/6 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {howItWorksSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                <div className="relative border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-white/5">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 mt-4">
                    <IconComponent className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 mb-6">{step.description}</p>

                  <div className="space-y-2">
                    {step.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <p className="text-sm text-white/60">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-white/10 rounded-2xl p-8 mb-16 bg-white/5 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Platform advantages
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformAdvantages.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-4 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                    <h4 className="font-bold">{benefit.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-white/10 rounded-2xl p-8 mb-16 bg-gradient-to-br from-black to-blue-950/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-400" />
            AI-Powered Log Analysis
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">
                Intelligent Log Processing
              </h4>
              <p className="text-white/70">
                Our platform uses advanced machine learning algorithms to 
                analyze patterns, detect anomalies, and provide intelligent 
                insights from your application logs.
              </p>
              <ul className="space-y-2">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-blue-400" />
                    </div>
                    <p className="text-sm text-white/70">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-blue-500/20 rounded-2xl blur-md"></div>
              <div className="relative border border-white/10 rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold">
                    High-Performance Search
                  </h4>
                </div>
                <p className="text-white/70 mb-4">
                  Built on cutting-edge search technology to handle millions 
                  of log entries with lightning-fast query performance.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Query response time</span>
                  <span className="text-blue-400 font-medium">
                    {"<"} 100ms
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full mt-1 mb-3">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Data accuracy</span>
                  <span className="text-blue-400 font-medium">99.9%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full mt-1">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-16">
          <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-blue-500/20 rounded-2xl blur-md"></div>

          <div className="relative border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-black/50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-white/60 text-sm">logmind-sdk-example.js</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-purple-400">import</div>
                <span className="text-white"> LogMind </span>
                <div className="text-purple-400">from</div>
                <span className="text-green-400"> &apos;logmind-sdk&apos;</span>
                <br /><br />
                <div className="text-purple-400">const</div>
                <span className="text-white"> logger = </span>
                <div className="text-purple-400">new</div>
                <span className="text-blue-400"> LogMind</span>
                <span className="text-white">(</span>
                <span className="text-green-400">&apos;your-api-key&apos;</span>
                <span className="text-white">)</span>
                <br /><br />
                <span className="text-white">logger.</span>
                <span className="text-blue-400">error</span>
                <span className="text-white">(</span>
                <span className="text-green-400">&apos;Database connection failed&apos;</span>
                <span className="text-white">, {`{`}</span>
                <br />
                <span className="text-white ml-4">user_id: </span>
                <span className="text-orange-400">12345</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-white ml-4">timestamp: </span>
                <span className="text-purple-400">Date</span>
                <span className="text-white">.</span>
                <span className="text-blue-400">now</span>
                <span className="text-white">()</span>
                <br />
                <span className="text-white">{`}`})</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Ready to simplify your log management?
          </h3>
          <Button
            className="rounded-full bg-blue-600 hover:bg-blue-700 h-12 px-8 text-lg"
            onClick={() => onSectionClick("search")}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
