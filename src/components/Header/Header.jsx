import { useEffect, useRef } from "react"

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)


  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')}
        else {
          headerRef.current.classList.remove('sticky__header')
        }
    })
  }
  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const handleClick = e => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    })
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');


  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center"> ZO </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Zohre Omidi</h2>
              <p className=" text-smallTextColor text-[14px] font-[500]">
                FrontEnd Developer
              </p>

            </div>
          </div>


          {/* menu */}
          <div className="menu"
          
          ref={menuRef}
           onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#about">About</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#services">services</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#portfolio">portfolio</a></li>
              <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#contact">contact</a></li>

            </ul>
          </div>
          {/* menu right */}
          <div className="flex items-center gap-4">
            <a href="mailto:z.omidi74@gmail.com" className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid 
            border-smallTextColor py-2 px-0 sm:px-2  rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
             ease-in duration-300">
              <i class="ri-send-plane-line"></i>Let's talk
            </a>

            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;