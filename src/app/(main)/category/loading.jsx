import {  PulseLoader } from 'react-spinners';

const LoadingCategoryPage = () => {
    return (
        <div className='flex items-center justify-center h-[90vh]'>
          <PulseLoader size={20} color='#D040FB'/>
        </div>
    );
};

export default LoadingCategoryPage;