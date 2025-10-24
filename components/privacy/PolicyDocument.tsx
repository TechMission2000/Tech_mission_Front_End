// components/PolicyDocument/PolicyDocument.tsx
import React from "react";

interface Section {
  title: string;
  content: string;
  subsections?: Array<{
    title?: string;
    items?: string[];
    content?: string;
  }>;
}

interface PolicyDocumentProps {
  title: string;
  lastUpdated?: string;
  sections: Section[];
  contactEmail?: string;
  companyName?: string;
}

export const PolicyDocument: React.FC<PolicyDocumentProps> = ({
  title,
  lastUpdated,
  sections,
  contactEmail,
  companyName = "TechMission",
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
      {/* Header */}
      <div className="mb-12 pb-8 border-b-2 border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          {title}
        </h1>
        {lastUpdated && (
          <p className="text-gray-600 text-sm">
            Last updated: <span className="font-semibold">{lastUpdated}</span>
          </p>
        )}
      </div>

      {/* Table of Contents */}
      <div className="mb-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Table of Contents
        </h2>
        <ul className="space-y-2">
          {sections.map((section, idx) => (
            <li key={idx}>
              <a
                href={`#section-${idx}`}
                className="text-blue-600 hover:text-blue-800 transition-colors hover:underline"
              >
                {idx + 1}. {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {sections.map((section, sectionIdx) => (
          <section
            key={sectionIdx}
            id={`section-${sectionIdx}`}
            className="scroll-mt-20"
          >
            {/* Section Title */}
            <div className="flex items-start gap-4 mb-6">
              <span className="text-2xl font-bold text-blue-600 flex-shrink-0">
                {sectionIdx + 1}.
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {section.title}
              </h2>
            </div>

            {/* Section Content */}
            <div className="ml-0 md:ml-12 space-y-6">
              {/* Main paragraph */}
              {section.content && (
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {section.content}
                </p>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="space-y-6 mt-6">
                  {section.subsections.map((subsection, subIdx) => (
                    <div
                      key={subIdx}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                    >
                      {subsection.title && (
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {subsection.title}
                        </h3>
                      )}

                      {subsection.items && subsection.items.length > 0 && (
                        <ul className="space-y-3 mb-4">
                          {subsection.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex gap-3">
                              <span className="text-blue-600 font-bold flex-shrink-0 mt-1">
                                •
                              </span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {subsection.content && (
                        <p className="text-gray-700 leading-relaxed">
                          {subsection.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            {sectionIdx !== sections.length - 1 && (
              <hr className="mt-12 border-gray-200" />
            )}
          </section>
        ))}
      </div>

      {/* Footer Contact */}
      {contactEmail && (
        <div className="mt-16 pt-12 border-t-2 border-gray-200">
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h3>
            <p className="text-gray-700 mb-2">
              For any questions regarding this {title.toLowerCase()}, please
              reach out to us:
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PolicyDocument;
