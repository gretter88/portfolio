// src/lib/sghub-portfolio-links.ts

const SG_HUB_ORIGIN = "https://www.sghub.com.uy";

export function buildSgHubPortfolioUrl(
  hrefOrPath: string,
  content: string
) {
  const url = new URL(hrefOrPath, SG_HUB_ORIGIN);

  url.searchParams.set(
    "utm_source",
    "santiagogretter.com.uy"
  );
  url.searchParams.set(
    "utm_medium",
    "portfolio"
  );
  url.searchParams.set(
    "utm_campaign",
    "sg_hub_market"
  );
  url.searchParams.set(
    "utm_content",
    content
  );

  return url.toString();
}
