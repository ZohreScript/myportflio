const Footer = () => {
    return (
        <footer className="bg-[#12141e] pt-12">
            {/* footer top */}
            <div className="container">
                <div className=" sm:flex  items-center justify-between md:gap-8">
                    <div className="w-full sm:w-1/2">
                        <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">Do you want to make beautiful products?</h2>
                        <a href="#contact">
                            <button className='bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] hover:font-[500] hover:bg-smallTextColor hover:text-white ease-in duration-700'>
                                <a href="#contact" className='flex items-center gap-2
                                '><i class="ri-mail-line"></i>Hire Me</a>
                            </button>
                        </a>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <p className="text-gray-300 leading-7 mt-4 sm:mt-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, tempore, aut sed inventore recusandae impedit odio, suscipit aspernatur doloremque necessitatibus maxime minima libero error dicta velit voluptatem porro veritatis voluptatum.</p>
                        <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10" >
                            <span className="text-gray-300 font-[600] text-[15px]">Follow Me:</span>
                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="#github" className="text-gray-300 font-[500] text-18px"><i class="ri-github-line"></i></a>
                            </span>

                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="#instagram" className="text-gray-300 font-[500] text-18px"><i class="ri-instagram-line"></i></a>
                            </span>
                            <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="#linkdin" className="text-gray-300 font-[500] text-18px"><i class="ri-linkedin-box-line"></i></a>
                            </span>
                        </div>

                    </div>

                </div>



                <div>
                    <ul className="flex items-center justify-center mt-10 gap-10">
                        <li><a className="text-gray-400 font-[600]" href="#about">About</a></li>
                        <li><a className="text-gray-400 font-[600]" href="#services">services</a></li>
                        <li><a className="text-gray-400 font-[600]" href="#portfolio">portfolio</a></li>
                        <li><a className="text-gray-400 font-[600]" href="#contact">contact</a></li>

                    </ul>
                </div>
            </div>
            {/* footer bottom */}
            <div className="bg-[#1b1e29] py-3 mt-14">
                <div className="container">
                    <div className="flex items-center justify-center sm:justify-between">
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-[10px]">
                                <span className="w-[35px] h-[35px] rounded-full bg-[#3b2d33] text-white font-[500] text-[18px] flex items-center justify-center">ZO</span>
                                <div className="leading-[20px]">
                                    <h2 className="text-gray-200 font-[500] text-[18px]" >zohre omidi</h2>
                                    <p className="text-gray-400 text-[14px] font-[500]" >Frontend Developer</p>
                                </div>
                            </div>
                            <div><p className="text-gray-400 text-[16px]">Copyright 2024 by zo- All right reserved</p></div>

                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;