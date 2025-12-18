type ContainerSize = "narrow" | "default" | "wide" | "full";
interface ContainerProps {
  size?: ContainerSize;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}
export default function Container({
  size = "default",
  center = false,
  className = "",
  children,
}: ContainerProps) {
  const sizes: Record<ContainerSize, string> = {
    narrow: "max-w-3xl",
    default: "max-w-5xl",
    wide: "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <div
      className={`
        mx-auto px-6
        ${sizes[size]}
        ${center ? "flex flex-col items-center text-center" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
