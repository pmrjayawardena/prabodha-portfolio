export const dynamic = "force-dynamic";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { getGitHubStatsServerAction } from "../actions/getGitHubStatsServerAction";
import GitHubGraphs from "./GitHubGraphs";
import Pager from "@/components/pager";
import Image from "next/image";
import { Suspense } from "react";

const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div
    className={`card border border-border/40 rounded-xl p-4 w-full h-full transition-transform duration-200 hover:scale-105 ${className}`}
  >
    <div className="card-content">
      <h3 className="text-lg font-semibold tracking-tight card-title text-muted-foreground">
        {title}
      </h3>
      <span className="text-5xl font-bold leading-tight tracking-tight card-value">
        {value}
      </span>
    </div>
  </div>
);

const GitHubGraphsLoader = () => (
  <div className="flex items-center justify-center w-full p-8 border border-border/40 rounded-xl">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <p className="text-sm text-muted-foreground">Loading GitHub graphs...</p>
    </div>
  </div>
);

const Stats = async () => {
  const githubStats = await getGitHubStatsServerAction();
  const githubStatCards = [
    {
      title: "Hireable",
      value: githubStats.hireable ? "Yes" : "No",
      className: githubStats.hireable ? "bg-green-500/20" : "bg-red-500/20",
    },
    {
      title: "Total Public Repositories",
      value: githubStats.public_repos,
    },
    {
      title: "Followers",
      value: githubStats.followers,
    },
    {
      title: "Following",
      value: githubStats.following,
    },
    {
      title: "Current Company",
      value: githubStats.company || "Not specified",
    },
    {
      title: "Location",
      value: githubStats.location || "Not specified",
    },
  ];

  return (
    <>
      {/* About GitHub Stats */}
      <PageHeader className="mt-8 mb-4">
        <PageHeaderHeading>GitHub Stats</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about my GitHub profile
        </PageHeaderDescription>
      </PageHeader>

      {/* GitHub Profile Image */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative group">
          <Image
            src={githubStats.avatar_url}
            alt="GitHub Profile"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full border-4 border-border/40 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* GitHub Graphs with Loader */}
      <div className="flex items-center justify-center w-full p-4 mb-8 border border-border/40 rounded-xl">
        <Suspense fallback={<GitHubGraphsLoader />}>
          <GitHubGraphs />
        </Suspense>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 card-container md:grid-cols-3">
          {githubStatCards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value || "Limit Reached"}
              className={card.className}
            />
          ))}
        </div>
      </div>

      <Pager
        prevHref="/contact"
        nextHref="/"
        prevTitle="Contact"
        nextTitle="Home"
      />
    </>
  );
};
export default Stats;
