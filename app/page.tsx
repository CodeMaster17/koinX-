import FAQ from "@/components/home-page/faq-section/FAQ";
import HeroArea from "@/components/home-page/hero-section/HeroArea";
import NewsletterComponent from "@/components/home-page/newsletter-subscribe-component/Newsletter-Component";
import SignUpBlueCard from "@/components/home-page/sign-up-blue-card/SignUpBlueCard";

export default function Home() {
  return (
    <main className="w-full">
      <div className="lg:flex lg:w-[90%] lg:mx-auto" >
        <HeroArea />
        <SignUpBlueCard />
      </div>
      <FAQ />
      <NewsletterComponent />
    </main>
  )
}
