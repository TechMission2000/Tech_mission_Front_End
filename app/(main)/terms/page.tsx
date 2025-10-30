// pages/terms-conditions.tsx
import PolicyDocument from "@/components/privacy/PolicyDocument";
import React from "react";

const TermsAndConditionsPage = () => {
  const termsAndConditionsSections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: "Use of Service",
      content: `Our platform provides job matching and career opportunities services. You agree to use this service only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website.`,
      subsections: [
        {
          title: "Prohibited Behavior",
          items: [
            "Harassment or causing distress or inconvenience to any person",
            "Obscene or offensive content",
            "Disrupting the normal flow of dialogue within our website",
            "Attempting to gain unauthorized access to our systems",
            "Commercial solicitation",
          ],
        },
      ],
    },
    {
      title: "User Accounts",
      content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your password and account information and for all activities that occur under your account.`,
      subsections: [
        {
          title: "Account Responsibilities",
          items: [
            "You are responsible for all activities under your account",
            "You must notify us immediately of any unauthorized use",
            "You agree not to share your password with others",
            "You are responsible for your account security",
          ],
        },
      ],
    },
    {
      title: "Intellectual Property Rights",
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of our company or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, transmit, or display any content without our prior written permission.`,
    },
    {
      title: "Limitation of Liability",
      content: `To the fullest extent permitted by law, we shall not be liable to you for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of your use of or inability to use the service.`,
    },
    {
      title: "User-Generated Content",
      content: `You retain all rights to any content you submit, post, or display on this website. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute your content in any media or manner.`,
      subsections: [
        {
          title: "Content Guidelines",
          items: [
            "Content must be original and not infringe third-party rights",
            "You are responsible for the content you submit",
            "We reserve the right to remove inappropriate content",
            "We may use your content for improving our services",
          ],
        },
      ],
    },
    {
      title: "Termination",
      content: `We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including if you breach any of these Terms and Conditions. Upon termination, your right to use the service will immediately cease.`,
    },
    {
      title: "Changes to Terms",
      content: `We reserve the right to modify these terms at any time. When we do, we will revise the "last updated" date at the top of this policy. Your continued use of the service following the posting of changes means that you accept and agree to the changes.`,
    },
    {
      title: "Governing Law",
      content: `These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which the company is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`,
    },
    {
      title: "Contact Information",
      content: `If you have any questions about these Terms and Conditions, please contact us at the email address provided below. We are committed to resolving any disputes or concerns you may have about our service.`,
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <PolicyDocument
        title="Terms & Conditions"
        lastUpdated="January 2025"
        sections={termsAndConditionsSections}
        contactEmail="contact.techmission@gmail.com"
        companyName="TechMission"
      />
    </main>
  );
};

export default TermsAndConditionsPage;
