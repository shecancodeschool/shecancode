import React from 'react'
import ReusableSection from '../../ReusableSection'
import CourseCard from '../courses/CourseCard'
import Link from 'next/link'

const CoursesSection = ({ homePageCoursesSectionData, courses }) => {
    return (
        <ReusableSection background={'#e6f2ff'}>
            <h2 className="section-header">{homePageCoursesSectionData.title}</h2>
            <div className='flex w-full justify-between flex-wrap'>
                {courses && courses.map((course, index) => {
                    if (index < 4) {
                        return (
                            <CourseCard key={index} course={course} />
                        )
                    }
                })}
            </div>
            <Link href="/courses" className="bg-[#317ACC] py-3 px-6 w-fit text-center text-white rounded-md hover:bg-[#296494]">
                See All Courses
            </Link>
        </ReusableSection>
    )
}

export default CoursesSection