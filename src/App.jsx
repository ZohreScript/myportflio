import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/contact';

function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>

      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>)
}

export default App




  //      <div className="flex items-center gap-[10px]">
  //      <span className="w-[35px] h-[35px] rounded-full bg-[#3b2d33] text-white font-[500]
  //       text-[18px] flex items-center justify-center">ZO</span> <div className="leading-[20px]"> 
  //       <h2 className="text-gray-200 font-[500] text-[18px]" >zohre omidi</h2> 
  //       <p className="text-gray-400 text-[14px] font-[500]" >Frontend Developer</p>
  //        </div> 
  //        </div>
  //         <div>
  //            <p className="text-gray-400 text-[16px]">Copyright 2024 by zo- All right reserved</p>
  //            </div>

  // </div>

  //               </div >
  // i need the div about copyright be justify between