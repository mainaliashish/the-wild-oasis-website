"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";

function Logo() {
  const pathname = usePathname();
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        priority
        height="60"
        width="60"
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span
        className={`text-xl font-semibold  ${
          pathname === "/" ? "text-accent-400" : "text-primary-100"
        }`}
      >
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
