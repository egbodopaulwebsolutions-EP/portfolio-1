import clsx from "clsx";

export default function HeadingWrap({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-[48rem]", className)}>
      {children}
    </div>
  );
}
