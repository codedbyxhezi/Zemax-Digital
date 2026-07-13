type JsonLdObject = Record<string, unknown>;

type SeoJsonLdProps = {
  data: JsonLdObject | JsonLdObject[];
};

export function SeoJsonLd({ data }: SeoJsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}