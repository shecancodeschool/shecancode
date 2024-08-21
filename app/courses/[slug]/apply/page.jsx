import React from 'react'
import CourseBanner from '../../../../components/sections/courses/coursedetails/CourseBanner'
import coursesFakes from '../../../../utils/coursesFakes';
import ReusableSection from '../../../../components/ReusableSection';

export default function Apply({ params}) {
  const { slug } = params;

  const course = coursesFakes.CoursesData.find((course) => course.slug === slug);

  return (
    <>
      <CourseBanner 
        coverImage={course.coverImage}
        title={course.title}
        description={course.description}
        slug={course.slug}
        startDate={course.startDate}
        isOpen={course.isOpen}
      />
      <ReusableSection>
        <form action={""} className='flex flex-col space-y-8 w-full md:w-3/4 items-center justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='flex flex-col space-y-4'>
              <label htmlFor='firstName' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>First Name</span>
                <input type='text' name='firstName' id='firstName' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="First Name" required />
                {/* <span className="text-red-400 text-sm">{"First name is required"}</span> */}
              </label>
              <label htmlFor='lastName' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Last Name</span>
                <input type='text' name='lastName' id='lastName' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Last Name" required />
                {/* <span className="text-red-400 text-sm">{"Last name is required"}</span> */}
              </label>
              <label htmlFor='email' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Email</span>
                <input type='email' name='email' id='email' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Email address" required />
                {/* <span className="text-red-400 text-sm">{"Email is required"}</span> */}
              </label>
              <label htmlFor='phone' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Phone number</span>
                <input type='tel' name='phone' id='phone' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Phone number" required />
                {/* <span className="text-red-400 text-sm">{"Phone number is required"}</span> */}
              </label>
              <label htmlFor='gender' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Gender</span>
                <select name='gender' id='gender' className='border-2 text-black border-gray-300 rounded-md p-2 w-full' required>
                  <option value="">Choose option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {/* <span className="text-red-400 text-sm">{"Your response is required"}</span> */}
              <label htmlFor='age' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Age</span>
                <input type='number' name='age' id='age' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Your age" required />
                {/* <span className="text-red-400 text-sm">{"Your age is required"}</span> */}
              </label>
              <label htmlFor='currentResidence' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Current residence  <span className="text-sm">(District and sector)</span></span>
                <input type='text' name='currentResidence' id='currentResidence' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Ex: Gasabo, Kacyiru" required />
                {/* <span className="text-red-400 text-sm">{"Your current residence is required"}</span> */}
              </label>
              </label>
              <label htmlFor='linkedInAccount' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>LinkedIn account</span>
                <input type='text' name='linkedInAccount' id='linkedInAccount' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="LinkedIn Account" required />
                {/* <span className="text-red-400 text-sm">{"LinkedIn account is required"}</span> */}
              </label>
              <label htmlFor='gitHubAccount' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>GitHub account</span>
                <input type='text' name='gitHubAccount' id='gitHubAccount' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="GitHub Account" required />
                {/* <span className="text-red-400 text-sm">{"GitHub account is required"}</span> */}
              </label>
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='howDidYouHearAboutThisJob' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>How did you hear about this job?</span>
                <select name='howDidYouHearAboutThisJob' id='howDidYouHearAboutThisJob' className='border-2 text-black border-gray-300 rounded-md p-2 w-full' required>
                  <option value="">Choose option</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="From a friend">From a friend</option>
                  <option value="Other">Other</option>
                </select>
                {/* <span className="text-red-400 text-sm">{"Your response is required"}</span> */}
              </label>
              <label htmlFor='whenAreYouReadyToStart' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>What is your most recent academic background?</span>
                <select name='academicBackground' id='academicBackground' className='border-2 text-black border-gray-300 rounded-md p-2 w-full' required>
                  <option value="">Choose option</option>
                  <option value="High School Graduate">High School Graduate</option>
                  <option value="Joining University in the next 6 months">Joining University in the next 6 months</option>
                  <option value="Attending Year 1 in University">Attending Year 1 in University</option>
                  <option value="Attending Year 2 in University">Attending Year 2 in University</option>
                  <option value="Attending Year 3 in University">Attending Year 3 in University</option>
                  <option value="In the final year at University">In the final year at University</option>
                  <option value="University Graduate">University Graduate</option>
                  <option value="Didn't join university">Didn't join university</option>
                  <option value="Not joining university soon">Not joining university soon</option>
                </select>
                {/* <span className="text-red-400 text-sm">{"Your response is required"}</span> */}
              </label>
              <label htmlFor='universityBeingAttended' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>If you are attending university, which university are you attending?</span>
                <select name='universityBeingAttended' id='universityBeingAttended' className='border-2 text-black border-gray-300 rounded-md p-2 w-full' required>
                  <option value="">Choose option</option>
                  <option value="AUCA">AUCA</option>
                  <option value="ALU">ALU</option>
                  <option value="IPRC">IPRC</option>
                  <option value="KEPLER">KEPLER</option>
                  <option value="KIM">KIM</option>
                  <option value="UNILAK">UNILAK</option>
                  <option value="UR">UR</option>
                  <option value="ULK">ULK</option>
                  <option value="Other">Other</option>
                </select>
                {/* <span className="text-red-400 text-sm">{"Your response is required"}</span> */}
              </label>
              <label htmlFor='currentOccupation' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Current Occupation</span>
                <select name='currentOccupation' id='currentOccupation' className='border-2 text-black border-gray-300 rounded-md p-2 w-full' required>
                  <option value="">Choose option</option>
                  <option value="Student">Student</option>
                  <option value="Employed Full-time">Employed Full-time</option>
                  <option value="Employed Part-time">Employed Part-time</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="In waiting year">In waiting year</option>
                </select>
                {/* <span className="text-red-400 text-sm">{"Your response is required"}</span> */}
              </label>
              <label htmlFor='cv' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>CV/Resume</span>
                <input type='file' name='cv' id='cv' className='border-2 border-gray-300 rounded-md p-2 w-full' required />
                {/* <span className="text-red-400 text-sm">{"Your CV/Resume is required"}</span> */}
              </label>
              <label htmlFor='coverLetter' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>Cover letter</span>
                <input type='file' name='coverLetter' id='coverLetter' className='border-2 border-gray-300 rounded-md p-2 w-full' required />
                {/* <span className="text-red-400 text-sm">{"Cover letter is required"}</span> */}
              </label>
              <label htmlFor='motivation' className='flex flex-col space-y-2'>
                <span className='text-lg font-semibold text-black'>What motivated you to join this course/program? <span className="text-sm">(Required - 500 words minimum)</span></span>
                <textarea name='motivation' id='motivation' className='border-2 border-gray-300 rounded-md p-2 w-full h-30' placeholder="Your response goes here..." />
                {/* <span className="text-red-400 text-sm">{"Cover letter is required"}</span> */}
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="bg-[#317ACC] py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">Submit</button>
          </div>
        </form>
      </ReusableSection>
    </>
  )
}
