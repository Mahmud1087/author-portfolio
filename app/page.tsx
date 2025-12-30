import LinkButton from "@/components/common/link-button";
import SocialLinks from "@/components/common/social-links";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full space-y-8 text-center">
        {/* Name + Positioning */}
        <header className="space-y-3">
          <h1 className="font-berkshire text-3xl text-purple-700 md:text-4xl">
            Rafiat Abdulazeez
          </h1>
          <p className="font-josefin text-base leading-relaxed text-gray-600 md:text-lg">
            Author • Nonfiction Book Coach • Personal Development Mentor
          </p>
        </header>

        {/* CTA Buttons */}
        <div className="mx-auto max-w-md space-y-4">
          <LinkButton href="/services/nonfiction-book-coaching">
            Nonfiction Book Coaching
          </LinkButton>

          <LinkButton href="/services/personal-development">
            Personal Development Coaching
          </LinkButton>

          <LinkButton href="/services/freelance-writing">
            Freelance Writing & Editing
          </LinkButton>

          <LinkButton href="/blog">Read the Blog</LinkButton>

          <LinkButton href="/contact" variant="secondary">
            Contact Me
          </LinkButton>
        </div>

        {/* Social Icons */}
        <SocialLinks />
      </section>
    </main>
  );
}
