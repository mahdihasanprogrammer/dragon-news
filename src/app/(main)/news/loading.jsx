import {  GridLoader } from 'react-spinners';

const LoadingNewsPage = () => {
    return (
        <div className='flex items-center justify-center h-[90vh]'>
          <GridLoader size={20} color='#D040FB'/>
        </div>
    );
};

export default LoadingNewsPage;