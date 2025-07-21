"use client";

import { Sparkles, Compass, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { integrationBenefits, platformStatistics } from "../utils/data";

interface DeveloperAPIProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function DeveloperAPI({ sectionRef }: DeveloperAPIProps) {
  return (
    <section
      ref={sectionRef}
      id="business"
      className="py-16 px-4 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Developer API
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-blue-400" />
              Integration Benefits
            </h3>

            <div className="space-y-6">
              {integrationBenefits.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-4 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300"
                >
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-blue-500/20 rounded-2xl blur-md"></div>

              <div className="relative border border-white/10 rounded-2xl p-6 bg-black/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Compass className="h-6 w-6 text-blue-400" />
                  Get API Access
                </h3>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Company / Project Name
                    </label>
                    <Input className="bg-white/5 border-white/10 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-white" />
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Developer Email
                    </label>
                    <Input
                      type="email"
                      className="bg-white/5 border-white/10 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Expected Log Volume (GB/month)
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 10"
                      className="bg-white/5 border-white/10 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Use Case Description
                    </label>
                    <Input 
                      placeholder="Tell us about your application and logging needs"
                      className="bg-white/5 border-white/10 rounded-lg focus:border-blue-500 focus:ring-blue-500 text-white" 
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 h-12"
                  >
                    Request API Access
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-8 p-6 border border-white/10 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold">Platform Statistics</h4>
                <div className="text-sm text-white/50">
                  Current metrics
                </div>
              </div>

              <div className="space-y-4">
                {platformStatistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/70">{stat.label}</span>
                    <span className="font-bold text-blue-400">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Ready to streamline your logging?
          </h3>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-12 px-8 text-lg">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
