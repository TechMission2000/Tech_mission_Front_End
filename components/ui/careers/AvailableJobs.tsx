// const AvailableJobs = () => {
//   // Sample job data
//   const jobs = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       type: "Full Time",
//       location: "Remote",
//       experience: "2+ years",
//       applicationDeadline: "5 Days Remaining",
//       company: "TechCorp",
//       logo: "/api/placeholder/80/80",
//     },
//     {
//       id: 2,
//       title: "UX/UI Designer",
//       type: "Part Time",
//       location: "San Francisco, CA",
//       experience: "3+ years",
//       applicationDeadline: "2 Days Remaining",
//       company: "DesignHub",
//       logo: "/api/placeholder/80/80",
//     },
//     {
//       id: 3,
//       title: "Backend Engineer",
//       type: "Full Time",
//       location: "New York, NY",
//       experience: "4+ years",
//       applicationDeadline: "7 Days Remaining",
//       company: "DataSystems",
//       logo: "/api/placeholder/80/80",
//     },
//     {
//       id: 4,
//       title: "DevOps Specialist",
//       type: "Contract",
//       location: "Remote",
//       experience: "5+ years",
//       applicationDeadline: "3 Days Remaining",
//       company: "CloudTech",
//       logo: "/api/placeholder/80/80",
//     },
//     {
//       id: 5,
//       title: "Product Manager",
//       type: "Full Time",
//       location: "Austin, TX",
//       experience: "6+ years",
//       applicationDeadline: "1 Day Remaining",
//       company: "InnovateCo",
//       logo: "/api/placeholder/80/80",
//     },
//     {
//       id: 6,
//       title: "Data Scientist",
//       type: "Full Time",
//       location: "Boston, MA",
//       experience: "3+ years",
//       applicationDeadline: "10 Days Remaining",
//       company: "AnalyticsPro",
//       logo: "/api/placeholder/80/80",
//     },
//   ];

//   // Function to determine badge color based on job type
//   const getBadgeColor = (type: string) => {
//     switch (type) {
//       case "Full Time":
//         return "bg-green-100 text-green-800";
//       case "Part Time":
//         return "bg-blue-100 text-blue-800";
//       case "Contract":
//         return "bg-purple-100 text-purple-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <section className="w-full py-16 bg-white relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute -left-20 top-1/3 w-40 h-40 mix-blend-exclusion bg-lime-400 rounded-full blur-[100px] opacity-70" />
//       <div className="absolute -right-20 bottom-1/4 w-40 h-40 mix-blend-exclusion bg-blue-400 rounded-full blur-[100px] opacity-50" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section header with icon and title */}
//         <div className="flex justify-center items-center gap-4 mb-12">
//           <div className="w-14 h-14 flex items-center justify-center bg-indigo-50 rounded-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8 text-blue-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900">
//             Available Jobs Right Now
//           </h2>
//         </div>

//         {/* Jobs grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-gradient-to-l from-sky-50 to-neutral-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
//             >
//               <div className="flex flex-col h-full">
//                 {/* Company logo and job title section */}
//                 <div className="flex items-start mb-4">
//                   <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm mr-4">
//                     <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
//                       {job.company.charAt(0)}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-2">
//                       <h3 className="text-xl font-semibold text-gray-900">
//                         {job.title}
//                       </h3>
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(
//                           job.type
//                         )}`}
//                       >
//                         {job.type}
//                       </span>
//                     </div>

//                     {/* Job details with icons */}
//                     <div className="space-y-2 mt-3">
//                       {/* Location */}
//                       <div className="flex items-center text-gray-600">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5 mr-2"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                         </svg>
//                         <span className="text-sm">{job.location}</span>
//                       </div>

//                       {/* Experience */}
//                       <div className="flex items-center text-gray-600">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5 mr-2"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                         <span className="text-sm">
//                           {job.experience} experience
//                         </span>
//                       </div>

//                       {/* Application deadline */}
//                       <div className="flex items-center text-gray-600">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5 mr-2"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                           />
//                         </svg>
//                         <span className="text-sm">
//                           {job.applicationDeadline}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Apply button */}
//                 <div className="mt-auto pt-4">
//                   <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
//                     Apply Now
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View all jobs button */}
//         <div className="text-center mt-12">
//           <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors duration-300">
//             View All Job Openings
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 ml-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AvailableJobs;
const AvailableJobs = () => {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      experience: "2+ years",
      applicationDeadline: "5 Days Remaining",
      company: "TechCorp",
      logo: "/api/placeholder/80/80",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      type: "Part Time",
      location: "San Francisco, CA",
      experience: "3+ years",
      applicationDeadline: "2 Days Remaining",
      company: "DesignHub",
      logo: "/api/placeholder/80/80",
    },
    {
      id: 3,
      title: "Backend Engineer",
      type: "Full Time",
      location: "New York, NY",
      experience: "4+ years",
      applicationDeadline: "7 Days Remaining",
      company: "DataSystems",
      logo: "/api/placeholder/80/80",
    },
    {
      id: 4,
      title: "DevOps Specialist",
      type: "Contract",
      location: "Remote",
      experience: "5+ years",
      applicationDeadline: "3 Days Remaining",
      company: "CloudTech",
      logo: "/api/placeholder/80/80",
    },
    {
      id: 5,
      title: "Product Manager",
      type: "Full Time",
      location: "Austin, TX",
      experience: "6+ years",
      applicationDeadline: "1 Day Remaining",
      company: "InnovateCo",
      logo: "/api/placeholder/80/80",
    },
    {
      id: 6,
      title: "Data Scientist",
      type: "Full Time",
      location: "Boston, MA",
      experience: "3+ years",
      applicationDeadline: "10 Days Remaining",
      company: "AnalyticsPro",
      logo: "/api/placeholder/80/80",
    },
  ];

  // Function to determine badge color based on job type
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Full Time":
        return "bg-green-100 text-green-800";
      case "Part Time":
        return "bg-blue-100 text-blue-800";
      case "Contract":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="max-w-[1140px] mx-auto py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/3 w-40 h-40 mix-blend-exclusion bg-lime-400 rounded-full blur-[100px] opacity-70" />
      <div className="absolute -right-20 bottom-1/4 w-40 h-40 mix-blend-exclusion bg-blue-400 rounded-full blur-[100px] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex  items-center gap-4 mb-12">
          <div className="w-14 h-14 flex items-center justify-center bg-indigo-50 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Available Jobs Right Now
          </h2>
        </div>

        {/* Jobs list as rows */}
        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gradient-to-l from-sky-50 to-neutral-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                {/* Left side: Company logo + details */}
                <div className="flex items-start w-full">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm mr-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
                      {job.company.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(
                          job.type
                        )}`}
                      >
                        {job.type}
                      </span>
                    </div>

                    {/* Job details */}
                    <div className="flex flex-wrap gap-6 text-gray-600 mt-3">
                      {/* Location */}
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-sm">{job.location}</span>
                      </div>

                      {/* Experience */}
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm">
                          {job.experience} experience
                        </span>
                      </div>

                      {/* Deadline */}
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm">
                          {job.applicationDeadline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side: Apply button */}
                <div className="w-full md:w-auto">
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                    Apply Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all jobs button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors duration-300">
            View All Job Openings
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AvailableJobs;
