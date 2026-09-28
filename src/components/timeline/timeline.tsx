import type { TeamMilestone } from "@/types/nosa";

export function Timeline({ milestones }: { milestones: TeamMilestone[] }) {
  return (
    <ol className="space-y-5">
      {milestones.map((milestone, index) => (
        <li key={`${milestone.year}-${milestone.title}`} className="relative pl-8">
          <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-nosa-accent" />
          {index < milestones.length - 1 && (
            <span className="absolute left-[5px] top-5 h-[calc(100%+16px)] w-px bg-nosa-border" />
          )}
          <p className="text-sm text-nosa-accent">{milestone.year}</p>
          <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
          <p className="text-nosa-muted">{milestone.description}</p>
        </li>
      ))}
    </ol>
  );
}
