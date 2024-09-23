"use client"

import { toast } from "sonner";
import { useFormState, useFormStatus } from "react-dom";
import { applyForCourse } from '@/app/(visitor-pages)/_actions/courses';
import { useRouter } from 'next/navigation';

export default function ApplyForCourseForm({ courseId, slug }) {
    const [response, action] = useFormState(applyForCourse, {});
    const router = useRouter();

    if (response.error) {
        toast.error(response.error);
    } else if (response.message) {
        router.push(`/courses/${slug}/success`);
    }

    return (
        <section className={`flex items-center justify-center mx-auto w-full px-4 md:px-12 py-20 md:pb-24 overflow-hidden`} id="form">
            <div className={`flex flex-col gap-6 items-center justify-center text-white w-full max-w-screen-xl`}>
                <form action={action} className='flex flex-col space-y-8 w-full text-black md:w-3/4 items-center justify-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='flex flex-col space-y-4 text-black'>
                            <label htmlFor='firstName' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>First Name</span>
                                <input type='text' name='firstName' id='firstName' className='border border-gray-300 rounded-md p-2 w-full' placeholder="First Name" />
                                {response?.firstName && <span className="text-red-400 text-sm">{response?.firstName}</span>}
                            </label>
                            <label htmlFor='lastName' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Last Name</span>
                                <input type='text' name='lastName' id='lastName' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Last Name" />
                                {response?.lastName && <span className="text-red-400 text-sm">{response?.lastName}</span>}
                            </label>
                            <label htmlFor='email' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Email</span>
                                <input type='email' name='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Email address" />
                                {response?.email && <span className="text-red-400 text-sm">{response?.email}</span>}
                            </label>
                            <label htmlFor='phone' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Phone number</span>
                                <input type='tel' name='phone' id='phone' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Phone number" />
                                {response?.phone && <span className="text-red-400 text-sm">{response?.phone}</span>}
                            </label>
                            <label htmlFor='gender' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Gender</span>
                                <select name='gender' id='gender' onChange={(e) => {
                                    if (e.target.value === "Male") {
                                        toast.warning("This program is for Girls only, if you choose to continue with the application, please be informed that SheCanCODE Will provide limited access to males/boys and they will pay 100% of the course fee.");
                                    }
                                }} className='border text-black border-gray-300 rounded-md p-2 w-full' >
                                    <option value="">Choose option</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                                {response?.gender && <span className="text-red-400 text-sm">{response?.gender}</span>}
                                <label htmlFor='age' className='flex flex-col space-y-2'>
                                    <span className='text-lg font-semibold text-black'>Age</span>
                                    <input type='number' name='age' id='age' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Your age" />
                                    {response?.age && <span className="text-red-400 text-sm">{response?.age}</span>}
                                </label>
                                <label htmlFor='residence' className='flex flex-col space-y-2'>
                                    <span className='text-lg font-semibold text-black'>Current residence  <span className="text-sm">(District and sector)</span></span>
                                    <input type='text' name='residence' id='residence' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Ex: Gasabo, Kacyiru" />
                                    {response?.residence && <span className="text-red-400 text-sm">{response?.residence}</span>}
                                </label>
                            </label>
                            <label htmlFor='linkedInAccount' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>LinkedIn account <span className="text-sm">(Optional)</span></span>
                                <input type='text' name='linkedInAccount' id='linkedInAccount' className='border border-gray-300 rounded-md p-2 w-full' placeholder="LinkedIn Account" />
                                {response?.linkedInAccount && <span className="text-red-400 text-sm">{response?.linkedInAccount}</span>}
                            </label>
                            <label htmlFor='githubAccount' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>GitHub account <span className="text-sm">(Optional)</span></span>
                                <input type='text' name='githubAccount' id='githubAccount' className='border border-gray-300 rounded-md p-2 w-full' placeholder="GitHub Account" />
                                {response?.githubAccount && <span className="text-red-400 text-sm">{response?.githubAccount}</span>}
                            </label>
                            <label htmlFor='doYouHaveALaptop' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Do you have access to a Laptop?</span>
                                <select name='doYouHaveALaptop' id='doYouHaveALaptop' className='border text-black border-gray-300 rounded-md p-2 w-full' >
                                    <option value="">Choose option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                {response?.doYouHaveALaptop && <span className="text-red-400 text-sm">{response?.doYouHaveALaptop}</span>}
                            </label>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <label htmlFor='doYouHaveAccessToInternet' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Do you have access to Internet?</span>
                                <select name='doYouHaveAccessToInternet' id='doYouHaveAccessToInternet' className='border text-black border-gray-300 rounded-md p-2 w-full' >
                                    <option value="">Choose option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                {response?.doYouHaveAccessToInternet && <span className="text-red-400 text-sm">{response?.doYouHaveAccessToInternet}</span>}
                            </label>
                            <label htmlFor='howDidYouHearAboutThisJob' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>How did you hear about this course?</span>
                                <select name='howDidYouHearAboutThisJob' id='howDidYouHearAboutThisJob' className='border text-black border-gray-300 rounded-md p-2 w-full' >
                                    <option value="">Choose option</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="X">X</option>
                                    <option value="From a friend">From a friend</option>
                                    <option value="Other">Other</option>
                                </select>
                                {response?.howDidYouHearAboutThisJob && <span className="text-red-400 text-sm">{response?.howDidYouHearAboutThisJob}</span>}
                            </label>
                            <label htmlFor='academicBackground' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>What is your most recent academic background?</span>
                                <select name='academicBackground' id='academicBackground' className='border text-black border-gray-300 rounded-md p-2 w-full' >
                                    <option value="">Choose option</option>
                                    <option value="High School Graduate">High School Graduate</option>
                                    <option value="Joining University in the next 6 months">Joining University in the next 6 months</option>
                                    <option value="Attending Year 1 in University">Attending Year 1 in University</option>
                                    <option value="Attending Year 2 in University">Attending Year 2 in University</option>
                                    <option value="Attending Year 3 in University">Attending Year 3 in University</option>
                                    <option value="In the final year at University">In the final year at University</option>
                                    <option value="University Graduate">University Graduate</option>
                                    <option value="Did not join university">Did not join university</option>
                                    <option value="Not joining university soon">Not joining university soon</option>
                                </select>
                                {response?.academicBackground && <span className="text-red-400 text-sm">{response?.academicBackground}</span>}
                            </label>
                            <label htmlFor='universityBeingAttended' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>If you are attending university, which university are you attending?<span className="text-sm"> (Fill this field if you are attending university)</span></span>
                                <select name='universityBeingAttended' id='universityBeingAttended' className='border text-black border-gray-300 rounded-md p-2 w-full'>
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
                                {response?.universityBeingAttended && <span className="text-red-400 text-sm">{response?.universityBeingAttended}</span>}
                            </label>
                            <label htmlFor='currentOccupation' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Current Occupation</span>
                                <select name='currentOccupation' id='currentOccupation' className='border text-black border-gray-300 rounded-md p-2 w-full' >
                                    <option value="">Choose option</option>
                                    <option value="Student">Student</option>
                                    <option value="Employed Full-time">Employed Full-time</option>
                                    <option value="Employed Part-time">Employed Part-time</option>
                                    <option value="Unemployed">Unemployed</option>
                                    <option value="In waiting year">In waiting year</option>
                                </select>
                                {response?.currentOccupation && <span className="text-red-400 text-sm">{response?.currentOccupation}</span>}
                            </label>
                            <label htmlFor='availability' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>What is your availability</span>
                                <select name='availability' id='availability' className='border text-black border-gray-300 rounded-md p-2 w-full' >
                                    <option value="">Choose option</option>
                                    <option value="Day">Day</option>
                                    <option value="Evening">Evening</option>
                                    <option value="Flexible">Flexible</option>
                                </select>
                                {response?.availability && <span className="text-red-400 text-sm">{response?.availability}</span>}
                            </label>
                            <label htmlFor='motivation' className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>What motivated you to join this course/program? <span className="text-sm">(Required)</span></span>
                                <textarea name='motivation' rows={7} id='motivation' className='border border-gray-300 text-black rounded-md p-2 w-full h-30' placeholder="Your response goes here..." />
                                {response?.motivation && <span className="text-red-400 text-sm">{response?.motivation}</span>}
                            </label>
                            <label htmlFor="confirmationOfWillingnessToPay" className='flex flex-col space-y-2'>
                                <span className='text-lg font-semibold text-black'>Confirmation<span className="text-sm"> (Optional)</span></span>
                                <div>
                                    <input type="checkbox" name="confirmationOfWillingnessToPay" id="confirmationOfWillingnessToPay" value={"Yes"} />
                                    <span className="ml-2">By checking this box, I confirm that I am willing to pay for this course, and ready for the next stage of the admission process.</span>
                                </div>
                            </label>
                            <label htmlFor='course' className='flex-col space-y-2 hidden'>
                                <input type='text' name='course' value={courseId} id='course' className='text-black border border-gray-300 rounded-md p-2 w-full' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <SubmitButton />
                    </div>
                </form>
            </div>
        </section>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className='px-6 py-2 w-fit rounded-sm bg-sky-950 hover:bg-sky-500 text-white font-bold'>
            {pending ? "Submitting..." : "Apply"}
        </button>
    )
}
