"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  items?: {
    name: string;
    link: string;
  }[];
};

const Navbar = ({ items }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-purple-50 py-5 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        <Logo />
        <section className="flex gap-5 lg:gap-9">
          {items?.map((item, i) => {
            return (
              <Link
                className={cn(
                  "transition-all",
                  pathname === item.link
                    ? "border-b-2 border-b-purple-400 text-purple-700"
                    : "hover:border-b-2 hover:border-b-purple-400 hover:text-purple-700",
                )}
                key={i}
                href={item.link}
              >
                {item.name}
              </Link>
            );
          })}
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
