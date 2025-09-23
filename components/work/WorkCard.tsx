import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const WorkCard = ({ category, imageSrc, title, link, description }: any) => {
    return (
        <div className="flex flex-col gap-8 px-6 sm:px-10 py-8">
            <h2 className="text-xl font-semibold text-[#545454] font-lato">{category}</h2>
            <div className="flex flex-col gap-6">
                <Image src={imageSrc} alt={title} width={490} height={346} className="rounded-lg object-cover w-full h-auto shadow-md" />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium text-[#16192C] font-lato">{title}</h3>
                        <p className="text-sm text-[#545454] bg-gradient-to-b from-[#FBFBFB] to-[#FAFAFA] px-3 py-2 rounded-md inline-block border border-gray-200">
                            {link}
                        </p>
                    </div>
                    <button className="rounded-md hover:shadow-lg transition-shadow">
                        <div className="w-[26px] h-[26px] relative flex items-center justify-center">
                            <div className="p-2 bg-[#1963B9] rounded-md" >
                                <GoArrowUpRight className='text-2xl text-white' />


                            </div>
                        </div>
                    </button>
                </div>
                <p className="text-[#545454] text-base font-raleway leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default WorkCard