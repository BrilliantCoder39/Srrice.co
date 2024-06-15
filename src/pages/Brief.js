import CountdownComponent from "../components/Brief/CountdownComponent";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";
const Brief = () => {

    return (
        <div >
            <div className='z-10 fixed top-0 w-full'><Header /></div>
            <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] 3xl:mx-[18%] mt-[160px]'>
                <div>
                    <div className="absolute top-[140px] opacity-25 text-[200px] text-gray-300 pointer-events-none text-bold ">
                        SRRIC BRIEF
                    </div>
                    <div className="mb-[120px]">
                        <div className="py-[20px]">Inside SRRIC</div>
                        <div className="text-[48px] font-bold">SRRIC Brief - Coming Soon</div>
                    </div>
                    <div className="w-[100%] ml-[20%] flex flex-col items-center justify-center">
                        <CountdownComponent />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Brief;