import Greetings from "@/components/Greetings";
import GreetingsSkeleton from "@/components/Skeleton";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import ProjectCard from "@/components/ProjectCard";
import Skeleton from "@/components/Skeleton";
import TaskCard from "@/components/TaskCard";
import NewProject from "@/components/NewProject";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
const getData = async () => {
  const user = await getUserFromCookie(cookies() as RequestCookies);
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    select: {
      id: true,
    },
  });

  return projects;
};

export default async function Page() {
  const projects = await getData();

  return (
    <div className="h-full overflow-y-auto pr-6 w-full">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex ">
          <Suspense fallback={<GreetingsSkeleton />}>
            {/* @ts-expect-error Server Component */}
            <Greetings />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map(({ id }) => {
            return (
              <div className="w-1/3 p-3" key={id}>
                <Suspense fallback={<Skeleton />}>
                  <Link href={`/project/${id}`}>
                    {/* @ts-expect-error Server Component */}
                    <ProjectCard projectId={id} />
                  </Link>
                </Suspense>
              </div>
            );
          })}
          <div className="w-1/3 p-3">
            <div className="w-1/3 p-3">
              <NewProject />
            </div>
          </div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            {/* @ts-expect-error Server Component */}
            <TaskCard />
          </div>
        </div>
      </div>
    </div>
  );
}
