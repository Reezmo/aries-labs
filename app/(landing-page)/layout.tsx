import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "Pricing", href: "/#pricing" },
          { title: "Github", href: "https://github.com/reezmo", external: true },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Reamohetse Mphuthi"
        builtByLink="https:/github.com/reezmo"
        githubLink="https://github.com/reezmo"
        twitterLink="https://twitter.com/"
        linkedinLink="linkedin.com/"
      />
    </div>
  );
}
