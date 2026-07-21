import {
  Gauge,
  Dumbbell,
  Trophy,
  UtensilsCrossed,
  MessageSquare,
  Store,
  Calendar,
  Users,
  Target,
  Activity,
  LineChart,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  gauge: Gauge,
  dumbbell: Dumbbell,
  trophy: Trophy,
  utensils: UtensilsCrossed,
  message: MessageSquare,
  store: Store,
  calendar: Calendar,
  users: Users,
  target: Target,
  activity: Activity,
  "line-chart": LineChart,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? Activity;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden />;
}
