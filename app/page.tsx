import LinkButton from "@/components/common/link-button";
import SocialLinks from "@/components/common/social-links";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* Replace the URL below with your actual image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000')`,
          }}
        ></div>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-pink-900/30 to-amber-900/40"></div>

        {/* Additional blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Content with enhanced glassmorphism */}
      <section className="relative z-10 w-fit space-y-8 rounded-3xl bg-white/65 p-8 text-center shadow-2xl backdrop-blur-md md:p-12">
        {/* Name + Positioning */}
        <header className="space-y-3">
          <h1 className="font-berkshire text-3xl text-purple-700 md:text-4xl">
            Rafiat Abdulazeez
          </h1>
          <p className="font-josefin text-base leading-relaxed text-gray-700 md:text-lg">
            Author • Nonfiction Book Coach • Personal Development Enthusiast
          </p>
        </header>

        {/* CTA Buttons */}
        <div className="mx-auto max-w-md space-y-4">
          <LinkButton href="/about">About Me</LinkButton>

          <LinkButton href="/services/books">Published Books</LinkButton>

          <LinkButton href="/blog">Blogs Posts</LinkButton>

          <LinkButton href="https://www.upwork.com/freelancers/~01931f18e92b140a8c?mp_source=share">
            Find Me on Upwork
          </LinkButton>

          <LinkButton href="/contact">Contact Me</LinkButton>
        </div>

        {/* Social Icons */}
        <SocialLinks />
      </section>
    </main>
  );
}
