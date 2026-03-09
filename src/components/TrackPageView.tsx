"use client";

import { useEffect } from "react";

function getVisitorId() {
  const cookieName = "visitor_id=";
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith(cookieName)) {
      return trimmed.substring(cookieName.length);
    }
  }

  const id = crypto.randomUUID();
  document.cookie = `visitor_id=${id}; path=/; max-age=31536000; samesite=lax`;
  return id;
}

//src/components/TrackPageView.tsx
type Props = {
  path: string;
  lang?: string;
};

export default function TrackPageView({ path, lang }: Props) {
  useEffect(() => {
    const visitorId = getVisitorId();

    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "pageview",
        path,
        lang,
        visitorId,
        referrer: document.referrer || null,
      }),
    }).catch(() => {});
  }, [path, lang]);

  return null;
}






