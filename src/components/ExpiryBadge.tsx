import { cn } from "@/lib/utils";
import { getExpiryStatus } from "@/data/sample-data";

interface ExpiryBadgeProps {
  daysToExpiry: number;
  className?: string;
}

export function ExpiryBadge({ daysToExpiry, className }: ExpiryBadgeProps) {
  const status = getExpiryStatus(daysToExpiry);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        status === "safe" && "bg-expiry-safe/15 text-expiry-safe",
        status === "warning" && "bg-expiry-warning/15 text-expiry-warning",
        status === "danger" && "bg-expiry-danger/15 text-expiry-danger",
        className
      )}
    >
      {daysToExpiry}d left
    </span>
  );
}
