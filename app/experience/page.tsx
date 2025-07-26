import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          "Building solutions, one commit at a time."
        </PageHeaderHeading>
        <PageHeaderDescription>
          Throughout my journey as a developer, I have had the opportunity to
          work with cutting-edge technologies while mastering the art of
          debugging complex systems. From building dynamic web applications to
          deciphering challenging error messages, my experience has been a mix
          of structured learning and creative problem-solving. Each project and
          role has sharpened my ability to write clean code, collaborate
          effectively, and most importantly—deliver reliable solutions that
          exceed expectations.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        <li className="mb-10 ms-6">
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
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Software Engineer · Eyepax IT Consulting
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jul. 2022 - Jul. 2024
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <ul>
              <li className="mb-2">
                <b>Backend Development:</b> Developing and maintaining the
                server-side logic using Node.js to ensure efficient data
                handling, security, and seamless integration with the frontend.
              </li>
              <li className="mb-2">
                <b>GraphQL Implementation:</b> Utilizing GraphQL to design and
                implement APIs that efficiently serve data to the frontend,
                providing a flexible and performant data retrieval system.{" "}
              </li>
              <li className="mb-2">
                <b>Serverless Architecture:</b> Building a serverless
                application to optimize performance, cost-effectiveness, and
                scalability. Leveraging cloud services like AWS Lambda Functions
                to handle server-side tasks.{" "}
              </li>
              <li className="mb-2">
                <b>Database Management:</b> Designing and optimizing database
                schemas, using technologies like NoSQL databases or DynamoDB, to
                store and manage assetrelated information effectively.{" "}
              </li>
            </ul>
          </p>
        </li>

        <li className="mb-10 ms-6">
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
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Software Engineer · Bukflights
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021 - 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <ul>
              <li className="mb-2">
                <b>Frontend Development:</b> Implementing user interfaces and
                ensuring a seamless user experience using modern frontend
                technologies such as ReactJS and VueJS. Collaborate with UX/UI
                designers to translate wireframes and designs into functional
                and visually appealing web pages.
              </li>
              <li className="mb-2">
                <b>Backend Development:</b> Designing and developing scalable
                server-side applications and APIs using Node.js. Ensuring
                robustness, security, and reliability of the backend systems for
                handling flight booking and related functionalities.
              </li>
              <li className="mb-2">
                <b>Database Management:</b> Utilizing databases, including
                Redis, for efficient storage and retrieval of flight data, user
                information, and related content. Optimizing database queries
                and data models for improved performance. (MongoDB as primary
                database)
              </li>
              <li className="mb-2">
                <b>Integration with External APIs:</b>Integrating BukFlights
                with various external APIs, such as airline booking systems
                (Amadeus API, Sabre API), to facilitate seamless flight bookings
                and real-time updates.
              </li>
              <li className="mb-2">
                <b>Code Reviews and Collaboration: </b>Participating in code
                reviews to ensure code quality, consistency, and adherence to
                best practices. Collaborating with other developers and team
                members to share knowledge and drive continuous improvement.
              </li>
              <li className="mb-2">
                <b>Staying Current with Technology Trends: </b> Keeping
                up-to-date with the latest advancements in frontend, backend,
                cloud, and related technologies to suggest improvements and
                innovations for the BukFlights platform.
              </li>
            </ul>
          </p>
        </li>

        <li className="mb-10 ms-6">
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
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Full Stack Developer · Quotro (PVT) LTD
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan. 2020 - Dec. 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <ul>
              <li className="mb-2">
                <b>Frontend Development:</b> Collaborate with the design team to
                translate wireframes and mockups into responsive and visually
                appealing web pages using ReactJS. Ensure a seamless and
                intuitive user experience across different devices and screen
                sizes.
              </li>
              <li className="mb-2">
                <b>UI/UX Optimization:</b> Continuously improve and optimize the
                user interface to enhance usability, accessibility, and overall
                customer satisfaction. Implement intuitive navigation,
                interactive elements, and engaging visuals to keep users engaged
                and encourage conversions.
              </li>
              <li className="mb-2">
                <b>Performance Optimization:</b> Identify and address frontend
                performance bottlenecks to ensure fast loading times and smooth
                interactions. Optimize code and assets to deliver a
                high-performing website.
              </li>
            </ul>
          </p>
        </li>
        <li className="mb-10 ms-6">
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
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Web Developer · Litmus (PVT) LTD
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan. 2019 - Mar. 2020
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <ul>
              <li className="mb-2">
                <b>Website Development:</b> Collaborate with clients and the
                design team to translate project requirements into fully
                functional websites. Use WordPress as a content management
                system to create custom themes and templates with the backend.
              </li>
              <li className="mb-2">
                <b>Plugin Integration:</b> Integrate and configure WordPress
                plugins to add functionalities requested by clients, such as
                contact forms, social media integration, e-commerce
                capabilities, and more.
              </li>
              <li className="mb-2">
                <b>Version Control and Testing:</b> Use version control systems
                like Git to manage the codebase efficiently and collaborate
                effectively with other developers. Conduct thorough testing to
                identify and fix bugs, ensuring a bug-free user experience.
              </li>
              <li className="mb-2">
                <b>Responsive Design:</b> Implement responsive web design
                principles to create websites that adapt and display flawlessly
                on various devices, including desktops, tablets, and
                smartphones.
              </li>
            </ul>
          </p>
        </li>
      </ol>

      <CodeSnippet code={code.experience} title="experience.ts" />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
