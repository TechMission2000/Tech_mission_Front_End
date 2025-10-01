import React from "react";
import { SectionTitle } from "../ui/careers/SectionTitle";

const storyData = [
  {
    number: "01",
    title: "Design",
    content:
      "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
  },
  {
    number: "02",
    title: "Engineering",
    content:
      "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
  },
  {
    number: "03",
    title: "Project Management",
    content:
      "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
  },
  {
    number: "04",
    title: "Collaboration",
    content:
      "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
  },
  {
    number: "05",
    title: "Client-Centric Approach",
    content:
      "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
  },
  {
    number: "06",
    title: "Driving Success",
    content:
      "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
  },
];

const StoryItem = ({ number, title, content, isLastInRow }: any) => (
  <div
    className={`p-8 md:p-12 border-b border-blue-200 lg:border-b-0 ${
      !isLastInRow ? "lg:border-r" : ""
    } lg:[&:nth-child(n+3)]:border-t`}
  >
    <div className="flex items-end gap-4 mb-8">
      <span className="text-8xl md:text-9xl text-[#387FD2] font-['Roboto_Condensed'] leading-none">
        {number}
      </span>
      <h3 className="flex-1 text-4xl md:text-5xl text-[#387FD2] font-raleway pb-4 border-b border-blue-200">
        {title}
      </h3>
    </div>
    <p className="text-[#8A8A8A] text-lg font-lato leading-relaxed">
      {content}
    </p>
  </div>
);

export default function OurStory() {
  return (
    <div
      className="bg-white font-raleway py-20"
      style={{
        backgroundImage: `url(/ourstory.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col items-start mb-12">
          {/* <div className="flex items-center justify-center gap-2">
                <div className="w-14 h-1 bg-zinc-800"></div>
                <div className="w-14 h-1 bg-zinc-800"></div>
            </div>
            <h2 className="text-5xl md:text-6xl text-[#16192C] font-normal my-3">Our Story</h2>
            <div className="flex items-center justify-center gap-2">
                <div className="w-14 h-1 bg-zinc-800"></div>
                <div className="w-14 h-1 bg-zinc-800"></div>
            </div> */}

          <SectionTitle
            title="Our Story"
            textAlign="center"
            className=" mx-0 "
            titleClassName="text-5xl md:text-6xl"
          />
        </div>

        <div className="border-t border-b border-blue-200 grid grid-cols-1 lg:grid-cols-2">
          {storyData.map((story, index) => (
            <StoryItem
              key={story.number}
              number={story.number}
              title={story.title}
              content={story.content}
              isLastInRow={(index + 1) % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
