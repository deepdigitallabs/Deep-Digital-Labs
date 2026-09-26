import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional, defaults to false. Reverse the animation direction.
   */
  reverse?: boolean;
  /**
   * Optional, defaults to false. Pause the animation on hover.
   */
  pauseOnHover?: boolean;
  /**
   * Optional, defaults to 4. Number of times to repeat children.
   */
  repeat?: number;
  /**
   * Optional, defaults to false. Animate vertically.
   */
  vertical?: boolean;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
