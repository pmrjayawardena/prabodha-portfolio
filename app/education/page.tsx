import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code, educationData } from "@/config/codeContent";

const TimelineItem = ({
  degree,
  institution,
  isLatest,
  isLast = false,
}: {
  degree: string;
  institution: string;
  isLatest: boolean;
  isLast?: boolean;
}) => (
  <li className={`${isLast ? "" : "mb-10"} ms-6`}>
    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg
        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </span>
    <h3
      className={`flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white ${
        isLatest ? "" : ""
      }`}
    >
      {degree}
      {isLatest && (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
          Latest
        </span>
      )}
    </h3>
    {institution && (
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {institution}
      </time>
    )}
  </li>
);

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Learning never stops, but my wallet sure wishes it would!
        </PageHeaderHeading>
        <PageHeaderDescription>
          My educational journey spans from foundational IT diplomas to advanced
          degrees, all from the University of Colombo School of Computing.
          Starting with the Diploma in Information Technology (DIT) and
          progressing through Higher Diploma (HDIT), Bachelor's (BIT), and
          currently pursuing my Master's in Information Technology (MIT). This
          structured progression has provided me with comprehensive knowledge in
          software development, system architecture, and modern technologies.
          Complemented by professional certifications in Web Engineering and PC
          Hardware Administration, my education has been the cornerstone of my
          career as a full-stack software engineer.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        {educationData.map((education, index) => (
          <TimelineItem
            key={education.id}
            degree={education.degree}
            institution={education.institution}
            isLatest={education.isLatest}
            isLast={index === educationData.length - 1}
          />
        ))}
      </ol>

      <CodeSnippet code={code.educationJourney} title="education.ts" />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
