import AnimateElement from "./AnimateElement";
import Hero from "./Hero";
import LayoutContainer from "./LayoutContainer";

const images = ["/footer1.jpg", "/footer2.jpg", "/footer3.jpg", "/footer4.jpg"];

export default function FollowUs() {
  return (
    <LayoutContainer as="section" className="space-y-10" id="follow-us">
      <Hero title="follow on instagram" />
      <div className="flex justify-between flex-wrap gap-y-4">
        {images.map((src, i) => (
          <AnimateElement key={src} i={i}>
            <img src={src} alt={src} />
          </AnimateElement>
        ))}
      </div>
    </LayoutContainer>
  );
}
