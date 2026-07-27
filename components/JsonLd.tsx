type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Injects a schema.org JSON-LD block. Content is always author-authored, never user input. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
