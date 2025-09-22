import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  href?: string;
}

export default function BlogCard({
  image,
  category,
  title,
  date,
  href = "#",
}: BlogCardProps) {
  return (
    <div className="w-full bg-white  shadow-[3px_4px_30px_0px_rgba(136,136,136,0.10)] flex flex-col">
      <div className="w-full h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image || "/placeholder.svg"}
          alt={title}
        />
      </div>

      <div className="w-full h-52 bg-white p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="text-zinc-500 text-base font-semibold font-['Lato'] leading-none">
              {category}
            </div>
            <h3 className="text-sky-700 text-xl font-semibold font-['Lato'] leading-normal">
              {title}
            </h3>
            <div className="text-gray-400 text-sm font-normal font-['Lato'] leading-none">
              {date}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full h-px bg-zinc-400"></div>
            <a
              href={href}
              className="flex justify-between items-center group hover:text-sky-700 transition-colors"
            >
              <span className="text-neutral-600 text-base font-semibold font-['Lato'] leading-none group-hover:text-sky-700">
                Read More
              </span>
              <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-sky-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
