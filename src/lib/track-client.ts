export function trackCommercialEvent({
  type,
  project,
  path,
  lang,
}: {
  type: string;
  project: string;
  path: string;
  lang: string;
}) {
  try {
    const getVisitorId = () => {
      const cookieName = "visitor_id=";
      const cookies = document.cookie.split(";");

      for (const cookie of cookies) {
        const trimmed = cookie.trim();
        if (trimmed.startsWith(cookieName)) {
          return trimmed.substring(cookieName.length);
        }
      }

      const id =
        globalThis.crypto?.randomUUID?.() ??
        `${Date.now()}-${Math.random().toString(36).slice(2)}`;

      document.cookie = `visitor_id=${id}; path=/; max-age=31536000; samesite=lax`;
      return id;
    };

    const payload = JSON.stringify({
      type,
      project,
      path,
      lang,
      visitorId: getVisitorId(),
      referrer: document.referrer || null,
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/track", blob);
      return;
    }

    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {}
}