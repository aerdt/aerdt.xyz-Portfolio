import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const Contact = ({ language }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const content = {
    EN: {
      title: "Get in touch",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Write your message",
      sendButton: "Send Message",
      successToast: "Thank you for your message!",
      errorToast: "Sorry, something went wrong. Please try again",
      mapTitle: "Let's meet for a coffee?"
    },
    UA: {
      title: "Зв’язатися зі мною",
      namePlaceholder: "Введіть ваше ім’я",
      emailPlaceholder: "Введіть вашу електронну адресу",
      subjectPlaceholder: "Тема",
      messagePlaceholder: "Напишіть ваше повідомлення",
      sendButton: "Надіслати",
      successToast: "Дякую за ваше повідомлення!",
      errorToast: "Вибачте, щось пішло не так. Спробуйте ще раз",
      mapTitle: "Зустрінемось на каву?"
    }
  };

  const currentContent = content[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    form.current.reset();
  };

  const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    const response = await fetch("https://formspree.io/f/xjkejoay", {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      resetForm();
      toast.success(currentContent.successToast, { /* ... */ });
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    toast.error(currentContent.errorToast, { /* ... */ });
  } finally {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
};

  return (
    <section 
      id="contact" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-headingColor mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-primaryColor mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-headingColor mb-2">
                  {currentContent.mapTitle}
                </h3>
                <p className="text-smallTextColor">
                📍 Zeeburgereiland, Amsterdam, Netherlands
                </p>
              </div>
              <div className="relative h-80 sm:h-96">
                <iframe
                  title="Zeeburgereiland"
                  src="https://www.google.com/maps/embed/v1/view?key=AIzaSyANGMP-qqY1zuCZ7kVh3o8YYq0qIY2Gx3E&center=52.3667,4.9500&zoom=14&maptype=roadmap"
                  className="w-full h-full border-0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    {currentContent.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.namePlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    {currentContent.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.emailPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="sr-only">
                    {currentContent.subjectPlaceholder}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="sr-only">
                    {currentContent.messagePlaceholder}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder={currentContent.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-semibold py-4 px-6 rounded-xl hover:bg-opacity-90 focus:ring-4 focus:ring-primaryColor focus:ring-opacity-50 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{language === "EN" ? "Sending..." : "Відправлення..."}</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line text-lg"></i>
                      {currentContent.sendButton}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;