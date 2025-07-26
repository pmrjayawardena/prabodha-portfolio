import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { mySkills } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Prabodha Jayawardena</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          A coder by day, problem-solver by night!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a dedicated Software Engineer specializing in full-stack
          application development. I enjoy crafting responsive web solutions
          using modern technologies like Next.js, React, and Tailwind CSS.
          Throughout my career, I have demonstrated a strong commitment to
          crafting robust and efficient solutions while keeping up with the
          latest industry trends and best practices. My passion for
          problem-solving, combined with my proficiency in multiple programming
          languages, allows me to deliver high-quality software products that
          meet and exceed client expectations.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

      <div className="mt-10">
        <PageHeader>
          <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
          <PageHeaderHeading className="mt-2 text-muted-foreground">
            Transforming ideas into digital reality!
          </PageHeaderHeading>
          <PageHeaderDescription>
            As a full-stack Software Engineer, I specialize in building scalable
            web applications using modern technologies such as Next.js, React,
            and Tailwind CSS. I'm also expanding my expertise into mobile
            development with React Native and Expo to create cross-platform
            solutions.
          </PageHeaderDescription>
        </PageHeader>

        {/* skills and tools badges */}

        <div
          id="badges"
          className="flex flex-wrap items-center justify-center gap-2 my-4"
        >
          {mySkills.map((item) => (
            <Badge
              key={item.title}
              className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
            >
              {Icons[item.icon as keyof typeof Icons]?.({
                className: "mr-2 size-4",
              })}
              {item.title}
            </Badge>
          ))}
        </div>

        <CodeSnippet title="skills.ts" code={code.skillsTools} />
      </div>
    </>
  );
};
export default IntroductionPage;
