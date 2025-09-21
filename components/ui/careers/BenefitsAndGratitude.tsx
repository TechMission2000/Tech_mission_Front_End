import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

interface BenefitCard {
  title: string;
  image: string;
}

interface BenefitsSectionProps {
  title: string; // Section article title
  description: string; // Section article description
  benefits: BenefitCard[]; // Array of 6 benefit cards
  backgroundImage?: string; // Optional background image for the section
}

export default function BenefitsAndGratitude({
  title,
  description,
  benefits,
  backgroundImage,
}: BenefitsSectionProps) {
  return (
    <section
      className="w-full py-0 lg:py-16 bg-cover  bg-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className="max-w-[1140px] mx-auto flex flex-col gap-12 py-10">
        {/* Article Section */}
        <div className="flex flex-col gap-6 py-20">
          <div className="lg:self-start self-center lg:w-[40%] px-4 lg:px-0]">
            <SectionTitle title={title} textAlign="center" />
          </div>
          <p className="text-black text-lg font-normal font-['Lato'] leading-relaxed mt-5 lg:px-0 px-4">
            {description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-neutral-50 rounded hover:shadow-lg shadow h-28 flex items-center p-4 gap-4 overflow-hidden lg:mx-0 mx-4"
            >
              <div className="w-14 h-14 flex-shrink-0">
                <Image
                  src={benefit.image}
                  alt={"benefit image"}
                  width={56}
                  height={56}
                  className="object-cover rounded"
                />
              </div>
              <div className="text-black text-lg font-normal font-['Lato'] leading-tight">
                {benefit.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
