"use client";

import Link from "next/link";
import { trackCommercialEvent } from "@/lib/track-client";

type Props = {
  href: string;
  children: React.ReactNode;
  type: string;
  project: string;
  lang: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
};

export default function TrackedCommercialLink({
  href,
  children,
  type,
  project,
  lang,
  className,
  style,
  target,
  rel,
}: Props) {
  const isExternal = href.startsWith("http") || target === "_blank";

  const handleClick = () => {
  trackCommercialEvent({
    type,
    project,
    path: href,
    lang,
  });
};
  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={style}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}