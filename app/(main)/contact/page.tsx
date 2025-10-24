import ContactInfo from "@/components/contact/ContactInfo";
import ContactSection from "@/components/contact/ContactSection";
import Faq from "@/components/ui/landing/faq";
import ServicBanner from "@/components/ui/service/Banner";

export default function contectPage() {
  const videoUrl =
    "https://pro-bucket.s3.us-east-1.amazonaws.com/1758017210717_serviceBanner.mp4";
  // const localUrl = "/service/serviceBanner.mp4";
  const title = "Contact Us";
  const subtitle = "Home / Contact Us";

  return (
    <div>
      <ServicBanner videoUrl={videoUrl} title={title} subtitle={subtitle} />
      <div>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-sky-700 text-xl font-semibold font-['Lato'] leading-normal">
            Get In Touch
          </div>
          <div className="text-blue-950 text-4xl font-semibold font-['Raleway'] leading-10 mt-2">
            Hey! Let’s Talk
          </div>
        </div>

        <ContactSection />
      </div>
      <ContactInfo />
      {/* <Faq></Faq> */}
    </div>
  );
}
