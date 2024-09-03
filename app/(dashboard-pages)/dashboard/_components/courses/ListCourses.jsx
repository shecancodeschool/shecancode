import { CoursesTable } from "../tables/courses/data-table";

export default function ListCourses({ courses }) {
  return (
    <CoursesTable courses={courses} />
  )
}
