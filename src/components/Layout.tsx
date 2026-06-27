import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Process",    "href": "#process"
  },
  {
    "name": "Why Us",    "href": "#why-us"
  },
  {
    "name": "Partnerships",    "href": "#partnerships"
  },
  {
    "name": "Hero",    "href": "#hero"
  },
  {
    "name": "Social Proof",    "href": "#social-proof"
  },
  {
    "name": "Founder",    "href": "#founder"
  },
  {
    "name": "Apply",    "href": "#apply"
  },
  { name: "Contact", href: "/contact" },

];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="GenGarden"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3B4njhQytmnEfqsURfc0omeJ1Xl/uploaded-1782578499546-t6ntkci9.png"
      ctaButton={{
        text: "Apply Now",        href: "#apply"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Methodology",              href: "#process"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      leftText="© 2024 Gen Garden. All rights reserved."
      rightText="Professional Growth Systems."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
