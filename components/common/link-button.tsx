import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
}: Props) {
  const base = "block w-full rounded-xl px-6 py-3.5 font-medium transition";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "border border-purple-500 text-purple-700 hover:bg-purple-50",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
