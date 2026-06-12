export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Santiago Gretter",
    url: "https://www.santiagogretter.com.uy",
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Santiago Gretter Software Studio",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "SaaS",
      "Mobile Apps",
      "Software Development",
      "Functional Analysis",
    ],
    sameAs: [
      "https://www.linkedin.com/in/santiago-gretter",
      "https://github.com/gretter88",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}