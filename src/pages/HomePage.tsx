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

  <div id="founder" data-section="founder">
    <SectionErrorBoundary name="founder">
          <TestimonialRatingCards
      tag="Founder Principle"
      title="A Note on Growth"
      description="Most businesses don't need more marketing. They need more conversations with qualified buyers."
      testimonials={[
        {
          name: "Alex River",
          role: "Founder, GenGarden",
          quote: "Growth comes from consistently putting the right offer in front of the right people. We focus on conversations, not noise.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/chair-front-businesswoman-sitting-caf_23-2147876643.jpg",
        },
        {
          name: "Sarah J.",
          role: "CEO, TechCorp",
          quote: "GenGarden completely shifted our pipeline from scattered to predictable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/room-with-wooden-desktop-comfortable-chair_116348-96.jpg",
        },
        {
          name: "Mark D.",
          role: "Founder, LeadCo",
          quote: "Unmatched qualification quality. My sales team is finally focusing on closing.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-minimalist-office_23-2151780690.jpg",
        },
        {
          name: "Elena P.",
          role: "Director, AgencyX",
          quote: "Finally, a partner that acts like an extension of our internal team.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/office-chair-still-life_23-2151149095.jpg",
        },
        {
          name: "Tom V.",
          role: "VP Sales, Growthly",
          quote: "Consistency, clarity, and genuine results every single quarter.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-design-modern-wooden-table-decor-generated-by-ai_188544-27803.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

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
