"use client";

import { useEffect } from "react";

type Props = {
  path: string;
  lang?: string;
};

export default function TrackPageView({ path, lang }: Props) {
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "pageview",
        path,
        lang,
        referrer: document.referrer || null,
      }),
    }).catch(() => {});
  }, [path, lang]);

  return null;
}