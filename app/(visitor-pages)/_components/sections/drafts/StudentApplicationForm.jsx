"use client"
import React, { useState } from 'react';

const StudentApplicationForm = () => {

  const labelWithIcon = (text, tooltip) => (
    <div className="flex justify-between items-center group">
      <span className="block text-[20px] text-[#0B2B4E]">{text}</span>
      <div className="relative">
        <svg
          fill="rgba(0, 0, 0, 0.1)"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          className="cursor-pointer"
        >
          <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 00.241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
        </svg>
        <div className="absolute hidden group-hover:block w-[200px] h-[40px] bg-gray-200 text-gray-800 text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
          {tooltip}
        </div>
      </div>
    </div>
  );

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    age: '',
    schoolName: '',
    certificate: null,
    resume: null,
    copyOfId: null,
    githubLink: '',
    linkedinLink: '',
    profileLink: '',
    currentOccupation: ''
  });


  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone number is required";
    if (!formData.gender) tempErrors.gender = "Gender is required";
    if (!formData.age) tempErrors.age = "Age is required";
    if (!formData.schoolName) tempErrors.schoolName = "School name is required";
    if (!formData.certificate) tempErrors.certificate = "Certificate is required";
    if (!formData.resume) tempErrors.resume = "Resume is required";
    if (!formData.copyOfId) tempErrors.copyOfId = "Copy of ID is required";
    if (!formData.githubLink) tempErrors.githubLink = "Github link is required";
    if (!formData.linkedinLink) tempErrors.linkedinLink = "LinkedIn link is required";
    if (!formData.profileLink) tempErrors.profileLink = "Profile link is required";
    if (!formData.currentOccupation) tempErrors.currentOccupation = "Current occupation is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage('Form submitted successfully!');
      console.log('Form Data: ', formData);
 
    } else {
      setSuccessMessage('');
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg">
      <h2 className="font text-[30px] font-semibold mb-6 text-[#6AACE8]">Personal information</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block  text-[20px] text-[#0B2B4E]">First Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="John"  name="firstName" value={formData.firstName}
              onChange={handleChange} />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
          </div>
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Last Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Smith"  name="lastName" value={formData.lastName}
              onChange={handleChange} />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="xxxxxxx@gmail.com" name="email" value={formData.email}
              onChange={handleChange} />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Phone Number</label>
            <input type="tel" className="w-full p-2 border border-gray-300 rounded mt-1" name="phoneNumber" value={formData.phoneNumber}
              onChange={handleChange} />
            {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Gender</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-1 " name="gender" value={formData.gender}
              onChange={handleChange}>
              <option value="">Select a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
          </div>
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Age</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded mt-1" name="age" value={formData.age}
              onChange={handleChange} />
            {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
          </div>
        </div>

        {/* Education Background */}
        <h2 className="font text-[30px] font-semibold mb-6 text-[#6AACE8]">Education background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">School name or institute</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter school name" name="schoolName" value={formData.schoolName}
              onChange={handleChange} />
            {errors.schoolName && <span className="text-red-500 text-sm">{errors.schoolName}</span>}
          </div>
          <div className="w-full max-w-md">
            <label className="block">{labelWithIcon("Certificate", "Please provide certificates from the bootcamp you have attended.")}</label>
            <div className="relative flex items-center">
              <input
                type="file"
                name="certificate"

                onChange={handleChange}
                className="absolute opacity-0 w-full h-full cursor-pointer "
              />

              <label
                htmlFor="file"
                className="w-full bg-white border border-gray-300 rounded-md flex items-center cursor-pointer"
              >

                <span className="flex-grow py-2 px-3 text-[#000000]/65 font text-[14px]">Select a file</span>
                {formData.certificate && <span className="text-sm">{formData.certificate.name}</span>}

                <div className="bg-gray-200 border-l border-gray-300 px-4 py-2">Browse</div>
              </label>
            </div>

            {errors.certificate && <span className="text-red-500 text-sm">{errors.certificate}</span>}
          </div>

        </div>

        {/* Documents */}
        <h2 className="font text-[30px] font-semibold mb-6 text-[#6AACE8]">Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="w-full max-w-md">
            <label className="block">{labelWithIcon("Resume", "Please upload your resume.")}</label>
            <div className="relative flex items-center">
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="absolute opacity-0 w-full h-full cursor-pointer "
              />

              <label
                htmlFor="file"
                className="w-full bg-white border border-gray-300 rounded-md flex items-center cursor-pointer"
              >
                <span className="flex-grow py-2 px-3 text-[#000000]/65 font text-[14px]">Select a file</span>
                {formData.resume && <span className="text-sm">{formData.resume.name}</span>}
                <div className="bg-gray-200 border-l border-gray-300 px-4 py-2">Browse</div>
              </label>
            </div>
            {errors.copyOfId && <span className="text-red-500 text-sm">{errors.resume}</span>}
          </div>
          <div className="w-full max-w-md">
            <label className="block">{labelWithIcon("Copy of ID", "Please provide a copy of your valid national ID.")}</label>
            <div className="relative flex items-center">
              <input
                type="file"
                name="copyOfId"
                onChange={handleChange}
                className="absolute opacity-0 w-full h-full cursor-pointer "
              />
              <label
                htmlFor="file"
                className="w-full bg-white border border-gray-300 rounded-md flex items-center cursor-pointer" onChange={handleChange}
              >
                <span className="flex-grow py-2 px-3 text-[#000000]/65 font text-[14px]">Select a file</span>
                {formData.copyOfId && <span className="text-sm">{formData.copyOfId.name}</span>}
                <div className="bg-gray-200 border-l border-gray-300 px-4 py-2">Browse</div>
              </label>
            </div>
            {errors.copyOfId && <span className="text-red-500 text-sm">{errors.copyOfId}</span>}
          </div>

        </div>

        {/* Other Information */}
        <h2 className="font text-[30px] font-semibold mb-6 text-[#6AACE8]">Other information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Github link</label>
            <input type="url" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter Link" name="githubLink" value={formData.githubLink}
              onChange={handleChange} />
            {errors.githubLink && <span className="text-red-500 text-sm">{errors.githubLink}</span>}
          </div>
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Linkedin link</label>
            <input type="url" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter Link" name="linkedinLink" value={formData.linkedinLink}
              onChange={handleChange} />
            {errors.linkedinLink && <span className="text-red-500 text-sm">{errors.linkedinLink}</span>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Profile link</label>
            <input type="url" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter Link" name="profileLink" value={formData.profileLink}
              onChange={handleChange} />
            {errors.profileLink && <span className="text-red-500 text-sm">{errors.profileLink}</span>}
          </div>
          <div>
            <label className="block text-[20px] text-[#0B2B4E]">Current Occupation</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" name="currentOccupation" value={formData.currentOccupation}
              onChange={handleChange} />
            {errors.currentOccupation && <span className="text-red-500 text-sm">{errors.currentOccupation}</span>}
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-[236px] h-[54px] bg-[#317ACC] font font-normal text-[#FFFFFF] text-[18px] p-2 rounded-[8px] mt-4">Apply Now</button>

        {/* Success Message */}
        {successMessage && <div className="text-green-500 text-sm mt-4">{successMessage}</div>}
      </form>
    </div>
  );
};

export default StudentApplicationForm;
