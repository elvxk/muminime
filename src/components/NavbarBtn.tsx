import Link from "next/link";

const NavbarBtn = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} className="group relative hover:scale-110 transition-all">
      <span className="relative z-10">{text}</span>
      <span className="w-full duration-300 scale-x-0 group-hover:scale-x-125 -rotate-3 transition-all h-full -translate-x-full bg-warning absolute" />
    </Link>
  );
};
export default NavbarBtn;
