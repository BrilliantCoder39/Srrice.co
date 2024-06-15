import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Header from '../components/Header/header';
import Welcome from '../pages/Welcome';
import Footer from '../components/Footer/Footer';
import Brief from '../pages/Brief';
import CitizenPortal from '../pages/CitizenPortal';
import ConstractorsPortal from '../pages/ConstractorsPortal';
import News from '../pages/News';
import ProcurementActivities from '../pages/ProcurementActivities';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import { useSelector } from 'react-redux';

function RoutePages() {
  const isHuman = useSelector(state => state.human);
  return (
    <div>
      {/* <div className='z-10 fixed top-0 w-full'><Header /></div>
      <div className='flex mx-[5%] lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] 3xl:mx-[18%] mt-[160px]'> */}
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/brief' element={<Brief />} />
          <Route path='/coming' element={<CitizenPortal />} />
          <Route path='/contractors-portal' element={<ConstractorsPortal/>} />
          <Route path='/News' element={<News/>} />
          <Route path='/procurement-activities' element={<ProcurementActivities/>} />   
          <Route path='/careers' element={<Careers/>} />
          <Route path='/contact' element={<Contact/>} />           
        </Routes>
      {/* </div>
      <Footer /> */}
    </div>
  );
}

export default RoutePages;
