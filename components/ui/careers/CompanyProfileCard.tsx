// import { Briefcase } from "lucide-react";

// interface CompanyProfileCardProps {
//   companyName: string;
//   industry: string;
//   currentJobs: number;
//   avatarUrl?: string;
// }

// export function CompanyProfileCard({
//   companyName,
//   industry,
//   currentJobs,
//   avatarUrl,
// }: CompanyProfileCardProps) {
//   return (
//     <div className="max-w-5xl p-10 bg-gradient-to-b from-neutral-50 to-neutral-50 rounded-xl border border-zinc-200 flex justify-between items-center mx-auto">
//       {/* Company Info Section */}
//       <div className="flex items-center gap-6">
//         {/* Avatar */}
//         <div className="w-20 h-20 rounded-full border-[6px] border-black bg-black flex items-center justify-center">
//           {avatarUrl ? (
//             <img
//               src={avatarUrl || "/placeholder.svg"}
//               alt={`${companyName} logo`}
//               className="w-8 h-8 rounded-full"
//             />
//           ) : (
//             <div className="w-3 h-3 bg-white rounded-full" />
//           )}
//         </div>

//         {/* Company Details */}
//         <div className="flex flex-col gap-2.5">
//           <h2 className="text-black text-xl font-normal font-sans leading-relaxed">
//             {companyName}
//           </h2>
//           <p className="text-neutral-600 text-base font-normal font-sans leading-normal">
//             {industry}
//           </p>
//         </div>
//       </div>

//       {/* Job Stats Section */}
//       <div className="w-80 px-6 py-5 bg-blue-50 rounded flex items-center gap-6">
//         {/* Icon Container */}
//         <div className="w-16 h-16 p-4 bg-white rounded-md flex items-center justify-center">
//           <Briefcase className="w-8 h-8 text-blue-700" />
//         </div>

//         {/* Stats */}
//         <div className="flex items-center gap-4">
//           <span className="text-zinc-900 text-2xl font-semibold font-sans leading-7">
//             {currentJobs}
//           </span>
//           <span className="text-zinc-900/80 text-lg font-normal font-sans leading-tight">
//             Current Job{currentJobs !== 1 ? "s" : ""}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className="w-full max-w-5xl p-6 sm:p-10 bg-gradient-to-b from-neutral-50 to-neutral-50 rounded-xl border border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-6 mx-auto">
      {/* Company Info Section */}
      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
        {/* Avatar */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[4px] sm:border-[6px] border-black bg-black flex items-center justify-center shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={`${companyName} logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            />
          ) : (
            <div className="w-3 h-3 bg-white rounded-full" />
          )}
        </div>

        {/* Company Details */}
        <div className="flex flex-col gap-1.5 sm:gap-2.5">
          <h2 className="text-black text-lg sm:text-xl font-medium sm:font-normal font-sans leading-relaxed">
            {companyName}
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-normal font-sans leading-normal">
            {industry}
          </p>
        </div>
      </div>

      {/* Job Stats Section */}
      {/* <div className="w-full sm:w-80 px-4 py-4 sm:px-6 sm:py-5 bg-blue-50 rounded flex items-center gap-4 sm:gap-6">
      
        <div className="w-12 h-12 sm:w-16 sm:h-16 p-3 sm:p-4 bg-white rounded-md flex items-center justify-center">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-zinc-900 text-xl sm:text-2xl font-semibold font-sans leading-7">
            {currentJobs}
          </span>
          <span className="text-zinc-900/80 text-base sm:text-lg font-normal font-sans leading-tight">
            Current Job{currentJobs !== 1 ? "s" : ""}
          </span>
        </div>
      </div> */}

      <div className="w-full sm:w-80 px-4 py-4 sm:px-6 sm:py-5 bg-blue-50 rounded flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
        {/* Icon Container */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 p-3 sm:p-4 bg-white rounded-md flex items-center justify-center">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-zinc-900 text-xl sm:text-2xl font-semibold font-sans leading-7">
            {currentJobs}
          </span>
          <span className="text-zinc-900/80 text-base sm:text-lg font-normal font-sans leading-tight">
            Current Job{currentJobs !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
