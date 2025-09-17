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
          <div className="self-stretch text-center justify-start text-sky-950 text-4xl font-semibold font-['Raleway'] leading-10">
            Team
          </div>
          <div className="self-stretch text-center justify-start text-zinc-800 text-2xl font-semibold font-['Lato'] leading-7">
            Our Leaders
          </div>
        </div>
        <TeamSlider />
      </div>
    </>
  );
}
