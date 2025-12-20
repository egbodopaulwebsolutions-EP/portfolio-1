import Image from "next/image";
import { Children } from "react";

type TripleRingImageProps = {

  size?: number;
  children:React.ReactNode,
};

export default function TripleRingImage({
 
  size = 240,
  children
}: TripleRingImageProps) {
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Divide circle into 3 equal arcs
  const arc = circumference / 3;

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      {/* SVG Ring */}
      <svg
        className="absolute inset-0 rotate-[-90deg]"
        width={size}
        height={size}
      >
        {/* Arc 1 */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="var(--color-primary)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arc} ${circumference}`}
          strokeDashoffset={0}
        />

        {/* Arc 2 */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="var(--color-secondary)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arc} ${circumference}`}
          strokeDashoffset={-arc}
        />

        {/* Arc 3 */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arc} ${circumference}`}
          strokeDashoffset={-arc * 2}
        />
      </svg>

      {/* Image */}
      <div className="absolute inset-[10px] rounded-full overflow-hidden bg-neutral-100">
        {children}
      </div>
    </div>
  );
}
{/*<Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />*/}