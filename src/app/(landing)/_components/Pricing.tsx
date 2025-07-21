"use client";

import { Check } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { pricingPlans } from "../utils/data";

interface PricingProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function Pricing({ sectionRef }: PricingProps) {
  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-16 px-4 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Pricing
        </h2>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
          Choose the perfect plan for your log management needs. Start with our free tier 
          and scale as your applications grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative group">
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Popular choice
                </div>
              )}

              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div
                className={cn(
                  "relative border border-white/10 rounded-2xl p-6 h-full transition-all duration-300",
                  "group-hover:border-blue-500/50 group-hover:bg-white/5",
                  plan.popular ? "border-blue-500/50 bg-white/5" : ""
                )}
              >
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r",
                    plan.color
                  )}
                ></div>

                <div className="pt-6">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-white/60 mb-4">{plan.description}</p>

                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">
                      {plan.price}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-blue-400" />
                        </div>
                        <p className="text-sm text-white/70">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={cn(
                      "w-full rounded-xl h-12",
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Need a custom plan?
              </h3>
              <p className="text-white/70">
                Contact us to discuss special terms
              </p>
            </div>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-12 px-8">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
