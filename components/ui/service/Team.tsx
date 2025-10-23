import Image from "next/image";
import backpGroundImage from "../../../public/service/teamImageBackground.png";
import TeamSlider from "./TeamSlider";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function Team() {
  return (
    <>
      <div>
        <div className="py-20">
          <div className="text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway text-center ">
            Team
          </div>
          <div className="self-stretch text-center justify-starttext-base md:text-lg text-gray-600  mx-auto">
            Our Leaders
          </div>
        </div>
        <TeamSlider />
      </div>
    </>
  );
}
