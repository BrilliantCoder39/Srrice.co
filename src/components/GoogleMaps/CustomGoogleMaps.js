import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import YoutubePlayer from '../YoutubeComponent';
import NavBar from './NavBar';
import processIcon from '../../images/Icons/progress.png';
import completedIcon from '../../images/Icons/completed.png';
import scheduledIcon from '../../images/Icons/scheduled.png';
import { useDispatch } from 'react-redux';
import { setProjectStyle } from '../../redux/actions/projectStactusAction';
import projects from '../../helpers/Project1';

const containerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex', // Make the container a flex container
};

const defaultCenter = {
  lat: 10.2532778,
  lng: -61.3370555
};
const cardData = [
    { title: 'IDENTIFIED (Fiscal 2023/2024 )', number: 306, description: 'Projets', link: 'https://srric.co/#', status: 'completed' , bottom:'View All(2022-2023)'},
    { title: 'SCHEDULED', number: 2, description: 'Projects', link: 'https://srric.co/#',status: 'scheduled' ,bottom:'View All', icon:scheduledIcon},
    { title: 'IN PROGRESS', number: 6, description: 'Projects', link: 'https://srric.co/#' , status: 'progress', bottom:'View All',icon:processIcon},
    { title: 'COMPLETED', number: 41, description: 'Projects', link: 'https://srric.co/#', status: 'completed' , bottom:'View All', icon:completedIcon},
  ];


const Map = () => {

  const [selected, setSelected] = useState(null);
  const mapRef = useRef(null);
  const disPatch= useDispatch();
  const handleProjectClick = useCallback((project) => {
    if (mapRef.current) {
      mapRef.current.panTo(project.location);
      setSelected(project);
    }
  }, []);

  const handleProjectStatus =(status)=>{
    disPatch(setProjectStyle(status));
  }
  //AIzaSyBuL4FuumNhtCmkLqHMlVlHRSTbKMeTLvU
  return (
    <div style={containerStyle}> {/* Parent container */}
      <NavBar projects={projects} onProjectClick={handleProjectClick} /> {/* NavBar */}
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={{ flex: 1 }} // GoogleMap takes up remaining space
          center={defaultCenter}
          zoom={10}
          onLoad={(map) => (mapRef.current = map)}
        >
          {projects.map((project, index) => (
            <Marker
              key={index}
              position={project.location}
              onClick={() => setSelected(project)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={selected.location}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <div>
                    <h2>{selected.title}</h2>
                </div>
                <YoutubePlayer videoId={selected.videoId}/>
              </div>
            </InfoWindow>
          )}
          <div className='flex flex-wrap justify-center items-start absolute bottom-[20px] z-20 w-full'>
          {cardData.map((card, index) => (
              <div key={index} className='flex justify-center hidden sm:flex md:w-1/2 lg:w-1/4 p-4'>
                <div className='relative flex flex-col bg-white h-[140px] p-[10px] rounded-[15px] shadow-sm sm:w-[200px] md:w-[300px]'>
                  <div className='text-[14px] font-bold text-[#A0A0A0]'>
                    {card.title}
                  </div>
                  <div className='flex items-center'>
                    <div className='mr-1 font-bold text-[42px] text-[#1f2027]'>{card.number}</div>
                    <div>{card.description}</div>
                  </div>
                  <div className='text-[12px] text-[#E31300] cursor-pointer mt-auto' onClick={()=>handleProjectStatus(card.status)}>{card.bottom}</div>
                  {card.icon && (
                    <div className='absolute bottom-0 right-0 mb-[10px] mr-[10px]'>
                      <img src={card.icon} alt='Icon' className='w-[30px]' />
                    </div>
                  )}
                </div>
              </div>
            ))}
                {/* {cardData.map((card, index) => (
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
                                <div className='text-[12px] text-[#E31300]' onClick={()=>handleProjectStatus(card.status)} style={{ cursor: 'pointer' }}>{card.bottom}</div>
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                           {(card.icon)? <div className='w-[50px]'><img src={card.icon} alt='Process Icon' /></div>:''}
                        </div>
                    </div>
                ))} */}
          </div>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
