"use client";

import React from "react";

import {
  trackPortfolioEvent,
} from "@/lib/track-client";

type Props = {
  href: string;
  trackPath: string;
  lang?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
};

export default function TrackedLink({
  href,
  trackPath,
  lang,
  className,
  style,
  children,
  target,
  rel,
}: Props) {
  function handleClick() {
    trackPortfolioEvent({
      type: "click",
      path: trackPath,
      lang: lang || null,
    });
  }

  return (
    <a
      href={href}
      className={className}
      style={style}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}