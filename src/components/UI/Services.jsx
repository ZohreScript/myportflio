import React from 'react'
import frontedImg from '../../assets/images/front-end.png'
import uiuxImg from '../../assets/images/design.png'
function Services() {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do i help</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[600] leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ad pariatur qui a quo cum velit porro nisi necessitatibus soluta distinctio hic, possimus dolorem aliquid itaque consectetur veritatis, tempora in?
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>


                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                        {/* vertical line  */}
                        <div className='hidden absolute w-1 sm:block bg-primaryColor h-full left-1/2 transform -translate-x-1/2' ></div>
                        {/* left card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white  text-xl'>
                                                Frontend Developer
                                            </h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white  leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat eaqu ectetur aperiam ullam! Impedit consectetur illo voluptas assumenda est voluptatibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={frontedImg} alt='' />
                                    </figure>

                                </div>
                            </div>


                        </div>
                        {/* right card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white  text-xl'>
                                            UIUX Designer
                                            </h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white  leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat eaqu ectetur aperiam ullam! Impedit consectetur illo voluptas assumenda est voluptatibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={uiuxImg} alt='' />
                                    </figure>

                                </div>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services