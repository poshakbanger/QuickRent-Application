import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send the form data to an API)
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact <span className="text-blue-500">Us</span>
        </h2>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">We'd love to hear from you!</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Office Location with Map Placeholder */}
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:ml-10">
            <h3 className="text-2xl font-semibold mb-6">Our Office Location</h3>

            {/* Placeholder for map */}
            <div className="relative h-72 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.850967551444!2d90.41117421517556!3d23.81023179250731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7339eb3db43%3A0x1124f9a08c23c7c!2sDhaka%20University!5e0!3m2!1sen!2sbd!4v1600137363177!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>

            {/* Office Address Placeholder */}
            <div className="mt-6 text-gray-700">
              <p className="font-semibold">Office Address:</p>
              <p>QuickRent Inc., 123 Gadget Street, Silicon Valley, CA 94043</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
