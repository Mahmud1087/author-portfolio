import Image from "next/image";
import { Button } from "../ui/button";

const BioSection = () => {
  return (
    <section id="bio" className="wrapper px-4 md:px-16 lg:container lg:px-8">
      <div className="mt-5 flex flex-col gap-16 px-4 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-32">
        <aside className="w-full">
          <h1 className="mb-5 font-berkshire text-3xl md:text-5xl">My Bio</h1>
          <p className="mb-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nemo.
            Totam eius repellendus assumenda aut culpa nesciunt laboriosam sed
            ipsum iure voluptatum exercitationem aperiam incidunt, veritatis sit
            odit cum unde fugiat maiores magni. Dicta harum molestiae minima
            dolorum consectetur veritatis doloribus, dolorem alias ea officiis,
            est aut ducimus voluptatibus soluta?
          </p>
          <Button size={"lg"} className="text-base">
            Send Me a Message
          </Button>
        </aside>
        <aside className="w-full">
          <aside className="relative mx-auto h-130 w-full lg:w-120">
            <Image
              src={
                "https://images.unsplash.com/photo-1641464587469-fa15d2220930?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Author Image"
              width={1000}
              height={1000}
              className="h-full w-full rounded-lg object-cover shadow-xl drop-shadow-2xl"
            />
          </aside>
        </aside>
      </div>
    </section>
  );
};
export default BioSection;
