"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

const navLinks = [
  { name: "Register", href: "/user-registration" },
  { name: "Login", href: "/user-login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "font-bold text-red-500 mr-4" : "text-blue-500 mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
      <Link href="/">Home</Link>
    </div>
  );
}
