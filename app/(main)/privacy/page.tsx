// pages/privacy-policy.tsx
import PolicyDocument from "@/components/privacy/PolicyDocument";
import React from "react";

const PrivacyPolicyPage = () => {
  const privacyPolicySections = [
    {
      title: "Privacy Overview",
      content: `We prioritize your privacy and are committed to protecting your personal information. We collect data such as your name, email, and job application details to help match you with relevant career opportunities, improve user experience, and communicate important updates. Your data is stored securely using encryption and other safety measures to prevent unauthorized access. We do not share your information with third parties without your consent, except when required by law to fulfill our services. You have the right to access, update, or delete your data at any time. For inquiries, feel free to contact us.`,
    },
    {
      title: "How We Use Your Information",
      content: `Your personal data is used to provide you with better services and enhance your experience on our platform.`,
      subsections: [
        {
          title: "Data Usage Purposes",
          items: [
            "Connect you with job opportunities",
            "Improve user experience on the website",
            "Respond to inquiries and support requests",
            "Send relevant job alerts and notifications",
          ],
        },
        {
          content: `Your data is stored securely using encryption and other safety measures to prevent unauthorized access. We do not share your information with third parties without your consent, except when required by law or to fulfill our services. You have the right to access, update, or delete your data at any time. For inquiries, feel free to contact us.`,
        },
      ],
    },
    {
      title: "Information We Collect",
      content: `We collect personal data such as name, email, and job preferences to personalize your experience and provide relevant opportunities.`,
      subsections: [
        {
          title: "Types of Data Collected",
          items: [
            "Contact information (name, email, phone)",
            "Professional details (job title, experience, skills)",
            "Resume/CV information",
            "Job preferences and interests",
            "Communication preferences",
          ],
        },
      ],
    },
    {
      title: "Data Security",
      content: `We employ industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Our platform uses SSL encryption for data transmission and secure servers for data storage. We regularly update our security protocols to ensure maximum protection against potential threats.`,
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies to improve website functionality and analyze user behavior. By using our website, you consent to the use of cookies.`,
      subsections: [
        {
          title: "Your Rights",
          items: [
            "You have the right to access, update, or delete your personal information at any time",
            "You can opt-out of receiving promotional emails",
            "You can request a copy of your data",
            "You can request deletion of your account",
          ],
        },
        {
          title: "Changes to This Privacy Policy",
          content: `We reserve the right to modify this policy. Any changes will be posted on this page, with an updated date. Please check back periodically for updates.`,
        },
      ],
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <PolicyDocument
        title="Privacy Policy"
        lastUpdated="January 2025"
        sections={privacyPolicySections}
        contactEmail="contact.techmission@gmail.com"
        companyName="TechMission"
      />
    </main>
  );
};

export default PrivacyPolicyPage;
