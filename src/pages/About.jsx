import History from "../components/about/History";
import Team from "../components/about/Team";
import BookingSection from "../components/contact/BookingSection";
import Hero from "../components/Hero";

export default function About() {
  return (
    <div className="gap-between-elements">
        <Hero title="about us" img="hero-about.jpg" />
      <History />
      <BookingSection />
      <Team />
    </div>
  );
}
