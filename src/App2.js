// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import MainRoute from './routes/MainRoutes';
import backgroundImage from './images/Backgrounds/trin-map.png';
import processIcon from './images/Icons/progress.png';
import whitelogo from './images/Icons/logo-white.png';
import downIcon from './images/Icons/down.gif';
import { setHuman } from './redux/actions/isHumanAction';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const dispatch = useDispatch();
  const isHuman = useSelector(state => state.human);
  console.log(isHuman);
  const handleRecaptchaChange = () => {
    dispatch(setHuman(true));
  };

  const cardData = [
    { title: 'Card 1', number: 306, description: 'Projets', link: 'https://srric.co/#' },
    { title: 'Card 2', number: 412, description: 'Projects', link: 'https://srric.co/#' },
    { title: 'Card 3', number: 524, description: 'Tasks', link: 'https://srric.co/#' },
    { title: 'Card 3', number: 524, description: 'Tasks', link: 'https://srric.co/#' },
  ];

  return (
    <div>
      {!isHuman ? (
        <div className="relative w-full h-[100vh]">
          <img src={backgroundImage} className='opacity-70 w-full h-full object-cover fixed top-0 left-0 -z-10' alt="Background" />
          <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-white'>
            <div className='flex-col justify-center items-center'>
              <div className='absolute w-[300px] top-[15vh] left-1/2 transform -translate-x-1/2 text-center text-white z-10 text-[30px]'>
                <img src={whitelogo} alt="Logo " />
              </div>
              <div className='absolute top-[25vh] left-1/2 transform -translate-x-1/2 text-center text-white z-10 text-[30px]'>
                Complete the Captcha to access SRRICs Stats.
              </div>
              <div className='absolute top-[33vh] left-1/2 transform -translate-x-1/2 text-center text-white z-10 text-[30px] w-[120px]'>
                <img src={downIcon} alt="Down Icon" />
              </div>
            </div>
          </div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <form className='z-20'>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
            </form>
          </div>
          <div className='flex absolute w-[100%] bottom-[20px]'>
            {cardData.map((card, index) => (
              <div key={index} className='flex relative justify-between items-center bg-white w-[300px] h-[140px] mx-[5%] p-[10px] rounded-[15px] z-20 shadow-sm'>
                <div className="flex ml-[3px] flex-col h-[120px] justify-between">
                  <div className='text-[14px] font-bold text-[#A0A0A0]'>
                    {card.title}
                  </div>
                  <div className="flex">
                    <div className="mr-1 font-bold text-[42px] text-[#1f2027]">{card.number}</div>
                    <div className='relative mt-[25px]'>{card.description}</div>
                  </div>
                  <div>
                    <a href={card.link} className='text-[12px] text-[#E31300]'>View Details</a>
                  </div>
                </div>
                <div className='flex-col items-center justify-center'>
                  <div className='w-[50px]'><img src={processIcon} alt='Process Icon' /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <BrowserRouter>
          <MainRoute />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
