import { DataTable } from "../tables/blog/data-table";

export default function ListPost({ posts }) {
  return (
    <DataTable posts={posts}/>
  )
}
