import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className='pb-16'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-2'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                        <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13184.821586470227!2d47.05149893677436!3d34.29430950233321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ffaee83c3dbebeb%3A0xc3e6324e1c390f7b!2z2YXbjNiv2KfZhiDZgdix2K_ZiNiz24w!5e0!3m2!1sfa!2s!4v1704139236945!5m2!1sfa!2s" className='border-0 w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='w-full  md:w-1/2 sm:h-[450px] lg:flex items-center bg-primaryColor p-8' >
                        <form className='w-full py-5' action="mailto:z.omidi74@gmail.com">
                           
                            <div className='mb-5'>
                                <input type='text' placeholder='Enter Your name' className='w-full p-3 focus:outline-none rounded-[5px]' />

                            </div>
                            <div className='mb-5'>
                                <input type='email' placeholder='Enter Your email' className='w-full p-3 focus:outline-none rounded-[5px]' />

                            </div>
                            <div className='mb-5'>
                                <input type='text' placeholder='Enter Your Subject' className='w-full p-3 focus:outline-none rounded-[5px]' />

                            </div>
                            <div className='mb-5'>
                                <textarea type='text' rows={3} placeholder='write your message' className='w-full p-3 focus:outline-none rounded-[5px]' />

                            </div>
                            <button className='w-full p-3  focus:outline-none rounded-[5px] bg-amber-900 text-white hover:bg-amber-950 text-center ease-linear duration-150' >Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}

export default Contact