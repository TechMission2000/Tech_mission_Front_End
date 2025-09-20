import AvailableJobs from "@/components/ui/careers/AvailableJobs";
import BenefitsAndGratitude from "@/components/ui/careers/BenefitsAndGratitude";
import CareerArticleVideoSection from "@/components/ui/careers/CareerArticleVideoSection";
import { CompanyProfileCard } from "@/components/ui/careers/CompanyProfileCard";
import Faq from "@/components/ui/landing/faq";

import ServicBanner from "@/components/ui/service/Banner";

export default function CareersPage() {
  const careervideoUrl =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758162106739_ai+intrgrated+business+website-development.mp4";

  const careerTitle = "Shape Your Future with TachMission";
  const careerDescription =
    " Explore exciting career opportunities with TechMission and be part of our innovative journey. We're looking for talented individuals to join our dynamic team and help shape the future of technology. Discover your potential with us today!";

  const videoUrl =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758017210717_serviceBanner.mp4";
  const title = "Careers";
  const subtitle = "Home / Careers";
  // benifits background image
  const backgroundImage =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758362532315_backgroundImage-career-for-tachmission.png";
  const benefitsTitle = "Benefits and Gratitude";
  const gratitudeDescription =
    "We value our employees and express our gratitude through a range of benefits designed to support their well-being and professional growth. Join us to experience a rewarding work environment where your contributions are recognized and appreciated . Discover the benefits and gratitude of working with TechMission today!";
  const benefitsArray = [
    {
      title: "Comprehensive Health Coverage",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758363756205_benifits-image-2-career-for-techmission.png",
    },
    {
      title: "Flexible Work Arrangements",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758363756205_benifits-image-career-for-techmission.png",
    },
    {
      title: "Professional Development Opportunities",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758363756205_benifits-image-2-career-for-techmission.png",
    },
    {
      title: "Generous Paid Time Off",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758363756205_benifits-image-career-for-techmission.png",
    },
    {
      title: "Retirement Savings Plans",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758363756205_benifits-image-2-career-for-techmission.png",
    },
    {
      title: "Employee Wellness Programs",
      image:
        "https://pro-bucket.s3.us-east-1.amazonaws.com/1758363756205_benifits-image-career-for-techmission.png",
    },
  ];

  return (
    <>
      <div className="w-full relative">
        {/* Banner */}
        <ServicBanner videoUrl={videoUrl} title={title} subtitle={subtitle} />

        {/* Company Profile Card overlapping half */}
        <div className="absolute inset-x-0 top-1/2 translate-y-24  z-10">
          <CompanyProfileCard
            companyName="TechMission"
            industry="Information Technology (IT)"
            currentJobs={10}
          />
        </div>
      </div>

      <CareerArticleVideoSection
        title={careerTitle}
        description={careerDescription}
        videoUrl={careervideoUrl}
      />
      <BenefitsAndGratitude
        title={benefitsTitle}
        description={gratitudeDescription}
        benefits={benefitsArray}
        backgroundImage={backgroundImage}
      />
      <AvailableJobs />
      <Faq />
    </>
  );
}
