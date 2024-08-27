"use client";
import React, { useState } from 'react';
import ReusableSection from '../../ReusableSection';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSuccessMessage('Thank you for reaching out to us! We will get back to you shortly.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <ReusableSection isTopSection background="">
      <div className='flex justify-between flex-wrap bg-white w-full border p-8 md:p-20 shadow-lg rounded-md'>
        {/* Left side  */}
        <div className="flex flex-col justify-between items-start w-full md:w-[48%] mb-10">
          {successMessage && <strong className="font-bold">{successMessage}</strong>}
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-4 flex-col">
              <label htmlFor='fullName' className='flex flex-col space-y-2'>
                <input
                  type='text'
                  name='fullName'
                  id='fullName'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className='border-2 border-gray-300 rounded-md p-2 w-full'
                  placeholder="Full Name"
                  required
                />
                {errors.fullName && <span className="text-red-400 text-sm">{errors.fullName}</span>}
              </label>
              <label htmlFor='email' className='flex flex-col space-y-2'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='border-2 border-gray-300 rounded-md p-2 w-full'
                  placeholder="Email address"
                  required
                />
                {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
              </label>
              <label htmlFor='message' className='flex flex-col space-y-2'>
                <textarea
                  name='message'
                  id='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  className='border-2 border-gray-300 rounded-md p-2 w-full h-40'
                  placeholder="Your message here..."
                  required
                />
                {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}
              </label>
              <button type="submit" className="bg-[#317ACC] py-3 px-6 w-full md:w-fit text-white rounded-md hover:bg-[#296494]">Submit</button>
            </div>
          </form>
        </div>

        {/* Right side  */}
        <div className="space-y-4 flex flex-col justify-between items-start w-full md:w-[48%]">
          <div className="text-black font text-base md:text-xl">
            <p>SheCanCode BootCamp</p>
            <p>KG 549 Street</p>
            <p>
              <a
                href="https://www.google.com/maps?q=Impact+Center,+Kacyiru"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Impact Center, Kacyiru
              </a>
            </p>
            <p>+2507828293894</p>
            <p>education@igirerwanda.org</p>
          </div>
          <div className="w-full flex justify-start items-cente md:w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.553554881119!2d30.072044274050132!3d-1.9306041366678404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70041075f0d%3A0x8dd8bd686d407d92!2sSheCanCode%20Training%20Center!5e0!3m2!1sfr!2srw!4v1717664442768!5m2!1sfr!2srw"
              width="500"
              height="190"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </ReusableSection>
  );
};

export default ContactForm;
