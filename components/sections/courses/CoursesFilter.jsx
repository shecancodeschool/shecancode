import React from 'react'

const CoursesFilter = ({text, bgText, Text}) => {
  return (
    <>
      <div className={`p-2 hover:text-sky-700 text-sky-500 border border-sky-500 hover:border-sky-700 rounded cursor-pointer ${bgText} ${Text}`}>
        {text}
      </div>
    </>
  )
}

export default CoursesFilter