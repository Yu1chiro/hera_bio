import React, { useState, useEffect } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to send formData to your desired endpoint or perform any other action.
    console.log('Form Data:', formData);

    // Construct the WhatsApp message link
    const phoneNumber = '6281236715460'; // Replace with your phone number
    const message = `Name: ${formData.name}%Email: ${formData.email}%Message: ${formData.message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp link in a new tab or window
    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-l from-[#020617] to-[#0a37a1] text-white py-32"
    >
      <div className="max-w-md mx-auto p-4">
        {/* Heading */}
        <p className="text-4xl font-bold mb-4">
          <span className="border-b-4 border-[#00FFCA] inline-block">Contact</span>
        </p>
        {/* Description */}
        <p className="mb-6">
          Submit the form below or send me an email -{' '}
          <span className="font-bold">ryuukiharukaze25@gmail.com</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 text-gray-950 p-2 w-full rounded-md mb-4"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="linear"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 bg-gray-100 text-gray-950 w-full rounded-md mb-4"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-easing="linear"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-100 p-2 w-full text-gray-950 rounded-md mb-4"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
            placeholder="Message"
            rows="10"
          ></textarea>

          {/* Send Message Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="text-white group border-2 px-6 py-3 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
            >
              Send Message
              <span className="group-hover:translate-x-1 duration-300">
                <IoSendSharp className="ml-4" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
