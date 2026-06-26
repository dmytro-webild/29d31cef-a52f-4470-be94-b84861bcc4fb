import React from "react";
import LoopCarousel from "@/components/ui/LoopCarousel";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";

export default function IndustriesServedSection() {
  return (
    <div data-webild-section="industries-served" id="industries-served">
      <section className="relative w-full py-24 bg-background overflow-hidden">
        <div className="w-content-width mx-auto mb-16 text-center flex flex-col items-center">
          <ScrollReveal variant="fade">
            <Tag text="Our Expertise" className="mb-6" />
          </ScrollReveal>
          <TextAnimation
            text="Industries Served"
            variant="fade-blur"
            tag="h2"
            gradientText={false}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          />
        </div>
        
        <div className="w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <LoopCarousel>
            <div className="flex gap-12 md:gap-24 items-center py-8 px-6">
              {[
                "Life Insurance",
                "HVAC",
                "Roofing",
                "SaaS",
                "Financial Planning",
                "Real Estate",
                "Cybersecurity",
                "Logistics",
                "Legal Services",
                "Consulting"
              ].map((industry, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl md:text-4xl font-bold text-foreground whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-300">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </LoopCarousel>
        </div>
      </section>
    </div>
  );
}