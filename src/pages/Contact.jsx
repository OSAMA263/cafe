import Button from "../components/Button";
import Hero from "../components/Hero";
import LayoutContainer from "../components/LayoutContainer";

const locations = [
  { name: "call us", info: "+2042069911" },
  { name: "our location", info: "main street 123" },
  { name: "write to us", info: "oursite@swebits.com" },
  { name: "follow us", info: "instagram.com/ourplace" },
];

export default function Contact() {
  return (
    <div className="gap-between-elements">
      <Hero title="Contact Us" />
      {/* locations and ways to get in contact */}
      <LayoutContainer className="flex justify-between">
        {locations.map(({ name, info }) => (
          <div key={name} className="space-y-4 text-center text-2xl">
            <h1 className="text-dark-blue capitalize font-semibold font-serif">
              {name}
            </h1>
            <p className="text-gray text-base">{info}</p>
          </div>
        ))}
      </LayoutContainer>
      {/* leave a message form */}
      <div className="bg-gray py-20">
        <LayoutContainer className="flex flex-col items-center gap-10">
          <h1 className="text-sky uppercase text-3xl font-semibold font-serif tracking-wider">leave us a message</h1>
          {/* form */}
          <form className="space-y-8 w-1/2 flex flex-col">
            <input
              required
              className="form-input"
              type="text"
              placeholder="Name"
            />
            <input
              required
              className="form-input"
              type="email"
              placeholder="Email"
            />
            <textarea
              required
              className="form-input"
              name="message"
              id="message"
              placeholder="Your Message..."
              rows={5}
            ></textarea>
            <Button as="button" type="submit" variant="light">
              Send message
            </Button>
          </form>
        </LayoutContainer>
      </div>
    </div>
  );
}
