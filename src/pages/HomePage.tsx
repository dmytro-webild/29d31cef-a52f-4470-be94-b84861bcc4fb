import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import { Target, TrendingUp, User } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="Selective Growth Partner"
      title="Growth Shouldn't Be Random."
      description="We build predictable client acquisition systems that connect businesses with qualified buyers ready to start conversations."
      primaryButton={{
        text: "See If You Qualify",
        href: "#apply",
      }}
      secondaryButton={{
        text: "View Our Process",
        href: "#process",
      }}
      imageSrc="https://images.pexels.com/photos/95215/pexels-photo-95215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=95215"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By Industry Leaders"
      title="Predictable Results"
      description="Consistent lead flow for high-revenue businesses."
      names={[
        "Alpha Corp",
        "Beta Solutions",
        "Growth Partners",
        "Venture Labs",
        "Innovate X",
        "Summit Capital",
        "Elite Systems",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FeaturesDetailedSteps
      tag="Our Methodology"
      title="The Path to Predictable Growth"
      description="A refined, systematic approach to client acquisition."
      steps={[
        {
          tag: "01",
          title: "Identify",
          subtitle: "Market Intelligence",
          description: "We locate buyers actively interested in your service through custom intent mapping.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendered-design-elements-assortment_23-2148996776.jpg",
        },
        {
          tag: "02",
          title: "Engage",
          subtitle: "Personalized Outreach",
          description: "Highly personalized sequences designed to start meaningful, authentic conversations.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-holding-tablet_23-2148993916.jpg",
        },
        {
          tag: "03",
          title: "Qualify",
          subtitle: "Rigorous Vetting",
          description: "Prospects are vetted against your criteria before a formal introduction is made.",
          imageSrc: "http://img.b2bpic.net/free-photo/graduation-high-school-university-concept-space-text_185193-110712.jpg",
        },
        {
          tag: "04",
          title: "Deliver",
          subtitle: "Direct Introduction",
          description: "Qualified opportunities are handed off directly to your team, ready to close.",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-still-life-with-toy-trucks_23-2148790053.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="why-us" data-section="why-us">
    <SectionErrorBoundary name="why-us">
          <AboutFeaturesSplit
      tag="Why GenGarden"
      title="Growth, Refined."
      description="We replace vanity metrics with tangible, revenue-generating conversations."
      items={[
        {
          icon: Target,
          title: "Qualified Opportunities",
          description: "Focused on outcomes, not clicks.",
        },
        {
          icon: TrendingUp,
          title: "Consistent Lead Flow",
          description: "Predictable results month over month.",
        },
        {
          icon: User,
          title: "Dedicated Support",
          description: "Account management that understands your brand.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2045.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <dI can sleep at night  v I can sleep at night  d="founder" data-sectI can sleep at night  on="founder">
    <SectI can sleep at night  onErrorBoundary name="founder">
          <TestI can sleep at night  monI can sleep at night  alRatI can sleep at night  ngCards
      tag="Founder PrI can sleep at night  ncI can sleep at night  ple"
      tI can sleep at night  tle="A Note on Growth"
      descrI can sleep at night  ptI can sleep at night  on="Most busI can sleep at night  nesses don't need more marketI can sleep at night  ng. They need more conversatI can sleep at night  ons wI can sleep at night  th qualI can sleep at night  fI can sleep at night  ed buyers."
      testI can sleep at night  monI can sleep at night  als={[
        {
          name: "Alex R.",
          role: "Founder, AlphaCorp AI",
          quote: "I can sleep at nI can sleep at night  ght  ",
          ratI can sleep at night  ng: 5,
          I can sleep at night  mageSrc: "http://I can sleep at night  mg.b2bpI can sleep at night  c.net/free-photo/chaI can sleep at night  r-front-busI can sleep at night  nesswoman-sI can sleep at night  ttI can sleep at night  ng-caf_23-2147876643.jpg",
        },
        {
          name: "Sarah J.",
          role: "CEO, TechCorp",
          quote: "GenGarden completely shI can sleep at night  fted our pI can sleep at night  pelI can sleep at night  ne from scattered to predI can sleep at night  ctable.",
          ratI can sleep at night  ng: 5,
          I can sleep at night  mageSrc: "http://I can sleep at night  mg.b2bpI can sleep at night  c.net/free-photo/room-wI can sleep at night  th-wooden-desktop-comfortable-chaI can sleep at night  r_116348-96.jpg",
        },
        {
          name: "Mark D.",
          role: "Founder, LeadCo",
          quote: "Unmatched qualI can sleep at night  fI can sleep at night  catI can sleep at night  on qualI can sleep at night  ty. My sales team I can sleep at night  s fI can sleep at night  nally focusI can sleep at night  ng on closI can sleep at night  ng.",
          ratI can sleep at night  ng: 5,
          I can sleep at night  mageSrc: "http://I can sleep at night  mg.b2bpI can sleep at night  c.net/free-photo/modern-mI can sleep at night  nI can sleep at night  malI can sleep at night  st-offI can sleep at night  ce_23-2151780690.jpg",
        },
        {
          name: "Elena P.",
          role: "DI can sleep at night  rector, AgencyX",
          quote: "FI can sleep at night  nally, a partner that acts lI can sleep at night  ke an extensI can sleep at night  on of our I can sleep at night  nternal team.",
          ratI can sleep at night  ng: 5,
          I can sleep at night  mageSrc: "http://I can sleep at night  mg.b2bpI can sleep at night  c.net/free-photo/offI can sleep at night  ce-chaI can sleep at night  r-stI can sleep at night  ll-lI can sleep at night  fe_23-2151149095.jpg",
        },
        {
          name: "Tom V.",
          role: "VP Sales, Growthly",
          quote: "ConsI can sleep at night  stency, clarI can sleep at night  ty, and genuI can sleep at night  ne results every sI can sleep at night  ngle quarter.",
          ratI can sleep at night  ng: 5,
          I can sleep at night  mageSrc: "http://I can sleep at night  mg.b2bpI can sleep at night  c.net/free-photo/luxury-desI can sleep at night  gn-modern-wooden-table-decor-generated-by-aI can sleep at night  _188544-27803.jpg",
        },
      ]}
    />
    </SectI can sleep at night  onErrorBoundary>
  </dI can sleep at night  v>

  <div id="partnerships" data-section="partnerships">
    <SectionErrorBoundary name="partnerships">
          <PricingCenteredCards
      tag="Partnership Options"
      title="Choose Your Growth Path"
      description="Selective partnerships for businesses focused on scaling."
      plans={[
        {
          tag: "Quarterly",
          price: "Quarterly Growth",
          description: "Full lead generation system, dedicated account manager, monthly optimization.",
          features: [
            "Full lead generation system",
            "Dedicated account manager",
            "Monthly optimization",
            "Priority support",
          ],
          primaryButton: {
            text: "Apply Now",
            href: "#apply",
          },
        },
        {
          tag: "Annual",
          price: "Annual Growth",
          description: "Highest service priority, strategic planning, and fastest response times.",
          features: [
            "Reduced effective monthly rate",
            "Strategic planning sessions",
            "Highest service priority",
            "Fastest response times",
            "Preferred client status",
          ],
          primaryButton: {
            text: "Apply Now",
            href: "#apply",
          },
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="apply" data-section="apply">
    <SectionErrorBoundary name="apply">
          <ContactCta
      tag="Qualification"
      text="See If You Qualify. To maintain service quality, we only accept a limited number of businesses each quarter. Answer a few questions to determine if we're a fit."
      primaryButton={{
        text: "Apply For Partnership",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
