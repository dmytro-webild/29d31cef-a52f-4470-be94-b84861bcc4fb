import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import HeroBillboardCreator from "@/components/sections/hero/HeroBillboardCreator";
import TestimonialSplitCards from "@/components/sections/testimonial/TestimonialSplitCards";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      
      <main className="flex-grow">
        <ContactSplitForm
          tag="Contact Us"
          title="Let's start a conversation"
          description="Fill out the form below with your name, contact details, and relevant information. Our team will get back to you promptly."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your needs...", required: true, rows: 5 }}
          buttonText="Submit Inquiry"
          imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop"
        />

        <HeroBillboardCreator
          tag="A Note on Growth"
          title="Building for the future"
          description="We believe in sustainable growth, fostering strong partnerships, and building products that stand the test of time."
          primaryButton={{ text: "Read our story", href: "/about" }}
          note="Peter H."
          badgeText="Founder's Vision"
          videos={[
            {
              videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
              name: "Peter H.",
              followers: "Founder & CEO",
              imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
            }
          ]}
        />

        <TestimonialSplitCards
          tag="Client Success"
          title="Trusted by industry leaders"
          description="See what our partners have to say about their experience working with us."
          testimonials={[
            {
              tag: "Transformative",
              title: "Incredible Partnership",
              quote: "Working with this team has completely transformed our trajectory. Their dedication to our growth is unmatched.",
              name: "Elena P.",
              role: "CEO, TechCorp",
              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2940&auto=format&fit=crop"
            },
            {
              tag: "Reliable",
              title: "Consistent Results",
              quote: "They consistently deliver high-quality work on time and within budget. A truly reliable partner.",
              name: "Marcus T.",
              role: "Director of Operations",
              imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2940&auto=format&fit=crop"
            }
          ]}
        />
      </main>

      <FooterSimple
        brand="Webild"
        copyright="© 2024 Webild. All rights reserved."
        columns={[
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}