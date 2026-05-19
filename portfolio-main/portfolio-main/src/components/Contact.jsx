import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import Wrapper from "./Wrapper";
import { fadeIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_jpmixeh',
      'template_qvfe9se',
      {
        from_name: form.name,
        to_name: 'Ansh Sharma',
        from_email: form.email,
        to_email: 'anshji08@gmail.com',
        message: form.message
      },
      'jzgGZw1EGmtQ7Rd-n'
    ).then(() => {
      setLoading(false);
      alert('Message sent successfully');
      setForm({
        name: '',
        email: '',
        message: ''
      })

    }, (error) => {
      setLoading(false);
      alert('Message sending failed');
    });
  }


  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center'>
        <motion.div variants={fadeIn("up", "tween", 0.1, 0.4)}
          className='flex-[0.65] bg-[#0e1226] p-8 rounded-2xl'>
          <p className={`${styles.sectionSubText} text-center`}>
            Get in Touch
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            CONTACT
          </h2>

          <form ref={formRef} onSubmit={handleSubmit}
            className='mt-6 flex flex-col gap-5'>
            <label className='flex flex-col'>
              <span className='text-[#ffffff] font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Enter Your Name'
                className='bg-[#050816] rounded-lg outlined-none border-none font-medium py-4 px-6 placeholder:text-[#b2b2b2] text-[#ffffff]'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-[#ffffff] font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Enter Your Email'
                className='bg-[#050816] rounded-lg outlined-none border-none font-medium py-4 px-6 placeholder:text-[#b2b2b2] text-[#ffffff]'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-[#ffffff] font-medium mb-4'>Your Message</span>
              <textarea
                rows="5"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-[#050816] rounded-lg outlined-none border-none font-medium py-4 px-6 placeholder:text-[#b2b2b2] text-[#ffffff]'
              />
            </label>

            <button
              type="submit"
              className='bg-[#050816] py-3 px-8 outline-none w-fit text-[#ffffff] font-bold shadow-md shadow-[#050816] rounded-xl'
            >
              {loading ? "Sending..." : "Send"}

            </button>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default Wrapper(Contact, "contact")