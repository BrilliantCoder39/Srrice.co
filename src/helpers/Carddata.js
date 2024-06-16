import scheduledIcon from '../images/Icons/scheduled.png';
import completedIcon from '../images/Icons/completed.png';
import processIcon from '../images/Icons/progress.png';

const cardData = [
    { title: 'IDENTIFIED (Fiscal 2023/2024 )', number: 306, description: 'Projets', link: 'https://srric.co/#', status: 'completed' , bottom:'View All(2022-2023)'},
    { title: 'SCHEDULED', number: 2, description: 'Projects', link: 'https://srric.co/#',status: 'scheduled' ,bottom:'View All', icon:scheduledIcon},
    { title: 'IN PROGRESS', number: 6, description: 'Projects', link: 'https://srric.co/#' , status: 'progress', bottom:'View All',icon:processIcon},
    { title: 'COMPLETED', number: 41, description: 'Projects', link: 'https://srric.co/#', status: 'completed' , bottom:'View All', icon:completedIcon},
  ];
  export default cardData;