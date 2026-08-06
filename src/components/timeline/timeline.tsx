import type { TeamMilestone } from "@/types/nosa";

export function Timeline({ milestones }: { milestones: TeamMilestone[] }) {
  return (
    <ol className="space-y-5">
      {milestones.map((milestone, index) => (
        <li key={`${milestone.year}-${milestone.title}`} className="relative pl-8">
          <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-sky-400" />
          {index < milestones.length - 1 && (
            <span className="absolute left-[5px] top-5 h-[calc(100%+16px)] w-px bg-slate-700" />
          )}
          <p className="text-sm text-sky-200">{milestone.year}</p>
          <h3 className="text-lg font-semibold text-slate-100">{milestone.title}</h3>
          <p className="text-slate-300">{milestone.description}</p>
        </li>
      ))}
    </ol>
  );
}
