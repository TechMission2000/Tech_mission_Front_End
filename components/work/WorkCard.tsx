import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const WorkCard = ({ category, imageUrl, title, link, description }: any) => {
  return (
    <div className="flex flex-col gap-8 px-6 sm:px-10 py-8 ">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#545454] font-lato">
          {category}
        </h2>
        <div className="flex flex-col gap-6">
          {/* Fixed height container for image */}
          <div className="relative w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={imageUrl || "/placeholder1.jpg"}
              alt={`${category} project`}
              fill
              className="object-cover p-6 pt-16 transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-[#16192C] font-lato">
                {title}
              </h3>
              <p className="text-sm text-[#545454] bg-gradient-to-b from-[#FBFBFB] to-[#FAFAFA] px-3 py-2 rounded-md inline-block border border-gray-200">
                {link}
              </p>
            </div>
            <button className="rounded-md hover:shadow-lg transition-shadow">
              <div className="w-[26px] h-[26px] relative flex items-center justify-center">
                <div className="p-2 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white hover:cursor-pointer  rounded-md hover:bg-blue-700 ">
                  <GoArrowUpRight className="text-2xl font-semibold text-white" />
                </div>
              </div>
            </button>
          </div>
          <p className="text-[#545454] text-base font-raleway leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
