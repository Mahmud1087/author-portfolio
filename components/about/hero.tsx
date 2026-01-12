import Image from "next/image";
import { Button } from "../ui/button";
import SocialLinks from "../common/social-links";

const AboutHeroSection = () => {
  return (
    <div className="flex-center relative min-h-[80vh] bg-purple-100 lg:min-h-[110vh]">
      <section className="container hidden px-8 lg:block">
        <div className="absolute top-0 left-0 h-full w-2/5">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            //   src={
            //     "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            //   }
            alt="Background Image"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/40" />
        </div>
        <aside className="wrapper lg:px-44">
          <div className="relative h-120 w-140">
            <aside className="absolute top-0 left-0 h-full w-full rounded-xl bg-black/50" />
            <Image
              src={
                "https://images.unsplash.com/photo-1680977228133-b1f9634ad044?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Author Image"
              width={600}
              height={600}
              className="h-full w-full rounded-xl object-cover shadow-xl drop-shadow-2xl"
            />
            <h1 className="absolute top-1/2 -right-120 -translate-y-1/2 text-6xl text-purple-800">
              <span className="text-orange-400">Rafia</span>t O. Abdulazeez
              <br />
              <span className="font-josefin text-4xl">
                <span className="font-semibold text-orange-400">Muslim</span>ah,
                Author, Coach, Freelancer
              </span>
            </h1>
          </div>
        </aside>
      </section>

      <section className="lg:hidden">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={1000}
            height={100}
            alt="mobile hero bg"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-black/70" />
        <aside className="relative z-10 flex flex-col items-center justify-center gap-3.5">
          <h1 className="text-center text-5xl text-white md:text-6xl">
            Rafiat O. Abdulazeez
            <br />
            <span className="font-josefin text-2xl md:text-4xl">
              Muslimah, Author, Coach, Freelancer
            </span>
          </h1>
          <Button size={"lg"}>Contact me</Button>
          <div className="mt-5 rounded-full border bg-purple-300 px-4 pb-4 shadow-xl">
            <SocialLinks />
          </div>
        </aside>
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-pink-900/30 to-amber-900/40"></div>
      </section>
    </div>
  );
};
export default AboutHeroSection;
