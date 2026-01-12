import BioSection from "@/components/about/bio";
import AboutHeroSection from "@/components/about/hero";
import BackToTopButton from "@/components/common/back-to-top";
import Navbar from "@/components/common/navbar";

const items = [
  // {
  //   name: "Home",
  //   link: "/about",
  // },
  {
    name: "Bio",
    link: "/about/#bio",
  },
  {
    name: "Services",
    link: "/about/#services",
  },
  {
    name: "Contact",
    link: "/about/#contact_me",
  },
];

const AboutMePage = () => {
  return (
    <div>
      <Navbar items={items} />
      <main className="min-h-[220vh] w-full">
        <AboutHeroSection />
        <BioSection />
      </main>
      <BackToTopButton />
    </div>
  );
};
export default AboutMePage;
