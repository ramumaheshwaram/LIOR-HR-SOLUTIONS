import React from 'react';
import '../../../src/index.css';
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    message: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // 10MB in bytes (10 * 1024 * 1024 = 10,485,760 bytes)
      const maxSize = 10 * 1024 * 1024;

      if (file.size > maxSize) {
        setErrors((prev) => ({
          ...prev,
          resume: 'File size must be less than 10MB.'
        }));
        setFormData((prev) => ({ ...prev, resume: null }));
        e.target.value = null; // Reset the file input
        return;
      }
    }

    // If size is fine, update state and clear any previous resume errors
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.userType) newErrors.userType = 'Please select an option.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (formData.userType === 'jobseeker' && !formData.resume) {
      newErrors.resume = 'Resume is required for jobseekers.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('userType', formData.userType);
    data.append('message', formData.message);

    if (formData.resume) {
      data.append('attachment', formData.resume);
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/maheshwaramramu16@gmail.com', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json' // Explicitly tell FormSubmit we want a JSON response
        }
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', userType: '', message: '', resume: null });
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error.');
    }
  };

  // The main return statement for the component rendering its UI
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-100 my-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
      <p className="text-black mb-6 text-lg font-bold">
        Fill out the form below and our team will get back to you shortly.
      </p>

      {/* Success Message */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg font-medium">
          Thank you! Your message has been sent successfully. We will contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name Field */}
        <div>
          <label className="block font-semibold text-black text-lg mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-lg border text-gray-800 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary/20'
              }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-semibold text-black text-lg mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-lg border text-gray-800 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary/20'
              }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block font-semibold text-black text-lg mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 00000-0000"
            className={`w-full px-4 py-3 rounded-lg border text-gray-800 focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary/20'
              }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Radio Buttons for User Type */}
        <div>
          <label className="block font-semibold text-black text-lg mb-2">I am looking to: *</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="userType"
                value="jobseeker"
                checked={formData.userType === 'jobseeker'}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-black text-lg font-medium">Jobseeker</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="userType"
                value="employer"
                checked={formData.userType === 'employer'}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-black text-lg font-medium">Find the right candidates</span>
            </label>
          </div>
          {errors.userType && <p className="text-red-500 text-sm mt-1">{errors.userType}</p>}
        </div>

        {/* Conditional Resume Field */}
        {formData.userType === 'jobseeker' && (
          <div className="transition-all duration-300 animate-fadeIn">
            <label className="block text-lg font-semibold text-gray-700 mb-1">Upload Resume *</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={`w-full px-3 py-2 rounded-lg border text-black text-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black hover:file:bg-primary/80 ${errors.resume ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
          </div>
        )}

        {/* Message Field */}
        <div>
          <label className="block font-semibold text-black text-lg mb-1">Message *</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your requirements..."
            className={`w-full px-4 py-3 rounded-lg border text-gray-800 focus:outline-none focus:ring-2 resize-none ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary/20'
              }`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="md:w[20%] w-100% bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-primary border border-secondary shadow-md hover:text-black"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};