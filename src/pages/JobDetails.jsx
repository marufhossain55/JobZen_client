import { Link, useLoaderData, useParams } from 'react-router-dom';
import bannerLogo from '../assets/jobBanner.jpg';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const JobDetails = () => {
  // const jobDetails = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const {
    isPending,
    isError,
    error,
    data: jobDetails,
  } = useQuery({
    queryKey: ['jobDetails'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/job/${id}`);
      return res.data;
    },
  });
  if (isPending) {
    <span className='loading loading-ball loading-lg'></span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log(jobDetails);

  return (
    <div className='flex justify-center items-center '>
      <div>
        <img
          className=' rounded-lg shadow-lg h-[21rem]'
          src={bannerLogo}
          alt=''
        />
      </div>
      <div>
        <div className='max-w-2xl px-8 bg-white rounded-lg shadow-md dark:bg-gray-800 '>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-light py-1 text-gray-600 dark:text-gray-400'>
              Deadline : {jobDetails?.Application_Deadline}
            </span>
            <a
              className='px-3  text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'
              tabIndex='0'
              role='button'
            >
              {jobDetails?.Category}
            </a>
          </div>

          <div className='mt-2'>
            <h1
              className='text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'
              tabIndex='0'
              role='link'
            >
              {jobDetails?.Job_Title}
            </h1>
            <p className='mt-2 text-gray-600 dark:text-gray-300'>
              {jobDetails?.Description}
            </p>
          </div>
          <div className='pt-4'>
            <p>
              Salary Range: ${jobDetails?.min_salary} to $
              {jobDetails?.max_salary}{' '}
            </p>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <p className='text-blue-600 dark:text-blue-400 hover:underline'>
              total Applicants : {jobDetails?.Job_Applicants_Number}
            </p>

            <div className='flex items-center py-2'>
              <Link className='btn'>apply</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
