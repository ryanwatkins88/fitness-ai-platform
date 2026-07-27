import type { ContentBlock } from "@/content/blog";

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-blog">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="mt-10 text-xl font-bold tracking-tight first:mt-0">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="mt-4 leading-relaxed text-ink/70">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
