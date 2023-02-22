import { FC } from "react";
import { Prisma } from "@prisma/client";
import Card from "./Card";
import clsx from "clsx";
import { delay } from "@/lib/async";
import { db } from "@/lib/db";

const formatDate = (date: any) =>
  new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const getData = async (projectId: string) => {
  await delay(2000);
  const project = await db.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      tasks: true,
    },
  });

  return project;
};

const ProjectCard = async ({ projectId }: { projectId: string }) => {
  const project = await getData(projectId);

  if (!project) return null;

  const completedCount = project.tasks.filter(
    (t) => t.status === "COMPLETED"
  ).length;

  const progress = Math.ceil((completedCount / project.tasks.length) * 100);

  return (
    <Card className="!px-6 !py-8 hover:scale-105 transition-all ease-in-out duration-200">
      <div>
        <span className="text-sm text-gray-300">
          {formatDate(project.createdAt)}
        </span>
      </div>
      <div className="mb-6">
        <span className="text-3xl text-gray-600">{project.name}</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-400">
          {completedCount}/{project.tasks.length} completed
        </span>
      </div>
      <div>
        <div className="w-full h-2 bg-violet-200 rounded-full mb-2">
          <div
            className={clsx(
              "h-full text-center text-xs text-white bg-violet-600 rounded-full"
            )}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-600 font-semibold">
            {progress}%
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
