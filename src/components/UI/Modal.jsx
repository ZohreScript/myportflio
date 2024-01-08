import portfolios from "../../assets/data/portfolioData";
import 'remixicon/fonts/remixicon.css';

const Modal = ({ activeID, SetShowModal }) => {
    
    const portfolio = portfolios.find(portfolio => portfolio.id == activeID);
    return (<div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40" onClick={() => SetShowModal(false)}>
        <div className="  w-6/12 md:max-w-[500px] mt-12  absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5
        ">
            <div>
                <figure >
                    <img  src={portfolio.imgUrl} alt="" />
                </figure>
            </div>

            <div>
                <h2 className="text-2xl text-headingColor font-[700] my-5">{portfolio.title}</h2>

                <div className="mt-5 flex items-center gap-3 flex-wrap">
                    <h4 className="text-headingColor text-[18px] text-[700]">Technologist: </h4>
                    {portfolio.technologies.map((item, index) => (
                        <span key={index} className="bg-gray-200 py-1 px-2 rounded-[5px] leading-7 text-[14px]">{item}</span>
                    ))}
                </div>
                <a href={portfolio.siteUrl} >
                    <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                        Live Site
                    </button>
                </a>
            </div>
            <button
                onClick={() => SetShowModal(false)}
                className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] 
                right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px]
                 leading-0 cursor-pointer" > <i class="ri-close-line"></i></button>

        </div>
    </div>
    );
}

export default Modal;