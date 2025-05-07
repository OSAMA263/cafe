import AnimateElement from "../AnimateElement";
import Button from "../Button";
import LayoutContainer from "../LayoutContainer";

export default function BookingSection() {
  return (
    <section id="booking" className="bg-gray py-28">
      <AnimateElement>
        <LayoutContainer className="flex flex-col items-center gap-16">
          <h1 className="text-sky uppercase text-3xl font-semibold font-serif tracking-wider">
            MAKE A RESERVATION
          </h1>
          <form action="/contact" className="space-y-16">
            <div className="flex gap-x-4">
              <input
                className="form-input"
                required
                placeholder="1 Person"
                type="text"
              />
              <input
                className="form-input"
                required
                placeholder="07/07/2032"
                type="text"
              />
              <input
                className="form-input"
                required
                placeholder="05:00 AM"
                type="text"
              />
            </div>
            <Button
              as="button"
              className="mx-auto block bg-white"
              type="submit"
            >
              Book Now
            </Button>
          </form>
        </LayoutContainer>
      </AnimateElement>
    </section>
  );
}
