import { Briefcase } from "lucide-react";

interface CompanyProfileCardProps {
  companyName: string;
  industry: string;
  currentJobs: number;
  avatarUrl?: string;
}

export function CompanyProfileCard({
  companyName,
  industry,
  currentJobs,
  avatarUrl,
}: CompanyProfileCardProps) {
  return (
    <div className="max-w-5xl p-10 bg-gradient-to-b from-neutral-50 to-neutral-50 rounded-xl border border-zinc-200 flex justify-between items-center mx-auto">
      {/* Company Info Section */}
      <div className="flex items-center gap-6">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full border-[6px] border-black bg-black flex items-center justify-center">
          {avatarUrl ? (
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={`${companyName} logo`}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-3 h-3 bg-white rounded-full" />
          )}
        </div>

        {/* Company Details */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-black text-xl font-normal font-sans leading-relaxed">
            {companyName}
          </h2>
          <p className="text-neutral-600 text-base font-normal font-sans leading-normal">
            {industry}
          </p>
        </div>
      </div>

      {/* Job Stats Section */}
      <div className="w-80 px-6 py-5 bg-blue-50 rounded flex items-center gap-6">
        {/* Icon Container */}
        <div className="w-16 h-16 p-4 bg-white rounded-md flex items-center justify-center">
          <Briefcase className="w-8 h-8 text-blue-700" />
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-900 text-2xl font-semibold font-sans leading-7">
            {currentJobs}
          </span>
          <span className="text-zinc-900/80 text-lg font-normal font-sans leading-tight">
            Current Job{currentJobs !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
