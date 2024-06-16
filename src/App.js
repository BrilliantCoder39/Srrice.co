import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/MainRoutes';
import backgroundImage from './images/Backgrounds/trin-map.png';
import whitelogo from './images/Icons/logo-white.png';
import downIcon from './images/Icons/down.gif';

import { setHuman } from './redux/actions/isHumanAction';
import cardData from './helpers/Carddata';
function App() {
  const dispatch = useDispatch();
  const isHuman = useSelector(state => state.human);
  console.log(isHuman);

  const handleRecaptchaChange = () => {
    dispatch(setHuman(true));
  };

  return (
    <div>
      {!isHuman ? (
        <div className="relative w-full min-h-screen">
          <img src={backgroundImage} className='opacity-70 w-full h-full object-cover fixed top-0 left-0 z-0' alt="Background" />
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-white'>
            <div className='flex flex-col items-center'>
              <div className='absolute top-[15vh] left-1/2 transform -translate-x-1/2 text-center z-10 text-[30px]'>
                <img src={whitelogo} alt="Logo" className='w-[300px]' />
              </div>
              <div className='absolute top-[25vh] left-1/2 transform -translate-x-1/2 text-center z-10 text-[20px] sm:text-[30px]'>
                Complete the Captcha to access SRRICs Stats.
              </div>
              <div className='absolute top-[33vh] left-1/2 transform -translate-x-1/2 text-center z-10 text-[30px] w-[120px]'>
                <img src={downIcon} alt="Down Icon" />
              </div>
            </div>
          </div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-20'>
            <form>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
            </form>
          </div>
          <div className='flex flex-wrap justify-center items-start absolute bottom-[20px] z-20 w-full'>
            {cardData.map((card, index) => (
              <div key={index} className='flex justify-center hidden sm:flex md:w-1/2 md:show lg:w-1/4 p-4'>
                <div className='relative flex flex-col bg-white h-[140px] p-[10px] rounded-[15px] shadow-sm w-[300px]'>
                  <div className='text-[14px] font-bold text-[#A0A0A0]'>
                    {card.title}
                  </div>
                  <div className='flex items-center'>
                    <div className='mr-1 font-bold text-[42px] text-[#1f2027]'>{card.number}</div>
                    <div>{card.description}</div>
                  </div>
                  <div className='text-[12px] text-[#E31300] cursor-pointer mt-auto'>{card.bottom}</div>
                  {card.icon && (
                    <div className='absolute bottom-0 right-0 mb-[50px] mr-[10px]'>
                      <img src={card.icon} alt='Icon' className='w-[50px]' />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
