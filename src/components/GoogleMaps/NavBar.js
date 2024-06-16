import React, { useState } from 'react';
import completedIcon from '../../images/NavBar/Group-18.png';
import scheduledIcon from '../../images/NavBar/Group-20.png';
import ongoingIcon from '../../images/NavBar/1.png';
import { useSelector } from 'react-redux';

const NavBar = ({ projects, onProjectClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const projectStyle = useSelector(state => state.activedProjecs);

  const getStatusIcon = (status) => {
    if (status === 'completed') {
      return completedIcon;
    } else if (status === 'scheduled') {
      return scheduledIcon;
    } else {
      return ongoingIcon; // Default icon or handle other statuses as needed
    }
  };

  // Filter projects based on projectStyle; if "All", show all projects
  const filteredProjects = projectStyle === 'All' 
    ? projects 
    : projects.filter(project => project.status === projectStyle);

  return (
    <nav
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`p-4 bg-white border-r border-gray-300 transition-all duration-300 h-full z-30 ${isExpanded ? 'w-[300px]' : 'w-[100px]'
        }`}
      style={{ overflowY: 'auto' }} // Allows vertical scrolling if items overflow
    >
      <ul className="list-none p-0 ml-[5px] flex flex-col">
        {filteredProjects.map((project, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => onProjectClick(project)}
              className="bg-none border-none cursor-pointer text-blue-500 focus:outline-none truncate flex"
              style={{ maxWidth: isExpanded ? '280px' : '50px' }} >
              <img src={getStatusIcon(project.status)} className='min-w-[50px] h-[40px] flex items-center justify-center' alt={`${project.status} icon`} />
              <div className='flex flex-col items-center justify-center mt-[5px] ml-[10px]'>{isExpanded ? project.title : ''}</div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
