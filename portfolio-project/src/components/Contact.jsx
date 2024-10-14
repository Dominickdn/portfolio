import React, { useState } from 'react';
import emailjs from 'emailjs-com';

    
    const Contact = () => {
      // console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [status, setStatus] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
          .then((response) => {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          })
          .catch((error) => {
            setStatus('Failed to send message.');
            console.error('EmailJS error:', error);
          });
      };

      return (
        <>
        <div className="flex-1 flex items-center justify-center p-10">
                <div className="text-start max-w-4xl text-xl p-4">
                <img src='/three.svg' alt="next three"/>
                </div>
                <div className="text-start max-w-4xl text-xl p-4">
                <img src='/post.svg' alt="post image"/>
                </div>
                <div className="text-start max-w-4xl text-xl p-4">
                <img src='/react.svg' alt="react image"/>
                </div>
                <div className="text-start max-w-4xl text-xl p-4">
                <img src='/python.svg' alt="python image"/>
                </div>
          </div>
        <div className="flex justify-center "><div className="flex justify-self-center items-center border-b-2 w-1/2 pt-10"></div></div>
        <section className="flex flex-col items-center custom-font w-full">

      
        <div className="items-center max-w-4xl p-8">
            <h1 className="text-3xl text-inner-shadow py-2 font-semibold">Contact Me</h1>
          </div>

          </section>
        
        <div className="flex items-center justify-center custom-font p-10">
          <div className="bg-stone-900 p-10 rounded-lg shadow-lg w-full max-w-lg border-pink-200 border-2 ">
            {/* <h2 className="font-semibold text-lg mb-6 text-center">Contact Me</h2> */}
            {status && (
              <div className={`mb-4 p-2 text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-pink-200 border-2 rounded-md bg-slate-900"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-pink-200 border-2 rounded-md bg-slate-900"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 border-pink-200 border-2 rounded-md bg-slate-900"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-slate-500 font-bold py-2 px-4 rounded hover:bg-slate-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        </>
      );
    };
      
  export default Contact
  