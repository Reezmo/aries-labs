import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo(props: { className?: string, link?: string }) {
  return (
    <Link href={props.link ?? '/'} className={cn("items-center space-x-2", props.className)}>
      <span className="font-bold sm:inline-block">Aries Labs</span>
      {/* <img src="./assets/logo/logo.jpg" alt="" className="h-12 w-12 fill-current" /> */}
    </Link>
  );
}
