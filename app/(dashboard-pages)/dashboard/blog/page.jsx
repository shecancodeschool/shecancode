import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { getArticles } from "../_actions/articlesActions";
import PageTitle from "../_components/PageTitle";
import ListPost from "../_components/blog/ListPost";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

export default async function page() {
  const allArticles = await getArticles();
  const posts = JSON.parse(allArticles);

  return (
    <div className="bg-color-grey">
      <div className="flex justify-between items-center">
        <PageTitle title="Post" />
        <Link href={"/dashboard/blog/new"}>
          <Button className="text-white">Create Post</Button>
        </Link>
      </div>
      <Separator className="my-4 border-b-[2px] border-sky-600" />
      <ErrorBoundary>
        <Suspense>
          <ListPost posts={posts} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
