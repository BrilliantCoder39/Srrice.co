import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Welcome from '../pages/Welcome';
import Brief from '../pages/Brief';
import CitizenPortal from '../pages/CitizenPortal';
import ConstractorsPortal from '../pages/ConstractorsPortal';
import News from '../pages/News';
import ProcurementActivities from '../pages/ProcurementActivities';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';

function MainRoute() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<Projects />} />
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
      <Footer />  */}
    </div>
  );
}

export default MainRoute;
