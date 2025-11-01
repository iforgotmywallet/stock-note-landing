import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface GroupAvatarProps {
  avatars: Array<{
    src?: string;
    fallback: string;
    alt?: string;
  }>;
  size?: "sm" | "md" | "lg";
  max?: number;
  className?: string;
}

export function GroupAvatar({
  avatars,
  size = "md",
  max = 4,
  className,
}: GroupAvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const displayAvatars = avatars.slice(0, max);
  const remainingCount = Math.max(0, avatars.length - max);

  return (
    <div className={cn("flex -space-x-2", className)}>
      {displayAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          className={cn(
            sizeClasses[size],
            "border-background ring-background border-2 bg-white ring-2 dark:bg-black",
          )}
        >
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          <AvatarFallback className="bg-white text-xs font-medium text-black dark:bg-black dark:text-white">
            {avatar.fallback}
          </AvatarFallback>
        </Avatar>
      ))}
      {remainingCount > 0 && (
        <Avatar
          className={cn(
            sizeClasses[size],
            "border-background ring-background border-2 bg-white ring-2 dark:bg-black",
          )}
        >
          <AvatarFallback className="bg-white text-xs font-medium text-black dark:bg-black dark:text-white">
            +{remainingCount}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
