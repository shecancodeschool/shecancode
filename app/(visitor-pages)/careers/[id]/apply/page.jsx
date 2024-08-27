"use client"

import JobDescriptionPageBanner from "../../../../../components/sections/careers/JobDescriptionPageBanner";
import { usePathname } from 'next/navigation';
import Jobs from '../../../../../utils/jobsFakes';

export default function AppJob() {
  const pathname = usePathname();
  const jobId = pathname.split('/')[2];

  const job = Jobs.find((job) => job._id === jobId);

  if (!job) {
    return (
      <div>
        <h1>Job not found</h1>
      </div>
    )
  }

  return (
    <>
      <JobDescriptionPageBanner job={job} />
      <section id='content' className={`flex items-center justify-center mx-auto w-full px-4 md:px-12 py-20 md:pb-24 overflow-hidden`}>
        <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
          <form action={""} className='flex flex-col space-y-8 w-full items-center justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className='flex flex-col space-y-4'>
                <label htmlFor='firstName'>
                  <span className='text-lg font-semibold text-black'>First Name</span>
                  <input type='text' name='firstName' id='firstName' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="First Name" required />
                  {/* <span className="text-red-400 text-sm">{"First name is required"}</span> */}
                </label>
                <label htmlFor='lastName'>
                  <span className='text-lg font-semibold text-black'>Last Name</span>
                  <input type='text' name='lastName' id='lastName' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Last Name" required />
                  {/* <span className="text-red-400 text-sm">{"Last name is required"}</span> */}
                </label>
                <label htmlFor='email'>
                  <span className='text-lg font-semibold text-black'>Email</span>
                  <input type='email' name='email' id='email' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Email address" required />
                  {/* <span className="text-red-400 text-sm">{"Email is required"}</span> */}
                </label>
                <label htmlFor='phone'>
                  <span className='text-lg font-semibold text-black'>Phone number</span>
                  <input type='tel' name='phone' id='phone' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Phone number" required />
                  {/* <span className="text-red-400 text-sm">{"Phone number is required"}</span> */}
                </label>
                <label htmlFor='linkedInAccount'>
                  <span className='text-lg font-semibold text-black'>LinkedIn account</span>
                  <input type='text' name='linkedInAccount' id='linkedInAccount' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="LinkedIn Account" required />
                  {/* <span className="text-red-400 text-sm">{"LinkedIn account is required"}</span> */}
                </label>
                <label htmlFor='currentResidence'>
                  <span className='text-lg font-semibold text-black'>Current residence  <span className="text-sm">(District and sector)</span></span>
                  <input type='text' name='currentResidence' id='currentResidence' className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder="Current Resisdence" required />
                  {/* <span className="text-red-400 text-sm">{"Your current residence is required"}</span> */}
                </label>
              </div>
              <div className='flex flex-col space-y-4'>
                <label htmlFor='howDidYouHearAboutThisJob'>
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
                <label htmlFor='whenAreYouReadyToStart'>
                  <span className='text-lg font-semibold text-black'>When are you ready to start work?</span>
                  <select name='whenAreYouReadyToStart' id='whenAreYouReadyToStart' className='border-2 text-black border-gray-300 rounded-md p-2 w-full' required>
                    <option value="">Choose option</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Withing 1 week">Withing 1 week</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="After 30 days">After 30 days</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* <span className="text-red-400 text-sm">{"Your response is required"}</span> */}
                </label>
                <label htmlFor='cv'>
                  <span className='text-lg font-semibold text-black'>CV/Resume</span>
                  <input type='file' name='cv' id='cv' className='border-2 border-gray-300 rounded-md p-2 w-full' required />
                  {/* <span className="text-red-400 text-sm">{"Your CV/Resume is required"}</span> */}
                </label>
                <label htmlFor='coverLetter'>
                  <span className='text-lg font-semibold text-black'>Cover letter</span>
                  <input type='file' name='coverLetter' id='coverLetter' className='border-2 border-gray-300 rounded-md p-2 w-full' required />
                  {/* <span className="text-red-400 text-sm">{"Cover letter is required"}</span> */}
                </label>
                <label htmlFor='coverLetter'>
                  <span className='text-lg font-semibold text-black'>Comment <span className="text-sm">(optional)</span></span>
                  <textarea name='comment' id='comment' className='border-2 border-gray-300 rounded-md p-2 w-full h-30' placeholder="Your comment letter goes here..." />
                  {/* <span className="text-red-400 text-sm">{"Cover letter is required"}</span> */}
                </label>
              </div>
            </div>
            <label htmlFor='linkedInAccount'>
              <button type="submit" className="bg-[#317ACC] py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">Submit</button>
            </label>
          </form>
        </div>
      </section>
    </>
  )
}