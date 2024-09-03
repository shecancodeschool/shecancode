import React from 'react'
import { CourseCategoryTable } from '../tables/courses/CourseCategoryTable'

export default function ListCourseCategories({ categories }) {
  return (
    <CourseCategoryTable categories={categories} />
  )
}
