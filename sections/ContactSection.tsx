import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[700px] text-center"
    >
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
        </RoughNotation>
      </div>
      <div className="mt-8 mb-20">
        <h3 className="font-medium text-lg mb-2 md:text-3xl" ref={elementRef}>
          Let's be awesome together!
        </h3>
        <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
          I'm a passionate Computer Science student with expertise in web development and data analysis.
          If you're interested in collaborating on projects, discussing opportunities, or just want to say hi,
          feel free to reach out to me through any of these channels:
        </p>
        <div className="space-y-4 mb-8">
          <p className="text-lg">📧 Email: tejamallam.work@gmail.com</p>
          <p className="text-lg">📱 Phone: +91 6303 96 5866</p>
          <p className="text-lg">🌐 Location: Hyderabad, India</p>
        </div>
        <LinkButton href="mailto:tejamallam.work@gmail.com">
          Send me an email
        </LinkButton>
      </div>
    </section>
  );
};

export default ContactSection;
