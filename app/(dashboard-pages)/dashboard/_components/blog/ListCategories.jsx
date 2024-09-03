import React from 'react'
import { DataTable } from '../tables/blog/BlogCategoryTable'

export default function ListCategories({ categories }) {
  return (
    <DataTable categories={categories} />
  )
}
