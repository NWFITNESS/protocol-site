/**
 * Registry of real product screenshots that exist in /public/screens.
 *
 * The <Screenshot> component renders a real next/image for any src listed here,
 * and a branded placeholder frame for the rest. To enable a real screenshot:
 *   1. Drop the image at /public/screens/<name>.png (dark app capture)
 *   2. Add its "/screens/<name>.png" path to READY_SCREENS below
 *
 * Shot list (paths referenced across the site — see src/lib/site.ts):
 *   /screens/calendar-builder.png    — coach calendar builder (hero + programming)
 *   /screens/session-percentages.png — a session with 5×3 @ 80% → working weight
 *   /screens/session-editor.png      — the section-based session editor
 *   /screens/metrics.png             — athlete metrics page with PRs
 *   /screens/metrics-graph.png       — a metric history graph
 *   /screens/pr-card.png             — PR celebration / share card
 *   /screens/athlete-home.png        — athlete home on a phone (variant="phone")
 *   /screens/library.png             — movement / benchmark library
 *   /screens/nutrition-targets.png   — macro targets
 *   /screens/nutrition-diary.png     — food diary
 *   /screens/meal-planner.png        — weekly meal planner
 *   /screens/messaging.png           — coach↔athlete chat
 *   /screens/forms.png               — forms / check-ins
 *   /screens/storefront.png          — branded storefront
 *   /screens/payments.png            — payments dashboard
 *   /screens/teams.png               — team roster
 *   /screens/team-invite.png         — team invite flow
 */
export const READY_SCREENS = new Set<string>([
  "/screens/calendar-builder.png",
  "/screens/session-percentages.png",
  "/screens/metrics.jpg",
  "/screens/athlete-home.jpg",
  "/screens/nutrition-targets.png",
  "/screens/storefront.png",
  "/screens/messaging.png",
]);
