export default function StoryCard({
  title,
  items,
  index,
}: {
  title: string;
  items: string[];
  index: number;
}) {
  return (
    <article
      data-story-card
      className="
        min-w-full lg:min-w-[520px]
        rounded-3xl bg-white p-12
        border border-neutral-200/60
        shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        relative
      "
    >
      <span className="absolute -top-6 left-12 text-xs uppercase tracking-widest text-neutral-400">
        Step {index + 1}
      </span>

      <h3 className="text-3xl font-semibold mb-8">
        {title}
      </h3>

      <ul className="space-y-6">
        {items.map((item, i) => (
          <li key={i} className="text-neutral-700 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
