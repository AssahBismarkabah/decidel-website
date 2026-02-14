import Image from "next/image";
import { clsx } from "clsx";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className={clsx("relative mx-auto w-[260px] lg:w-[300px]", className)}>
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        className="w-full h-auto"
        priority={priority}
      />
    </div>
  );
}
