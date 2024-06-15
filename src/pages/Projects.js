import React from 'react';
import MapContainer from '../components/GoogleMaps/CustomGoogleMaps';
import CustomMenuBar from '../components/Header/CustomMenuBar';
import menuItems from '../components/Header/menu';

const Projects = () => {
    return (
        <div className="relative">
            <div className='absolute inset-0'>
                <MapContainer />
            </div>
            <div className="fixed top-0 right-0 z-50">
                <CustomMenuBar menuItems={menuItems} />
            </div>
        </div>
    );
}

export default Projects;
