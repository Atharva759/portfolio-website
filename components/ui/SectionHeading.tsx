type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">

      <p className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-2">
        {title}
      </h2>

      <div className="mt-5 w-20 h-1 rounded bg-blue-500" />

    </div>
  );
}